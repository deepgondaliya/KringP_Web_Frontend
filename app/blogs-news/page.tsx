"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    type: "blog",
    title: "How to Scale Your Local Business Using Micro-Influencers (Without a 5-Figure Budget)",
    excerpt: "In the bustling markets of India—from the cafes of Indiranagar to the boutiques of South Delhi—small business owners all face the same giant: The Algorithm.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    tags: ["Business Growth", "Micro-Influencers"],
  },
  {
    id: 2,
    type: "blog",
    title: "From 500 to 50,000: A Guide to Building a Professional Media Kit on KringP",
    excerpt: "You've got the aesthetic, you've got the content, and you've got a community that actually listens to what you say. But when you reach out to brands, all you hear is silence. Why?",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    date: "Feb 8, 2026",
    readTime: "5 min read",
    tags: ["Creator Tips", "Media Kit"],
  },
  {
    id: 3,
    type: "blog",
    title: "Hyper-Local & AI-Driven: The New Rules of Influencer Marketing in 2026",
    excerpt: "If 2024 was about 'going viral' and 2025 was about AI automation, 2026 is the year of Relevance. The digital landscape in India has reached a tipping point.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    date: "Feb 6, 2026",
    readTime: "7 min read",
    tags: ["Marketing Trends", "AI", "Hyper-Local"],
  },
  {
    id: 4,
    type: "blog",
    title: "The 'Black Box' of Influencer Marketing: Why Real-Time, Meta-Approved Analytics are Non-Negotiable in 2026",
    excerpt: "In the early days of the creator economy, 'Trust' was the primary currency. You liked a creator's vibe, you saw their follower count, and you sent the cheque. But as we move through 2026, that era is officially over.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "Feb 4, 2026",
    readTime: "8 min read",
    tags: ["Analytics", "Data Security", "Transparency"],
  },
  {
    id: 5,
    type: "blog",
    title: "Beyond the Likes: Why KringP is the First Marketplace to Prioritize Creator Well-being",
    excerpt: "The 'Creator Economy' is often painted as a dream job: travel, free products, and the fame of a digital celebrity. But behind the perfectly filtered photos is a mounting crisis that the industry rarely discusses: Burnout.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
    date: "Feb 2, 2026",
    readTime: "6 min read",
    tags: ["Mental Health", "Creator Well-being", "Conquer"],
  },
  {
    id: 6,
    type: "blog",
    title: "Power in Numbers: How KringP's Group Campaigns are Changing the Game for Small Creators",
    excerpt: "In the traditional influencer marketing model, the 'Winner Takes All.' Big brands usually hunt for one or two celebrity influencers with millions of followers, leaving thousands of talented micro-creators to fight for the leftovers.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    date: "Jan 31, 2026",
    readTime: "7 min read",
    tags: ["Group Campaigns", "Collaboration", "Micro-Creators"],
  },
  {
    id: 7,
    type: "blog",
    title: "The 2026 Salary Guide for Creators: Moving Beyond 'Gifted' Collabs to High-Ticket Partnerships",
    excerpt: "In the early days of social media, getting a free box of products in exchange for a post felt like a win. But as we move through 2026, 'Barter' is no longer a business model—it's a plateau.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    date: "Jan 29, 2026",
    readTime: "8 min read",
    tags: ["Creator Earnings", "Pricing Strategy", "Professional Growth"],
  },
  {
    id: 8,
    type: "blog",
    title: "Why Content Creators are the 'New Sales Team' for Indian Small Businesses",
    excerpt: "If you own a small business in 2026, you're likely feeling the 'Marketing Squeeze.' Raw material costs are up, rent is climbing, and the price of traditional digital ads has entered a 'bidding war' that only the giant corporations can win.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    date: "Jan 27, 2026",
    readTime: "7 min read",
    tags: ["Small Business", "Sales Strategy", "ROI"],
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