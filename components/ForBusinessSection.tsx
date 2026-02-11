"use client";

import { UserPlus, Search, Filter, MessageSquare, FileCheck, CreditCard, Rocket, Building2, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessJourneyPath from "@/components/BusinessJourneyPath";
import { useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const ForBusinessSection = () => {
  const [showAppButtons, setShowAppButtons] = useState(false);
  const businessSteps = [
    {
      iconName: "UserPlus",
      title: "Create Your Business Account",
      description: "Sign up for free and set up your business profile to start discovering local creators and influencers that match your goals.",
      details: [
        "Free business account creation",
        "Add business logo, description & location",
        "Set campaign goals and preferences"
      ]
    },
    {
      iconName: "Search",
      title: "Discover Creators",
      description: "Explore a growing network of verified local and global creators and find the right influencers for your business campaigns using smart filters and real-time insights.",
      details: [
        "Access thousands of verified creators",
        "View detailed creator profiles & performance analytics",
        "Check authenticity and engagement scores"
      ]
    },
    {
      iconName: "Filter",
      title: "Smart Filtering",
      description: "Use advanced filters to quickly find local creators and influencers that perfectly match your business goals, audience, and campaign requirements.",
      details: [
        "Filter creators by niche, category & platform",
        "Location-based creator search (city, region, country)",
        "Set engagement rate and performance thresholds"
      ]
    },
    {
      iconName: "MessageSquare",
      title: "Connect & Chat",
      description: "Connect directly with local and global creators to discuss campaign details, align expectations, and build long-term business–creator relationships.",
      details: [
        "Secure in-app messaging with creators",
        "Share campaign briefs, goals & timelines",
        "Get real-time chat notifications"
      ]
    },
    {
      iconName: "FileCheck",
      title: "Finalize Collaboration",
      description: "Confirm your collaboration by aligning on deliverables, timelines, and pricing with creators—keeping everything clear, transparent, and easy to manage.",
      details: [
        "Clear deliverable and milestone tracking",
        "Campaign timeline and deadline management",
        "Documented collaboration terms inside the platform"
      ]
    },
    {
      iconName: "CreditCard",
      title: "Secure Payments",
      description: "Make payments securely through the KringP platform with complete transparency. Funds are protected until campaign deliverables are completed and approved.",
      details: [
        "Escrow-style payment protection",
        "Simple 20% platform service fee",
        "Multiple secure payment options"
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to <span className="text-gradient-orange">Business Growth</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From discovery to campaign success. Follow these simple steps to connect 
            with the perfect local and global creators for your brand.
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
          {!showAppButtons ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="text-lg px-8" onClick={() => setShowAppButtons(true)}>
                Start Finding Creators
              </Button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/in/app/kringp/id6747716001" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-all hover:scale-105 text-base font-semibold">
                  <Apple className="w-5 h-5" />
                  App Store
                </button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.app.kringp" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-orange-purple text-white rounded-lg hover:scale-105 transition-all text-base font-semibold glow-combo-sm hover:glow-combo">
                  <Smartphone className="w-5 h-5" />
                  Play Store
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForBusinessSection;