import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "For Business", href: "#for-business" },
      { label: "For Creators", href: "#for-creators" },
      { label: "Pricing", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="py-16 border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-light" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-orange-purple flex items-center justify-center glow-orange-sm group-hover:glow-purple transition-all duration-300">
                <span className="text-primary-foreground font-display font-bold text-xl">K</span>
              </div>
              <span className="font-display font-bold text-2xl text-foreground">
                Kring<span className="text-gradient-orange">P</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Where influence meets impact. Connecting local businesses with authentic creators across India.
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

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
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
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 py-8 border-t border-border mb-8">
          <a href="mailto:hello@kringp.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>hello@kringp.com</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Ahmedabad, India</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} KringP. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;