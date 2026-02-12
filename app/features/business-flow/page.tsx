'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessJourneyPath from "@/components/BusinessJourneyPath";
import { Building2, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BusinessFlow() {
  const [showAppButtons, setShowAppButtons] = useState(false);
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
        "Access to 50,000+ creators",
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
    {
      iconName: "Rocket",
      title: "Launch & Track",
      description: "Launch your campaign and track performance with real-time analytics and ROI measurements.",
      details: [
        "Campaign analytics dashboard",
        "ROI tracking",
        "Performance reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Business Journey</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Your Path to <span className="text-gradient-orange">Growth</span>
              </h1>
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
              {!showAppButtons ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" variant="hero" className="text-lg px-8" onClick={() => setShowAppButtons(true)}>
                    Start Finding Creators
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </main>

      <Footer />
    </div>
  );
}