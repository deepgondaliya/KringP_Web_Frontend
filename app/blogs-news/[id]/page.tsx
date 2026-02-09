import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    type: "blog",
    title: "How to Build Your Personal Brand as a Creator",
    excerpt: "Learn the essential steps to establish a strong personal brand that resonates with your audience and attracts business collaborations.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    tags: ["Creator Tips", "Branding"],
    content: `
      <p>Building a personal brand as a creator is one of the most important investments you can make in your career. In today's digital landscape, your brand is more than just a logo or color scheme—it's the unique value you bring to your audience.</p>
      
      <h2>Why Personal Branding Matters</h2>
      <p>Your personal brand is what sets you apart from millions of other creators. It's the combination of your unique voice, expertise, personality, and the consistent experience you provide to your audience.</p>
      
      <h2>Steps to Build Your Brand</h2>
      <p><strong>1. Define Your Niche:</strong> Focus on what you're passionate about and what you can consistently create content around. The more specific, the better.</p>
      
      <p><strong>2. Know Your Audience:</strong> Understanding who you're creating for helps you tailor your content and messaging to resonate with them.</p>
      
      <p><strong>3. Create Consistent Content:</strong> Consistency in quality, posting schedule, and visual style helps build recognition and trust.</p>
      
      <p><strong>4. Engage Authentically:</strong> Respond to comments, share behind-the-scenes content, and show the real you. Authenticity builds loyalty.</p>
      
      <p><strong>5. Collaborate Strategically:</strong> Partner with other creators and brands that align with your values to expand your reach.</p>
      
      <h2>How KringP Helps</h2>
      <p>At KringP, we connect creators with brands that match their personal brand and values. Our platform makes it easy to find collaboration opportunities that feel authentic and help grow your audience.</p>
    `,
  },
  {
    id: 2,
    type: "news",
    title: "KringP Launches New Mental Health Support Feature",
    excerpt: "We're excited to announce our new mental health support feature designed to help creators manage stress and burnout effectively.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop",
    date: "Jan 3, 2026",
    readTime: "3 min read",
    tags: ["Announcement", "Mental Health"],
    content: `
      <p>Today, we're thrilled to announce the launch of our comprehensive Mental Health Support feature, designed specifically for creators navigating the unique challenges of content creation.</p>
      
      <h2>Why We Built This</h2>
      <p>Creator burnout is real. The pressure to constantly create, engage, and grow can take a serious toll on mental health. We recognized this challenge and wanted to provide meaningful support.</p>
      
      <h2>Key Features</h2>
      <p><strong>Emotion Tracking:</strong> Our interactive brain visualization helps you identify and understand your current emotional state.</p>
      
      <p><strong>Personalized Solutions:</strong> Based on how you're feeling, we provide tailored recommendations and resources.</p>
      
      <p><strong>Talk & Share:</strong> Connect with our support community to share experiences and find solidarity with fellow creators.</p>
      
      <p><strong>Wellness Resources:</strong> Access curated content on stress management, work-life balance, and mental wellness.</p>
      
      <h2>Our Commitment</h2>
      <p>Mental health is not just a feature—it's a core value at KringP. We're committed to supporting the whole creator, not just their content output. Expect more resources, features, and support in the coming months.</p>
    `,
  },
  {
    id: 3,
    type: "blog",
    title: "Top 10 Monetization Strategies for Content Creators",
    excerpt: "Discover the most effective ways to monetize your content and turn your passion into a sustainable income stream.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=600&fit=crop",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    tags: ["Monetization", "Creator Tips"],
    content: `
      <p>Turning your creative passion into a sustainable income is the dream for many content creators. Here are the top 10 strategies that successful creators use to monetize their work.</p>
      
      <h2>1. Brand Partnerships</h2>
      <p>Collaborating with brands that align with your niche is one of the most lucrative monetization strategies. Platforms like KringP make it easy to find and connect with relevant brands.</p>
      
      <h2>2. Affiliate Marketing</h2>
      <p>Promote products you genuinely love and earn a commission on sales. Authenticity is key—only recommend products you've actually used.</p>
      
      <h2>3. Digital Products</h2>
      <p>Create and sell ebooks, templates, presets, or courses. Digital products have high profit margins and can generate passive income.</p>
      
      <h2>4. Membership/Subscription</h2>
      <p>Offer exclusive content through platforms like Patreon or membership sites. Your most dedicated fans will pay for premium access.</p>
      
      <h2>5. Sponsored Content</h2>
      <p>Create content specifically for brands. Be transparent with your audience about sponsored posts to maintain trust.</p>
      
      <h2>6. Merchandise</h2>
      <p>Design and sell branded merchandise. Print-on-demand services make this accessible without upfront inventory costs.</p>
      
      <h2>7. Consulting/Coaching</h2>
      <p>Share your expertise through one-on-one coaching or consulting services. Your experience is valuable to aspiring creators.</p>
      
      <h2>8. Speaking Engagements</h2>
      <p>As you build authority, opportunities for paid speaking at events and conferences will emerge.</p>
      
      <h2>9. Ad Revenue</h2>
      <p>Platform ad revenue (YouTube, blogs) can provide steady passive income as your audience grows.</p>
      
      <h2>10. Licensing Content</h2>
      <p>License your photos, videos, or music to brands and media outlets for additional income streams.</p>
    `,
  },
  {
    id: 4,
    type: "news",
    title: "KringP Reaches 100,000 Active Creators Milestone",
    excerpt: "We're thrilled to celebrate this incredible milestone with our amazing community of creators and businesses.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    date: "Dec 20, 2025",
    readTime: "2 min read",
    tags: ["Milestone", "Community"],
    content: `
      <p>We're absolutely thrilled to announce that KringP has officially reached 100,000 active creators on our platform. This milestone is a testament to the incredible community we've built together.</p>
      
      <h2>By the Numbers</h2>
      <p>• 100,000+ active creators across all niches</p>
      <p>• 15,000+ successful brand collaborations</p>
      <p>• $5M+ earnings facilitated for creators</p>
      <p>• 50+ countries represented</p>
      
      <h2>Thank You</h2>
      <p>This achievement wouldn't be possible without every creator who trusted us with their journey, every brand who believed in the power of authentic partnerships, and every team member who works tirelessly to improve our platform.</p>
      
      <h2>What's Next</h2>
      <p>We're just getting started. Expect new features, expanded brand partnerships, and more resources to help you succeed. The next 100,000 creators are waiting, and we can't wait to welcome them.</p>
    `,
  },
  {
    id: 5,
    type: "blog",
    title: "The Future of Creator-Business Collaborations",
    excerpt: "Explore how the landscape of influencer marketing is evolving and what it means for creators and brands alike.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    tags: ["Industry Trends", "Collaboration"],
    content: `
      <p>The creator economy is evolving rapidly, and with it, the way creators and businesses collaborate. Here's a look at the trends shaping the future of these partnerships.</p>
      
      <h2>Authenticity Over Reach</h2>
      <p>Brands are increasingly prioritizing authentic creators over those with massive followings. Engagement rates and audience trust matter more than follower counts.</p>
      
      <h2>Long-term Partnerships</h2>
      <p>One-off sponsored posts are giving way to long-term brand ambassador relationships. These deeper partnerships benefit both creators and brands through consistent messaging.</p>
      
      <h2>Data-Driven Matching</h2>
      <p>AI and data analytics are making it easier to match creators with the right brands. Platforms like KringP use sophisticated algorithms to ensure compatibility.</p>
      
      <h2>Creator-Led Products</h2>
      <p>More creators are co-developing products with brands rather than just promoting existing ones. This deeper involvement leads to more authentic endorsements.</p>
      
      <h2>Diverse Platforms</h2>
      <p>While Instagram and YouTube remain dominant, brands are exploring collaborations across TikTok, podcasts, newsletters, and emerging platforms.</p>
      
      <h2>What This Means for You</h2>
      <p>Focus on building genuine connections with your audience, be selective about partnerships, and position yourself as a valuable collaborator—not just a promotional channel.</p>
    `,
  },
  {
    id: 6,
    type: "news",
    title: "New Partnership with Major Brands Announced",
    excerpt: "KringP partners with leading brands to bring more opportunities to creators across all niches.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    tags: ["Partnership", "Announcement"],
    content: `
      <p>We're excited to announce strategic partnerships with several major brands across fashion, technology, lifestyle, and wellness sectors. These partnerships will bring unprecedented opportunities to creators on our platform.</p>
      
      <h2>What This Means for Creators</h2>
      <p>More opportunities across diverse niches, competitive compensation rates, exclusive campaign access, and direct brand relationships.</p>
      
      <h2>Featured Partners</h2>
      <p>While we can't reveal all partners yet, expect campaigns from leading names in sustainable fashion, consumer technology, health & wellness, and home lifestyle.</p>
      
      <h2>How to Get Involved</h2>
      <p>Make sure your KringP profile is complete and up-to-date. Highlight your niche expertise, showcase your best work, and keep your engagement metrics current. Our matching algorithm will connect you with relevant opportunities.</p>
      
      <h2>Coming Soon</h2>
      <p>Watch for campaign announcements in your dashboard. Early applicants often have an advantage, so stay active on the platform.</p>
    `,
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogsNewsDetail({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link href="/blogs-news" className="text-primary hover:underline">
            ← Back to Blogs & News
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/blogs-news"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blogs & News
          </Link>

          {/* Tags & Type */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              post.type === "news" 
                ? "bg-blue-500/90 text-white" 
                : "bg-primary/90 text-primary-foreground"
            }`}>
              {post.type === "news" ? "📢 News" : "📝 Blog"}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mb-8">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 size={16} />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Bookmark size={16} />
              Save
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div
            className="prose prose-lg prose-invert max-w-none
              prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-card border border-border rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Start Your Creator Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of creators growing with KringP
            </p>
            <Button size="lg">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}