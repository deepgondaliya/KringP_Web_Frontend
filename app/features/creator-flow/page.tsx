'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JourneyPathClient from "@/components/JourneyPathClient";
import { Sparkles, Heart, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreatorFlow() {
  const [showAppButtons, setShowAppButtons] = useState(false);
  const creatorSteps = [
    {
      iconName: "UserPlus",
      title: "Create Your Profile",
      description: "Sign up in minutes and build your professional creator profile that showcases your unique style and strengths.",
      details: [
        "Quick 2-minute signup process",
        "Showcase your niche & expertise",
        "Add portfolio samples"
      ]
    },
    {
      iconName: "Link2",
      title: "Link Your Socials",
      description: "Connect your Instagram, YouTube, and other platforms to automatically sync your analytics and performance data.",
      details: [
        "One-click social media integration",
        "Auto-sync follower counts",
        "Real-time engagement tracking"
      ]
    },
    {
      iconName: "Eye",
      title: "Get Discovered",
      description: "Brands search and find you based on your niche, location, engagement rate, and content quality.",
      details: [
        "Appear in brand searches",
        "Get matched with relevant brands",
        "Receive collaboration requests"
      ]
    },
    {
      iconName: "TrendingUp",
      title: "Grow Your Metrics",
      description: "Your analytics update automatically, showing brands your real growth and performance trends.",
      details: [
        "90-day performance graphs",
        "Engagement rate calculations",
        "Audience demographics display"
      ]
    },
    {
      iconName: "DollarSign",
      title: "Earn & Get Paid",
      description: "Collaborate with brands and receive secure, transparent payments directly to your account.",
      details: [
        "Secure escrow payments",
        "Clear pricing structure",
        "Fast payouts"
      ]
    },
    {
      iconName: "Users",
      title: "Join the Community",
      description: "Connect with fellow creators, share experiences, and grow together in our supportive community.",
      details: [
        "Creator collaboration groups",
        "Peer networking opportunities",
        "Mentorship programs"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Creator Journey</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Your Path to <span className="text-gradient-orange">Success</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow the journey from signup to success. Every step brings you closer to 
                real opportunities and meaningful collaborations.
              </p>
            </div>

            {/* Journey Path */}
            <JourneyPathClient steps={creatorSteps} />

            {/* Bottom CTA */}
            <div className="text-center mt-16 md:mt-24">
              <div className="inline-flex items-center gap-2 mb-6">
                <Heart className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-muted-foreground">Join 10,000+ creators already on KringP</span>
              </div>
              {!showAppButtons ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" variant="purple" className="text-lg px-8" onClick={() => setShowAppButtons(true)}>
                    Start Your Journey
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