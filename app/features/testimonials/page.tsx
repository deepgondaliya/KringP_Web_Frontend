"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote, Building2, Sparkles, TrendingUp, Users, Heart, Apple, Smartphone } from "lucide-react";

const testimonials = [
  {
    type: "creator",
    name: "Priya Sharma",
    role: "Food & Lifestyle Creator",
    location: "Mumbai",
    followers: "45K",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "KringP changed everything for me. As a micro-influencer, I always felt invisible. Now, local restaurants and cafes find ME. I've done 12 collaborations in just 3 months!",
    stats: { campaigns: 12, earnings: "₹85,000", growth: "+120%" }
  },
  {
    type: "business",
    name: "Raj Patel",
    role: "Owner, The Spice Kitchen",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "We tried Instagram ads, Facebook marketing—nothing worked like KringP. One food blogger from our own city brought more customers in a week than months of paid ads.",
    stats: { creators: 8, reach: "250K+", roi: "340%" }
  },
  {
    type: "creator",
    name: "Ananya Reddy",
    role: "Fashion & Beauty Influencer",
    location: "Hyderabad",
    followers: "120K",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    quote: "The transparency is what I love most. I know exactly what I'm getting paid, when I'm getting paid, and there's no shady middleman taking a cut. Pure professionalism.",
    stats: { campaigns: 28, earnings: "₹3,20,000", growth: "+85%" }
  },
  {
    type: "business",
    name: "Meera Krishnan",
    role: "Founder, EcoWear India",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    quote: "As a sustainable fashion startup, we needed creators who genuinely cared about our mission. KringP's filters helped us find eco-conscious influencers who became brand ambassadors.",
    stats: { creators: 15, reach: "500K+", roi: "280%" }
  },
  {
    type: "creator",
    name: "Arjun Nair",
    role: "Tech & Gaming Creator",
    location: "Kerala",
    followers: "78K",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "The analytics dashboard is incredible. I can see my engagement rate, growth trends, and what content performs best. It's like having a personal manager without the 20% cut!",
    stats: { campaigns: 18, earnings: "₹1,80,000", growth: "+200%" }
  },
  {
    type: "business",
    name: "Vikram Singh",
    role: "CEO, FitLife Supplements",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    quote: "We've worked with 25+ fitness creators through KringP. The direct chat feature means faster negotiations and genuine relationships. Our sales increased 150% in 6 months.",
    stats: { creators: 25, reach: "1.2M+", roi: "420%" }
  }
];

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [showAppButtons, setShowAppButtons] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Full Page Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-18 pb-0 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/3 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-primary/8 to-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right side - Content (shown first on mobile) */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              {/* Stars decoration */}
              <div className="flex justify-center lg:justify-start gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-8 h-8 text-primary fill-primary animate-pulse" 
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                Real Stories from
                <br />
                <span className="text-gradient-orange">Real People</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Discover how creators and businesses are transforming their journey with KringP. 
                These aren't just testimonials—they're success stories.
              </p>
            </div>

            {/* Left side - Image (shown second on mobile) */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img 
                src="/testimonial_1.png" 
                alt="Testimonial" 
                className="w-full max-w-xs md:max-w-md lg:max-w-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                ref={el => { cardRefs.current[index] = el; }}
                className={`
                   p-6 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-700 bg-white/95 backdrop-blur-sm relative z-10
                  ${visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                  }
                  ${testimonial.type === 'creator' 
                    ? 'bg-gradient-to-br from-card to-accent/8 border-accent/20' 
                    : 'bg-gradient-to-br from-card to-primary/8 border-primary/20'
                  }
                  hover:shadow-xl hover:shadow-primary/5
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Quote icon */}
                <Quote className={`
                  absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 opacity-10
                  ${testimonial.type === 'creator' ? 'text-accent' : 'text-primary'}
                `} />

                {/* Type badge */}
                <div className={`
                  inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 md:mb-6
                  ${testimonial.type === 'creator' 
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-primary/10 text-primary'
                  }
                `}>
                  {testimonial.type === 'creator' ? (
                    <>
                      <Sparkles className="w-3 h-3" />
                      Creator Story
                    </>
                  ) : (
                    <>
                      <Building2 className="w-3 h-3" />
                      Business Story
                    </>
                  )}
                </div>

                {/* Profile */}
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl object-cover border-2 border-accent/20"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        📍 {testimonial.location}
                        {testimonial.followers && ` • ${testimonial.followers} followers`}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-0.5 md:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    </div>
                </div>

                {/* Quote */}
                <p className="text-sm md:text-base text-foreground mb-4 md:mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-border">
                  {Object.entries(testimonial.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-base md:text-lg font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-white/95 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 md:mb-4">
              Ready to Write Your <span className="text-gradient-orange">Success Story</span>?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Join thousands of creators and businesses who are already thriving on KringP. 
              Your story could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              {!showAppButtons ? (
                <button 
                  onClick={() => setShowAppButtons(true)}
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-purple-orange text-primary-foreground font-semibold text-sm md:text-base rounded-xl hover:opacity-90 transition-opacity"
                >
                  Start Your Journey
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
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
              <a href="/support/help-center">
                <button className="px-6 py-3 md:px-8 md:py-4 bg-card border border-primary text-primary font-semibold text-sm md:text-base rounded-xl hover:bg-primary/10 transition-colors">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}