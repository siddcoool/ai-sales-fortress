import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Agencies from "@/components/sections/Agencies";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function BastilleLanding() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Agencies />
      <CTA />
      <Footer />
    </div>
  );
}