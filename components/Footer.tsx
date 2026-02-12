import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Heart, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    features: [
      { label: "For Business", href: "/features/business-flow" },
      { label: "For Creators", href: "/features/creator-flow" },
      { label: "Mental Health", href: "/features/mental-health" },
      { label: "Journey", href: "/support/journey" },
      { label: "Testimonials", href: "/features/testimonials" },
    ],
    support: [
      { label: "Help Center", href: "/support/help-center" },
      { label: "Privacy Policy", href: "/support/privacy-policy" },
      { label: "Terms of Service", href: "/support/terms-of-service" },
      { label: "Payment & Refund Policy", href: "/support/payment-refund-policy" },
    ],
    explore: [
      { label: "Blogs & News", href: "/blogs-news" },
      { label: "Reels", href: "/reels" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/kringp_india?igsh=OGZwcmVlaWFpMTZm", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1AYkneZNuD/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/kringp/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/KringP_india", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/@kringp_india?si=fUUqlr0sjkqS9Dy9", label: "YouTube" },
  ];

  return (
    <footer className="py-16 border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-light" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <img src="/logo.png" alt="KringP Logo" className="w-18 h-12 rounded-xl" />
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Where influence meets impact. Connecting local businesses with authentic creators globally.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Features Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Features</h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-border mb-8">
          <a href="mailto:hello@kringp.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>hello@kringp.com</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Ecosystem Support by:</span>
            <a href="https://innovationfactory.ca/" target="_blank" rel="noopener noreferrer">
              <img src="/supportby_1.png" alt="Support Logo" className="h-12 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} KringP (Mackring9 Private Limited). All rights reserved.
          </p>
          {/* <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in India
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;