import { UserPlus, Search, Filter, MessageSquare, FileCheck, CreditCard, Rocket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessJourneyPath from "@/components/BusinessJourneyPath";

const ForBusinessSection = () => {
  const businessSteps = [
    {
      iconName: "UserPlus",
      title: "Create Business Account",
      description: "Sign up for free and set up your business profile with your brand details and campaign preferences.",
      details: [
        "Free account creation",
        "Add brand logo & description",
        "Set campaign preferences"
      ]
    },
    {
      iconName: "Search",
      title: "Discover Creators",
      description: "Browse our extensive database of verified creators and find the perfect match for your brand.",
      details: [
        "Access to 5,000+ creators",
        "View detailed profiles",
        "Check authenticity scores"
      ]
    },
    {
      iconName: "Filter",
      title: "Smart Filtering",
      description: "Use powerful filters to narrow down creators by niche, location, engagement rate, and audience demographics.",
      details: [
        "Filter by niche & category",
        "Location-based search",
        "Engagement rate thresholds"
      ]
    },
    {
      iconName: "MessageSquare",
      title: "Connect & Chat",
      description: "Reach out directly to creators. Discuss your campaign, negotiate terms, and build relationships.",
      details: [
        "In-app messaging system",
        "Share campaign briefs",
        "Real-time notifications"
      ]
    },
    {
      iconName: "FileCheck",
      title: "Finalize Collaboration",
      description: "Agree on deliverables, timeline, and pricing. Everything documented and transparent.",
      details: [
        "Clear deliverable tracking",
        "Timeline management",
        "Contract generation"
      ]
    },
    {
      iconName: "CreditCard",
      title: "Secure Payment",
      description: "Pay securely through our platform. Funds held in escrow until work is delivered and approved.",
      details: [
        "Escrow protection",
        "20% platform fee only",
        "Multiple payment options"
      ]
    },
  ];

  return (
    <section id="for-business" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-light" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Business Journey</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Path to <span className="text-gradient-orange">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From discovery to campaign success. Follow the simple steps to connect 
            with the perfect creators for your brand.
          </p>
        </div>

        {/* Journey Path */}
        <BusinessJourneyPath steps={businessSteps} />

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-24">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-3xl font-bold text-primary">Free</span>
            <span className="text-muted-foreground">to start</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="text-lg px-8">
              Start Finding Creators
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinessSection;