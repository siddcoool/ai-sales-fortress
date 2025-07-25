import { Bot, MessageSquare, Calendar, Phone, FileText, Target, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Lead Qualification Bot",
    description: "Instantly qualify leads from chat, SMS, or socials with intelligent conversation flows.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Follow-Up System",
    description: "Adaptive drip sequences across SMS, email, and voicemail that learn and optimize.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Calendar,
    title: "Smart Calendar Booking AI",
    description: "Handles objections, negotiates time, and syncs calendars automatically.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Phone,
    title: "AI Voicemail & Cold Call Agent",
    description: "Realistic voice cloning and sentiment-driven calls that convert.",
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: FileText,
    title: "Proposal & Quote Generator",
    description: "Dynamic, personalized proposals triggered post-qualification.",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Target,
    title: "AI Deal Closer",
    description: "Detects hot leads and sends urgency-based closing messages at perfect timing.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Live Handoff Router",
    description: "Prioritizes and routes high-LTV leads to real closers when needed.",
    color: "from-emerald-500 to-emerald-600"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">What We Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Seven powerful AI modules that work together to transform your sales process from fragmented workflows into a seamless automation engine.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}