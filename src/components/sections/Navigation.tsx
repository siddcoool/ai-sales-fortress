import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Agencies", href: "#agencies" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">Bastille</div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button variant="glow" size="sm">
              Get Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full">
                  Log In
                </Button>
                <Button variant="glow" size="sm" className="w-full">
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}