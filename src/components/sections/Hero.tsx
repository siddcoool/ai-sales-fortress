import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-glow"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Trust indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-secondary border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-white"></div>
              </div>
              <span className="text-sm text-muted-foreground">Trusted by 150k+ sales teams</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Your Sales Team,{" "}
              <span className="gradient-text">Reinvented by AI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Bastille automates your entire sales pipeline — from lead to close — with intelligent, 
              scalable AI agents that work 24/7.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Get Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="w-5 h-5" />
                See It in Action
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold gradient-text">300%</div>
                <div className="text-sm text-muted-foreground">Conversion Increase</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">AI Automation</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right column - Dashboard mockup */}
          <div className="relative">
            <div className="relative">
              <img 
                src={heroDashboard} 
                alt="Bastille AI Sales Dashboard" 
                className="w-full rounded-2xl shadow-2xl glow-hover float"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 glass-card p-4 rounded-xl slide-up">
                <div className="text-2xl font-bold gradient-text">318</div>
                <div className="text-xs text-muted-foreground">New leads</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl slide-up" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold gradient-text">$4,581</div>
                <div className="text-xs text-muted-foreground">Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 text-background fill-current">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"></path>
        </svg>
      </div>
    </section>
  );
}