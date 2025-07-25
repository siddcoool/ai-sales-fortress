import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-glow"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
            Ready to <span className="text-indigo-200">Transform</span> Your
            Sales?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams already using Bastille to automate
            their pipeline and close more deals with AI.
          </p>

          {/* Features list */}
          <div className="flex flex-wrap justify-center gap-8 text-white text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-glow"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-glow"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-glow"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-glow"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 text-background fill-current"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"></path>
        </svg>
      </div>
    </section>
  );
}
