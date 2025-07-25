import { ArrowRight } from "lucide-react";
import pipelineFlow from "@/assets/pipeline-flow.jpg";

const steps = [
  {
    number: "01",
    title: "Lead In",
    description: "Prospects arrive via website, ads, or social media"
  },
  {
    number: "02", 
    title: "AI Qualify",
    description: "Our AI bot instantly qualifies and scores each lead"
  },
  {
    number: "03",
    title: "Follow-Up",
    description: "Automated sequences across email, SMS, and voicemail"
  },
  {
    number: "04",
    title: "Appointment",
    description: "Smart calendar booking handles objections and schedules"
  },
  {
    number: "05",
    title: "Proposal",
    description: "Dynamic proposals generated and sent automatically"
  },
  {
    number: "06",
    title: "Close",
    description: "AI deal closer detects hot leads and sends closing messages"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI engine seamlessly handles your entire sales pipeline, from first contact to closed deal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 group">
                {/* Step number */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2"></div>
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-primary/50 hidden lg:block group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                )}
              </div>
            ))}
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={pipelineFlow} 
                alt="Sales Pipeline Flow"
                className="w-full h-auto glow-hover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-3xl font-bold gradient-text">6 Steps</div>
                  <div className="text-sm opacity-90">Fully Automated Process</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl pulse-glow">
              <div className="text-sm font-semibold gradient-text">AI Powered</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl pulse-glow" style={{animationDelay: '1s'}}>
              <div className="text-sm font-semibold gradient-text">24/7 Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}