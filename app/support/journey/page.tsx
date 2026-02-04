"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, MapPin, Rocket, Target, Users, Sparkles, Heart, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const journeySteps = [
  {
    year: "2024",
    title: "The Spark",
    description: "KringP was born from a simple observation: creators and businesses needed a better way to connect authentically.",
    icon: Sparkles,
    color: "from-yellow-400 to-orange-500",
  },
  {
    year: "2025",
    title: "Building the Foundation",
    description: "We assembled a passionate team of creators, developers, and business strategists to build something truly different.",
    icon: Users,
    color: "from-blue-400 to-purple-500",
  },
  {
    year: "2025",
    title: "Beta Launch",
    description: "Our first creators joined the platform, providing invaluable feedback that shaped our core features.",
    icon: Rocket,
    color: "from-green-400 to-teal-500",
  },
  {
    year: "2025",
    title: "Growing Together",
    description: "Thousands of creators and businesses found their perfect match through our intelligent collaboration system.",
    icon: Target,
    color: "from-pink-400 to-red-500",
  },
  {
    year: "2026",
    title: "Mental Health First",
    description: "We launched our mental health support system, recognizing that creator wellbeing is crucial for sustainable success.",
    icon: Heart,
    color: "from-purple-400 to-indigo-500",
  },
  {
    year: "Future",
    title: "Your Success Story",
    description: "The journey continues with you. Together, we're redefining how creators and businesses collaborate.",
    icon: Trophy,
    color: "from-primary to-yellow-400",
  },
];

export default function Journey() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-background pt-32 pb-16">
        <div className="container mx-auto px-6">
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-gradient-orange font-semibold">Our Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              The Road That Brought Us{" "}
              <span className="text-gradient-orange">Here</span>
            </h1>
            
            <p className="text-muted-foreground max-w-2xl">
              Every great platform has a story. Discover how KringP evolved from a simple idea 
              into a thriving ecosystem for creators and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-6 py-20">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full hidden md:block" />
          
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}>
                    <span className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-semibold mb-4`}>
                      {step.year}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators and businesses who are writing the next chapter with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
              Start Your Journey <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}