'use client'

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Sparkles, Building2, Users, Heart, BookOpen, Newspaper, HelpCircle, Shield, FileText, Play } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const featureItems = [
  {
    title: "For Creator",
    description: "Showcase your talent and grow your audience",
    icon: Sparkles,
    href: "/features/creator-flow",
  },
  {
    title: "For Business",
    description: "Find authentic creators for your brand",
    icon: Building2,
    href: "/features/business-flow",
  },
  {
    title: "Mental Health Support",
    description: "Wellness resources for creators",
    icon: Heart,
    href: "/features/mental-health",
  },
  {
    title: "Testimonials",
    description: "Success stories from our community",
    icon: Users,
    href: "/features/testimonials",
  },
]

const supportItems = [
  {
    title: "Journey",
    description: "Learn about our story and mission",
    icon: BookOpen,
    href: "/support/journey",
  },
  {
    title: "Terms Of Services",
    description: "Our terms and conditions",
    icon: FileText,
    href: "/support/terms-of-service",
  },
  {
    title: "Privacy Policy",
    description: "How we protect your data",
    icon: Shield,
    href: "/support/privacy-policy",
  },
  {
    title: "Help Center",
    description: "Get support and find answers",
    icon: HelpCircle,
    href: "/support/help-center",
  },
]

const exploreItems = [
  {
    title: "Blogs",
    description: "Latest insights and tips for creators & businesses",
    icon: BookOpen,
    href: "#",
  },
  {
    title: "News",
    description: "Stay updated with KringP announcements",
    icon: Newspaper,
    href: "#",
  },
  {
    title: "Reels",
    description: "Discover trending creator content",
    icon: Play,
    href: "#",
  },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-orange-purple flex items-center justify-center glow-orange-sm group-hover:glow-purple transition-all duration-300">
              <span className="text-primary-foreground font-display font-bold text-xl">K</span>
            </div>
            <span className="font-display font-bold text-2xl text-foreground">
              Kring<span className="text-gradient-orange">P</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("features")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Features
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeDropdown === "features" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "features" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in-up">
                  <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 min-w-[500px]">
                    <div className="grid grid-cols-1 gap-4">
                      {featureItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <item.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("support")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Support
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeDropdown === "support" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "support" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in-up">
                  <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 min-w-[450px]">
                    <div className="grid grid-cols-1 gap-4">
                      {supportItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Blogs & News Link */}
            <Link
              href="/blogs-news"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <BookOpen size={16} className="text-primary" />
              Blogs & News
            </Link>

            {/* Reels Link */}
            <Link
              href="/reels"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Play size={16} className="text-primary" />
              Reels
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {/* Mobile Features */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Features</p>
                {featureItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 pl-4 py-2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} />
                    {item.title}
                  </a>
                ))}
              </div>

              {/* Mobile Support */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Support</p>
                {supportItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 pl-4 py-2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} />
                    {item.title}
                  </a>
                ))}
              </div>

              {/* Mobile Blogs & News */}
              <Link
                href="/blogs-news"
                className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen size={18} className="text-primary" />
                Blogs & News
              </Link>

              {/* Mobile Reels */}
              <Link
                href="/reels"
                className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Play size={18} className="text-primary" />
                Reels
              </Link>

              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full">
                  Log In
                </Button>
                <Button variant="default" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar