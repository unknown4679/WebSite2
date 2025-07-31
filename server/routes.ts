import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid contact data" 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Chat message submission
  app.post("/api/chat", async (req, res) => {
    try {
      const validatedData = insertChatMessageSchema.parse(req.body);
      const message = await storage.createChatMessage(validatedData);
      
      // Generate AI response
      if (validatedData.sender === "user") {
        const aiResponses = [
          "I can help you analyze that data. Let me process the information and provide insights based on current market trends.",
          "Based on the patterns I'm seeing in your business data, here are my strategic recommendations for optimization.",
          "The predictive model suggests a 15-20% increase in this metric over the next quarter based on historical performance.",
          "I've identified some interesting trends in your data. The S.P.E.A.R.™ algorithm recommends focusing on customer retention strategies.",
          "Our AI analysis indicates strong growth potential in this area. Would you like me to provide a detailed breakdown?",
          "The data shows seasonal patterns that align with industry benchmarks. I can help you capitalize on upcoming opportunities."
        ];
        
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        
        // Create AI response with delay
        setTimeout(async () => {
          await storage.createChatMessage({
            message: randomResponse,
            sender: "ai"
          });
        }, 1000);
      }
      
      res.json({ success: true, message });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid message data" 
      });
    }
  });

  // Get chat messages
  app.get("/api/chat", async (req, res) => {
    try {
      const messages = await storage.getChatMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch chat messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
