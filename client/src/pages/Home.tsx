import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, Shield, ChartLine } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Revolutionize Your Business with{" "}
                <span className="brand-gradient-text">S.P.E.A.R.™ AI</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Strategic Predictive Enterprise Analytics & Recommendations. Transform your decision-making with cutting-edge artificial intelligence that adapts to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 hover:border-white/50 text-white glass-effect"
                  asChild
                >
                  <Link href="/demo">View Demo</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative glass-effect rounded-2xl p-8 shadow-2xl">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <ChartLine className="w-16 h-16 text-white mx-auto mb-4" />
                    <p className="text-white/80">AI Technology Interface</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 brand-gradient rounded-full flex items-center justify-center shadow-lg">
                  <ChartLine className="text-white" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Powerful AI-Driven Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our S.P.E.A.R.™ technology delivers actionable insights that drive real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 brand-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Predictive Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Advanced machine learning algorithms analyze patterns to predict future trends and opportunities.
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Smart Recommendations</h3>
              <p className="text-slate-600 leading-relaxed">
                Get personalized recommendations based on your business data and industry best practices.
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
              <div className="w-16 h-16 brand-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Enterprise Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Bank-level encryption and security protocols ensure your data remains protected and private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
              <div className="text-slate-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.7%</div>
              <div className="text-slate-300">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">250%</div>
              <div className="text-slate-300">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
