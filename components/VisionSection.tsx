import { Coffee, Shirt, GraduationCap, Camera, Heart, Globe } from "lucide-react";

const VisionSection = () => {
  const scenarios = [
    {
      icon: Coffee,
      text: "A small café finds the perfect food blogger in minutes",
    },
    {
      icon: Shirt,
      text: "A local clothing store gets a model from the same city",
    },
    {
      icon: GraduationCap,
      text: "A college creator earns money for their creativity",
    },
    {
      icon: Camera,
      text: "A photographer builds lasting partnerships with brands",
    },
    {
      icon: Heart,
      text: "A wellness coach connects with health-conscious businesses",
    },
    {
      icon: Globe,
      text: "A travel blogger discovers opportunities across continents",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(25_95%_53%_/_0.08),_hsl(270_95%_65%_/_0.05),_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            Our Vision
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            The Future We're{" "}
            <span className="text-gradient-orange">Building</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 leading-relaxed">
            Imagine a world where opportunities don't happen by chance—
            they happen by <span className="text-primary font-semibold">connection</span>.
          </p>

          {/* Scenarios */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-border rounded-xl md:rounded-2xl hover:border-primary/30 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <scenario.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <p className="text-left text-sm md:text-base text-foreground">{scenario.text}</p>
              </div>
            ))}
          </div>

          <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-card/50 backdrop-blur-sm border border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl lg:text-2xl font-display leading-relaxed">
                A future where businesses grow with{" "}
                <span className="text-gradient-orange font-bold">authenticity</span>,
                <br />
                and influencers grow with{" "}
                <span className="text-gradient-orange font-bold">dignity</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;