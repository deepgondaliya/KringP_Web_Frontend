"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { FaMeta } from "react-icons/fa6"
import { useState, useEffect } from "react"

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 9;
  
  const influencerTags = [
    "Lifestyle Influencer",
    "Beauty Product Influencer",
    "Food Blogger",
    "Fashion Influencer",
    "Travel Influencer",
    "Fitness Influencer", 
    "Business Owner",
    "Reastaurant Owner",
    "franchise owner",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => prev >= totalImages ? 1 : prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-light" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[58%_42%] gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/40 mb-8 animate-fade-in-up">
              <div className="flex items-center gap-3">
                {/* Meta Icon */}
                <FaMeta className="w-6 h-6 text-blue-600" />
                <span>+</span>
                {/* Google Icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" className="text-blue-500"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" className="text-green-500"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" className="text-yellow-500"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" className="text-red-500"/>
                </svg>
              </div>
              <span className="text-sm md:text-base font-semibold text-gradient-orange">Meta & Google API Approved</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.15] mb-8 animate-fade-in-up">
              Where <span className="text-gradient-orange">Brands</span> Meet{" "}
              <span className="relative inline-block">
                <span className="text-gradient-orange">Local Influence</span>
                <svg className="absolute -bottom-2 md:-bottom-5 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <defs>
                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(25 95% 53%)" />
                      <stop offset="100%" stopColor="hsl(270 95% 65%)" />
                    </linearGradient>
                  </defs>
                  <path d="M2 10C50 2 150 2 198 10" stroke="url(#heroGradient)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <span className=""> — </span>
              <span className="text-gradient-orange">Globally</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in-up-delayed max-w-2xl">
              KringP is a global influencer marketplace that helps businesses find local creators, connect with the right influencers, and run high-impact campaigns using real-time analytics, location-based targeting, and advanced discovery filters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap items-center lg:items-start lg:justify-start justify-center gap-3 mb-16 animate-fade-in-up-delayed">
              <Button variant="hero" className="group h-11 px-6 md:h-14 md:px-10 md:text-base">
                I'm a Business
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="purpleOutline" className="group h-11 px-6 md:h-14 md:px-10 md:text-base">
                I'm a Creator
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in">
              {[
                { value: "5K+", label: "Active Creators" },
                { value: "4K+", label: "Businesses" },
                { value: "10K+", label: "Collaborations" },
                { value: "₹0.5Cr+", label: "Paid to Creators" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left group">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient-orange mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex lg:hidden justify-center items-center mt-12 mb-8 animate-fade-in-up relative">
            <div className="relative max-w-xs">
              <img 
                src={`/model_${currentImage}.png`}
                alt="KringP Platform Illustration" 
                className="w-full h-auto transition-opacity duration-500"
                key={currentImage}
              />
              {/* Influencer Tag */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg">
                <span className="text-white font-semibold text-xs">
                  {influencerTags[currentImage - 1]}
                </span>
              </div>
              {/* Optional glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 scale-75" />
            </div>
          </div>

          {/* Right Image - Desktop */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in-right relative">
            <div className="relative">
              <img 
                src={`/model_${currentImage}.png`}
                alt="KringP Platform Illustration" 
                className="w-full max-w-lg h-auto transition-opacity duration-500"
                key={currentImage}
              />
              {/* Influencer Tag */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg">
                <span className="text-white font-semibold text-sm">
                  {influencerTags[currentImage - 1]}
                </span>
              </div>
              {/* Optional glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection