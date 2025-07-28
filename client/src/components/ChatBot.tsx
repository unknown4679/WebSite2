import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send, Bot, User } from "lucide-react";
import type { ChatMessage } from "@shared/schema";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const { data: messages = [] } = useQuery<ChatMessage[]>({
    queryKey: ["/api/chat"],
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("POST", "/api/chat", {
        message,
        sender: "user",
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
      setMessage("");
      // Poll for AI response
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
      }, 1500);
    },
  });

  const handleSendMessage = () => {
    if (!message.trim()) return;
    sendMessageMutation.mutate(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-6 pb-4 border-b border-slate-200">
        <div className="w-10 h-10 brand-gradient rounded-lg flex items-center justify-center mr-3">
          <Bot className="text-white" size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">S.P.E.A.R.™ Assistant</h3>
          <p className="text-sm text-slate-500">AI-powered business advisor</p>
        </div>
        <div className="ml-auto">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="space-y-4 mb-6 h-96 overflow-y-auto">
        {messages.length === 0 && (
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Bot className="text-white" size={16} />
            </div>
            <div className="bg-slate-100 rounded-2xl px-4 py-3 max-w-xs">
              <p className="text-sm text-slate-700">
                Hello! I'm your S.P.E.A.R.™ AI assistant. I can help you analyze business data, predict trends, and provide strategic recommendations. What would you like to explore today?
              </p>
            </div>
          </div>
        )}
        
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start space-x-3 ${
              msg.sender === "user" ? "justify-end" : ""
            }`}
          >
            {msg.sender === "ai" && (
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Bot className="text-white" size={16} />
              </div>
            )}
            <div
              className={`rounded-2xl px-4 py-3 max-w-md ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              <p className="text-sm">{msg.message}</p>
            </div>
            {msg.sender === "user" && (
              <div className="w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center">
                <User className="text-white" size={16} />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat Input */}
      <div className="flex items-center space-x-3">
        <Input
          type="text"
          placeholder="Ask S.P.E.A.R.™ anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 rounded-full"
          disabled={sendMessageMutation.isPending}
        />
        <Button
          onClick={handleSendMessage}
          disabled={sendMessageMutation.isPending || !message.trim()}
          className="rounded-full bg-blue-600 hover:bg-blue-700"
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
}
