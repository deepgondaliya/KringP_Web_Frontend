"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, HelpCircle, Search, MessageCircle, Mail, Phone, ChevronRight, BookOpen, Users, CreditCard, Settings, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const categories = [
  {
    title: "Getting Started",
    description: "New to KringP? Start here",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    articles: [
      "How to create your account",
      "Setting up your creator profile",
      "Finding your first collaboration",
      "Understanding the dashboard",
    ],
  },
  {
    title: "For Creators",
    description: "Grow your creator career",
    icon: Users,
    color: "from-blue-400 to-purple-500",
    articles: [
      "Optimizing your profile for discovery",
      "How to respond to collaboration requests",
      "Setting your rates and pricing",
      "Building your portfolio",
    ],
  },
  {
    title: "For Businesses",
    description: "Find the perfect creators",
    icon: BookOpen,
    color: "from-green-400 to-teal-500",
    articles: [
      "Creating your first campaign",
      "How to search for creators",
      "Managing multiple collaborations",
      "Measuring campaign success",
    ],
  },
  {
    title: "Payments & Billing",
    description: "Everything about money",
    icon: CreditCard,
    color: "from-pink-400 to-red-500",
    articles: [
      "How payments work",
      "Setting up payment methods",
      "Understanding fees and commissions",
      "Requesting refunds",
    ],
  },
  {
    title: "Account & Security",
    description: "Keep your account safe",
    icon: Shield,
    color: "from-purple-400 to-indigo-500",
    articles: [
      "Enabling two-factor authentication",
      "Changing your password",
      "Managing connected accounts",
      "Deleting your account",
    ],
  },
  {
    title: "Platform Settings",
    description: "Customize your experience",
    icon: Settings,
    color: "from-orange-400 to-red-500",
    articles: [
      "Notification preferences",
      "Privacy settings",
      "Language and region settings",
      "Connected apps and integrations",
    ],
  },
];

const popularQuestions = [
  {
    question: "How do I get paid for collaborations?",
    answer: "Payments are automatically processed through our secure payment system once both parties confirm the collaboration is complete. Funds are transferred to your connected payment method within 3-5 business days.",
  },
  {
    question: "Can I cancel a collaboration?",
    answer: "Yes, collaborations can be cancelled before work begins. Once work has started, cancellation requires mutual agreement. Refer to our cancellation policy for details on refunds and fees.",
  },
  {
    question: "How do I report a problem with another user?",
    answer: "You can report issues through the user's profile page or contact our support team directly. We take all reports seriously and investigate promptly.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. Review our Privacy Policy for complete details on how we handle your information.",
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-background pt-32 pb-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-yellow flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              How can we{" "}
              <span className="text-gradient-yellow">help?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Search our knowledge base or browse categories to find answers to your questions.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-xl border-border bg-card"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              
              <ul className="space-y-2">
                {category.articles.map((article, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight size={14} />
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Questions */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {popularQuestions.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronRight
                    size={20}
                    className={`text-muted-foreground transition-transform ${
                      expandedFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-muted-foreground animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Still Need Help?
          </h2>
          <p className="text-muted-foreground">
            Our support team is here for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">Chat with our team in real-time</p>
            <Button variant="outline" size="sm">Start Chat</Button>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-4">Get help within 24 hours</p>
            <Button variant="outline" size="sm">Send Email</Button>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">Phone Support</h3>
            <p className="text-sm text-muted-foreground mb-4">Mon-Fri, 9am-6pm EST</p>
            <Button variant="outline" size="sm">Call Now</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}