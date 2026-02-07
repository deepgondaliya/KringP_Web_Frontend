"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Instagram, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

const reelsData = [
  {
    id: 1,
    videoUrl: "/reel_1.mp4",
    username: "@kneat_events",
    likes: "12.4K",
    comments: "234"
  },
  {
    id: 2,
    videoUrl: "/reel_2.mp4",
    username: "@sakshithakur.0",
    likes: "8.7K",
    comments: "156"
  },
  {
    id: 3,
    videoUrl: "/reel_3.mp4",
    username: "@travel_tales",
    likes: "15.2K",
    comments: "312"
  },
  {
    id: 4,
    videoUrl: "/reel_4.mp4",
    username: "@kringp_india",
    likes: "6.1K",
    comments: "89"
  },
  {
    id: 5,
    videoUrl: "/reel_5.mp4",
    username: "@kringp_india",
    likes: "22.8K",
    comments: "445"
  }
];

export default function Reels() {
  const [selectedReel, setSelectedReel] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <Navbar />
      
      <main className="pt-24 relative">
        {/* Top Left PNG Element */}
        <img 
          src="/element_1.png" 
          alt="Decorative element" 
          className="absolute top-32 left-2 w-[220px] h-[120px] lg:top-16 lg:left-48 lg:w-[560px] lg:h-[320px] pointer-events-none rotate-12 z-10"
        />
        {/* Top Right PNG Element */}
        <img 
          src="/element_2.png" 
          alt="Decorative element" 
          className="absolute top-36 right-2 w-[100px] h-[100px] lg:top-18 lg:right-48 lg:w-[250px] lg:h-[250px] pointer-events-none -rotate-12 z-10"
        />
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent border border-primary/40 mb-6">
                <Instagram className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Featured Reels</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Trending <span className="text-gradient-orange">Reels</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover amazing content from KringP creators. Watch, engage, and get inspired.
              </p>
            </div>

            {/* Reels Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {reelsData.map((reel) => (
                <div
                  key={reel.id}
                  className="relative group aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border cursor-pointer"
                  onClick={() => setSelectedReel(reel.id)}
                >
                  <video
                    src={reel.videoUrl}
                    muted
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-semibold text-white mb-2">{reel.username}</p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-white/80 text-sm">
                          <Heart size={14} /> {reel.likes}
                        </span>
                        <span className="flex items-center gap-1 text-white/80 text-sm">
                          <MessageCircle size={14} /> {reel.comments}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Always visible Instagram badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for playing reel */}
            {selectedReel && (
              <div 
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                onClick={() => setSelectedReel(null)}
              >
                <div 
                  className="relative w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden bg-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  <video
                    src={reelsData.find(r => r.id === selectedReel)?.videoUrl}
                    autoPlay
                    loop
                    muted
                    controls
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                    onClick={() => setSelectedReel(null)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}