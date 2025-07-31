import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DemoStatsProvider } from "@/context/DemoStatsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Demo from "@/pages/Demo";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Protocol from "@/pages/Protocol";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/demo" component={Demo} />
      <Route path="/blog" component={Blog} />
      <Route path="/protocol" component={Protocol} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DemoStatsProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </DemoStatsProvider>
    </QueryClientProvider>
  );
}

export default App;
