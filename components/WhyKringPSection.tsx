import { Eye, Heart, Shield, Globe, DollarSign } from "lucide-react";

const WhyKringPSection = () => {
  const features = [
    {
      title: "Smart Proposal System",
      description: "Businesses create proposals, and influencers apply based on interest. Review profiles, chat directly, and collaborate with confidence.",
      highlight: "📋",
    },
    {
      title: "Lifetime Income Potential",
      description: "Influencers build trust and reputation through client reviews, unlocking sustainable long-term earnings.",
      highlight: "💰",
    },
    {
      title: "Worldwide Connections",
      description: "Connect businesses and creators globally. Break geographical barriers and expand your reach internationally.",
      highlight: "🌍",
    },
    {
      title: "Secure Payments & Privacy",
      description: "Safe in-app payments with escrow-style protection. Your data stays private and never shared with third parties.",
      highlight: "🔐",
    },
    {
      title: "Free to Use",
      description: "You can use KringP completely free. We charge only 20% from successful influencer collaborations.",
      highlight: "💸",
    },
    {
      title: "Data-Driven Creator Discovery",
      description: "Advanced analytics, engagement metrics, and location-based filters help businesses find the right influencers—locally or globally—for every campaign.",
      highlight: "📊",
    },
  ];

  return (
    <section id="why-kringp" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Why{" "}
            <span className="text-gradient-orange">KringP</span>{" "}
            Stands Out
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Global Connections. Local Opportunities. Real Results. KringP helps businesses and creators connect with smart tools, transparent processes, and lifetime collaboration potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 h-full hover:border-primary/30 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="text-3xl md:text-4xl flex-shrink-0">{feature.highlight}</div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-12 md:mt-16 px-4">
          <p className="text-lg md:text-xl lg:text-2xl font-display">
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