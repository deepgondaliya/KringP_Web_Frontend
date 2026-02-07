"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    type: "blog",
    title: "How to Build Your Personal Brand as a Creator",
    excerpt: "Learn the essential steps to establish a strong personal brand that resonates with your audience and attracts business collaborations.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    tags: ["Creator Tips", "Branding"],
  },
  {
    id: 2,
    type: "news",
    title: "KringP Launches New Mental Health Support Feature",
    excerpt: "We're excited to announce our new mental health support feature designed to help creators manage stress and burnout effectively.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    date: "Jan 3, 2026",
    readTime: "3 min read",
    tags: ["Announcement", "Mental Health"],
  },
  {
    id: 3,
    type: "blog",
    title: "Top 10 Monetization Strategies for Content Creators",
    excerpt: "Discover the most effective ways to monetize your content and turn your passion into a sustainable income stream.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    tags: ["Monetization", "Creator Tips"],
  },
  {
    id: 4,
    type: "news",
    title: "KringP Reaches 100,000 Active Creators Milestone",
    excerpt: "We're thrilled to celebrate this incredible milestone with our amazing community of creators and businesses.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    date: "Dec 20, 2025",
    readTime: "2 min read",
    tags: ["Milestone", "Community"],
  },
  {
    id: 5,
    type: "blog",
    title: "The Future of Creator-Business Collaborations",
    excerpt: "Explore how the landscape of influencer marketing is evolving and what it means for creators and brands alike.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    tags: ["Industry Trends", "Collaboration"],
  },
  {
    id: 6,
    type: "news",
    title: "New Partnership with Major Brands Announced",
    excerpt: "KringP partners with leading brands to bring more opportunities to creators across all niches.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    tags: ["Partnership", "Announcement"],
  },
];

export default function BlogsNews() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-2 pb-12 md:pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-2 md:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent border border-primary/40 mb-6">
                <span className="text-sm font-medium text-white">Blogs & News</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Insights, Tips & <span className="text-gradient-orange">Updates</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Stay updated with the latest creator tips, industry insights, and KringP announcements
              </p>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/news_1.png" 
                alt="News illustration" 
                className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs-news/${post.id}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.type === "news" 
                        ? "bg-blue-500/90 text-white" 
                        : "bg-primary/90 text-primary-foreground"
                    }`}>
                      {post.type === "news" ? "📢 News" : "📝 Blog"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}