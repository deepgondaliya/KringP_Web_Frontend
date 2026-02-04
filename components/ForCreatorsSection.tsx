import { UserPlus, Link2, Eye, TrendingUp, DollarSign, Users, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import JourneyPathClient from "@/components/JourneyPathClient";

const ForCreatorsSection = () => {
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
      description: "Connect your Instagram, YouTube, or Facebook platforms to automatically sync your analytics and performance data.",
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
    <section id="for-creators" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-light" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Creator Journey</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Path to <span className="text-gradient-orange">Success</span>
          </h2>
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
            <span className="text-muted-foreground">Join 5,000+ creators already on KringP</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="purple" className="text-lg px-8">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCreatorsSection;