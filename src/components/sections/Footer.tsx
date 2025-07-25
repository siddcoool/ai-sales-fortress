import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Docs", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  Resources: [
    { name: "Help Center", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Status", href: "#" },
    { name: "Security", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Github, href: "#", name: "GitHub" },
  { icon: Mail, href: "#", name: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">Bastille</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI-powered sales automation platform that transforms your sales pipeline 
              with intelligent agents working 24/7.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Bastille. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}