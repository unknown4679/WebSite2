import ChatBot from "@/components/ChatBot";
import ProductCard from "@/components/ProductCard";
import { BarChart3 } from "lucide-react";

export default function Demo() {
  const demoProducts = [
    {
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: "$299",
      sales: 1247,
      rating: 4.8,
      stock: 847,
      prediction: {
        type: "increase" as const,
        value: "23% demand increase"
      },
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Smart Fitness Tracker",
      category: "Wearables",
      price: "$199",
      sales: 2156,
      rating: 4.6,
      stock: 1234,
      prediction: {
        type: "stable" as const,
        value: "Stable demand"
      },
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Gaming Mechanical Keyboard",
      category: "Gaming",
      price: "$149",
      sales: 892,
      rating: 4.7,
      stock: 456,
      prediction: {
        type: "increase" as const,
        value: "18% growth predicted"
      },
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <div className="page-transition">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Experience S.P.E.A.R.™ AI</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Try our interactive demo to see how S.P.E.A.R.™ can transform your business decisions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Chatbot Interface */}
            <ChatBot />
            
            {/* Product Showcase */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Demo Products</h3>
              
              {demoProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
              
              {/* Demo Analytics Panel */}
              <div className="brand-gradient rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 size={20} />
                  Real-time Analytics
                </h4>
                <div className="w-full h-32 bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-white/70 mx-auto mb-2" />
                    <p className="text-white/70 text-sm">E-commerce Analytics Dashboard</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Revenue Today</div>
                    <div className="text-2xl font-bold">$47,230</div>
                  </div>
                  <div>
                    <div className="font-semibold">Active Users</div>
                    <div className="text-2xl font-bold">1,847</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
