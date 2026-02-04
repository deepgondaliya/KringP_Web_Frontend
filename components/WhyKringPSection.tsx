import { Eye, Heart, Shield, Globe, DollarSign } from "lucide-react";

const WhyKringPSection = () => {
  const features = [
    {
      title: "Smart Proposal System",
      description: "Businesses create proposals, influencers apply based on interest. Review profiles and chat directly before collaboration.",
      highlight: "📋",
    },
    {
      title: "Lifetime Income Potential",
      description: "Influencers build trust and reputation through client reviews, creating opportunities for sustainable long-term income.",
      highlight: "💰",
    },
    {
      title: "Worldwide Connections",
      description: "Connect influencers and businesses globally. Break geographical barriers and expand your reach internationally.",
      highlight: "🌍",
    },
    {
      title: "Secure Payments & Privacy",
      description: "Secure in-app payments with no delays. Your data stays private - never shared with third parties.",
      highlight: "🔐",
    },
    {
      title: "Free to Use",
      description: "Completely free for businesses. We only take 20% from influencer's successful collaboration amount.",
      highlight: "💸",
    },
  ];

  return (
    <section id="why-kringp" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Makes{" "}
            <span className="text-gradient-orange">KringP</span>{" "}
            Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting businesses and influencers worldwide with smart tools and lifetime opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-3xl p-8 h-full hover:border-primary/30 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{feature.highlight}</div>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
          <p className="text-2xl font-display">
            This is not just a business—
            <br />
            <span className="text-gradient-orange font-bold">this is a responsibility.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyKringPSection;