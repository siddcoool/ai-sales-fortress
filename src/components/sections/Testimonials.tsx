import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Sales Director",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Bastille transformed our sales process completely. We're closing 3x more deals with half the effort.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "Digital Marketing Pro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The AI agents work 24/7 and never miss a lead. Our conversion rate went from 12% to 47%.",
    rating: 5
  },
  {
    name: "Jessica Park",
    role: "VP of Sales",
    company: "Growth Dynamics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Implementation was seamless and ROI was immediate. Bastille pays for itself within the first month.",
    rating: 5
  }
];

const logos = [
  "TechFlow", "Growth Dynamics", "Digital Pro", "Sales Force", "Lead Gen Co", "Convert Plus"
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Logos section */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-8">Trusted by 150k+ sales teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how sales teams are transforming their results with Bastille.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}