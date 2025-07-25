import { Button } from "@/components/ui/button";
import { Code, Palette, Settings, Zap } from "lucide-react";

const agencyFeatures = [
  {
    icon: Palette,
    title: "White-Label Ready",
    description: "Fully customizable branding to match your agency's identity"
  },
  {
    icon: Code,
    title: "API-First Platform",
    description: "Seamless integration with any CRM or marketing tool"
  },
  {
    icon: Settings,
    title: "Multi-Client Management",
    description: "Manage hundreds of clients from a single dashboard"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get clients up and running in less than 24 hours"
  }
];

export default function Agencies() {
  return (
    <section id="agencies" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for <span className="gradient-text">Agencies</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Scale your agency with white-labeled AI sales automation. Offer cutting-edge technology 
              to your clients while maintaining complete control over branding and client relationships.
            </p>

            {/* Features list */}
            <div className="space-y-6 mb-8">
              {agencyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Agency Partnership
              </Button>
              <Button variant="outline-glow" size="lg">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Right column - Agency benefits */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Agency Benefits</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Revenue per Client</span>
                  <span className="text-2xl font-bold gradient-text">$5,000/mo</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Setup Time</span>
                  <span className="text-2xl font-bold gradient-text">&lt; 24hrs</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Commission Rate</span>
                  <span className="text-2xl font-bold gradient-text">30%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Support Level</span>
                  <span className="text-2xl font-bold gradient-text">24/7</span>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground italic mb-4">
                  "We've scaled from 10 to 100+ clients using Bastille's white-label platform. 
                  The ROI is incredible."
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                    alt="Agency Owner"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-semibold">Alex Thompson</div>
                    <div className="text-xs text-muted-foreground">CEO, Scale Digital</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl pulse-glow">
              <div className="text-xs font-semibold gradient-text">Partner Program</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}