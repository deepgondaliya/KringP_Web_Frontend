"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Heart, MessageCircle, Headphones } from "lucide-react";

const emotions = [
  {
    name: "Happy",
    emoji: "😊",
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-full",
    arrowRotate: "rotate-0",
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "Anxious",
    emoji: "😰",
    position: "top-8 right-0 translate-x-full",
    arrowRotate: "rotate-45",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Sad",
    emoji: "😢",
    position: "bottom-8 right-0 translate-x-full",
    arrowRotate: "rotate-[135deg]",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Depressed",
    emoji: "😞",
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full",
    arrowRotate: "rotate-180",
    color: "from-gray-500 to-slate-600",
  },
  {
    name: "Frustrated",
    emoji: "😤",
    position: "bottom-8 left-0 -translate-x-full",
    arrowRotate: "rotate-[-135deg]",
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Stressed",
    emoji: "😵",
    position: "top-8 left-0 -translate-x-full",
    arrowRotate: "rotate-[-45deg]",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Overwhelmed",
    emoji: "🤯",
    position: "top-4 right-4 translate-x-3/4 -translate-y-1/2",
    arrowRotate: "rotate-[30deg]",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Lonely",
    emoji: "😔",
    position: "bottom-4 right-4 translate-x-3/4 translate-y-1/2",
    arrowRotate: "rotate-[150deg]",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Burnt Out",
    emoji: "😴",
    position: "bottom-4 left-4 -translate-x-3/4 translate-y-1/2",
    arrowRotate: "rotate-[-150deg]",
    color: "from-slate-500 to-gray-600",
  },
  {
    name: "Excited",
    emoji: "🤩",
    position: "top-4 left-4 -translate-x-3/4 -translate-y-1/2",
    arrowRotate: "rotate-[-30deg]",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Confused",
    emoji: "😕",
    position: "right-0 top-1/2 translate-x-full -translate-y-1/2",
    arrowRotate: "rotate-90",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Motivated",
    emoji: "💪",
    position: "left-0 top-1/2 -translate-x-full -translate-y-1/2",
    arrowRotate: "rotate-[-90deg]",
    color: "from-cyan-400 to-blue-500",
  },
];

export default function MentalHealth() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Full Page Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Navbar />

      {/* Hero Section with Big Brain */}
      <section className="pt-24 md:pt-32 pb-6 relative overflow-hidden">
        {/* Background neurons effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/15 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-3 md:mb-4">
            <span className="text-gradient-orange">Mental Health</span> Support
          </h1>
          <p className="text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-12 md:mb-16">
            Because creators are human, and burnout is real
          </p>

          {/* Big Brain with Emotion Labels */}
          <div className="flex justify-center mb-12 md:mb-20">
            <div className="relative">
              {/* Main Brain - Using brain_1.png */}
              <div className="relative w-64 h-64 md:w-[800px] md:h-[500px] mx-auto">
                <img
                  src="/brain_1.png"
                  alt="Brain illustration"
                  className="w-full h-full object-contain animate-pulse"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(255, 102, 0, 0.3))",
                  }}
                />

                {/* Dotted Lines - Desktop only */}
                <svg
                  className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 1 }}
                >
                  {/* Left side lines */}
                  {emotions.slice(0, 6).map((emotion, index) => {
                    const yPos = 50 + (index - 2.5) * 16; // Distribute vertically
                    return (
                      <line
                        key={`left-${emotion.name}`}
                        x1="18%"
                        y1="50%"
                        x2="5%"
                        y2={`${yPos}%`}
                        stroke="rgb(255 102 0 / 0.6)"
                        strokeWidth="1.5"
                        strokeDasharray="8,4"
                        className="animate-pulse"
                      />
                    );
                  })}
                  {/* Right side lines */}
                  {emotions.slice(6, 12).map((emotion, index) => {
                    const yPos = 50 + (index - 2.5) * 16; // Distribute vertically
                    return (
                      <line
                        key={`right-${emotion.name}`}
                        x1="84%"
                        y1="50%"
                        x2="95%"
                        y2={`${yPos}%`}
                        stroke="rgb(255 102 0 / 0.6)"
                        strokeWidth="1.5"
                        strokeDasharray="8,4"
                        className="animate-pulse"
                      />
                    );
                  })}
                </svg>

                {/* Emotion Labels - Desktop only */}
                <div className="hidden md:block absolute inset-0" style={{ zIndex: 2 }}>
                  {/* Left side emotions */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full space-y-4">
                    {emotions.slice(0, 6).map((emotion, index) => (
                      <div
                        key={emotion.name}
                        className="flex items-center justify-end"
                      >
                        <div
                          className={`
                          flex items-center gap-1 md:gap-2 px-2 py-2 md:px-4 md:py-4 rounded-full 
                          bg-gradient-to-r ${emotion.color} 
                          shadow-lg transform hover:scale-110 transition-transform cursor-pointer
                        `}
                        >
                          <span className="text-sm md:text-xl lg:text-2xl">
                            {emotion.emoji}
                          </span>
                          <span className="text-white font-semibold text-xs md:text-sm lg:text-base whitespace-nowrap">
                            {emotion.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right side emotions */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full space-y-4">
                    {emotions.slice(6, 12).map((emotion, index) => (
                      <div
                        key={emotion.name}
                        className="flex items-center justify-start"
                      >
                        <div
                          className={`
                          flex items-center gap-1 md:gap-2 px-2 py-2 md:px-4 md:py-4 rounded-full 
                          bg-gradient-to-r ${emotion.color} 
                          shadow-lg transform hover:scale-110 transition-transform cursor-pointer
                        `}
                        >
                          <span className="text-sm md:text-xl lg:text-2xl">
                            {emotion.emoji}
                          </span>
                          <span className="text-white font-semibold text-xs md:text-sm lg:text-base whitespace-nowrap">
                            {emotion.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Emotion Grid */}
              <div className="md:hidden mt-8 grid grid-cols-2 gap-3 max-w-sm mx-auto">
                {emotions.map((emotion) => (
                  <div
                    key={emotion.name}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r ${emotion.color} shadow-lg`}
                  >
                    <span className="text-lg">{emotion.emoji}</span>
                    <span className="text-white font-semibold text-xs whitespace-nowrap">
                      {emotion.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KringP Solution Section */}
      <section className="py-12 md:py-20 relative">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            How <span className="text-gradient-orange">KringP</span> Helps You
            Heal
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in a human-first approach. When you're struggling, KringP
            is here to support you.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="relative flex-shrink-0">
                  {/* Vibrant calling rings */}
                  <div className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 animate-ping" />
                  <div
                    className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                  <MessageCircle className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary relative z-10 animate-bounce" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground">
                  Free 24/7 Mental Health Support through{" "}
                  <span className="text-gradient-orange">
                    Vandervala Foundation
                  </span>
                </h3>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                At KringP, your well-being matters. We’ve partnered with the
                Vanderwala Foundation to bring their dedicated mental health
                support services directly to our platform—for free. Whether
                you’re feeling stressed, anxious, or overwhelmed, you can call
                or chat with trained counselors 24/7. Share your feelings,
                receive guidance, and find your calm—anytime, anywhere.
              </p>

              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-500 border border-blue-500/30">
                  <div className="text-xl md:text-2xl mb-1 md:mb-2">🎯</div>
                  <div className="font-semibold text-white mb-1 text-xs md:text-base">
                    No Judgment
                  </div>
                  <div className="text-xs md:text-sm text-blue-100">Just pure support</div>
                </div>
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 border border-green-500/30">
                  <div className="text-xl md:text-2xl mb-1 md:mb-2">🤝</div>
                  <div className="font-semibold text-white mb-1 text-xs md:text-base">
                    Creator Community
                  </div>
                  <div className="text-xs md:text-sm text-green-100">
                    By creators, for creators
                  </div>
                </div>
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 border border-yellow-500/30">
                  <div className="text-xl md:text-2xl mb-1 md:mb-2">💛</div>
                  <div className="font-semibold text-white mb-1 text-xs md:text-base">
                    Always Available
                  </div>
                  <div className="text-xs md:text-sm text-yellow-100">
                    24/7 support line
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src="/doctor_1.png"
                alt="Doctor support"
                className="w-full max-w-xs md:max-w-lg lg:max-w-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <img
                src="/doctor_2.png"
                alt="Doctor support"
                className="w-full max-w-xs md:max-w-lg lg:max-w-2xl object-contain"
              />
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 justify-center lg:justify-start mb-4 md:mb-6">
                <Heart className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-accent animate-pulse flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold">
                  You're <span className="text-gradient-orange">Not Alone</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10 leading-relaxed">
                Join KringP — a platform that values you as a person, not just a
                creator. Because when you're healthy, your creativity shines
                brightest.
              </p>

              <button className="px-8 py-4 md:px-12 md:py-5 bg-gradient-orange-purple text-background font-bold text-base md:text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30 mb-6 md:mb-8">
                Join KringP Today
              </button>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-sm md:text-base text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Free to join
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  Secure & private
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  Creator-focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
