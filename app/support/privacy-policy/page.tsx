"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, Share2, Trash2, Bell, Globe } from "lucide-react";

const privacySections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: `We collect information you provide directly, including:

**Account Information**: Name, email address, phone number, profile photo, and bio when you create an account.

**Profile Data**: For creators, this includes social media handles, audience demographics, content categories, and portfolio samples. For businesses, this includes company details, industry, and campaign requirements.

**Communication Data**: Messages exchanged through our platform, feedback, and support requests.

**Payment Information**: Billing details and transaction history processed through our secure payment partners.

**Usage Data**: How you interact with our platform, including pages visited, features used, and time spent.`,
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use collected information to:

• **Provide Services**: Enable creator-business matching, facilitate collaborations, and process payments
• **Improve Platform**: Analyze usage patterns to enhance features and user experience
• **Personalize Experience**: Recommend relevant creators, businesses, and opportunities
• **Communicate**: Send important updates, notifications, and marketing communications (with your consent)
• **Ensure Safety**: Detect and prevent fraud, abuse, and security threats
• **Legal Compliance**: Meet regulatory requirements and respond to legal requests`,
  },
  {
    icon: Share2,
    title: "Information Sharing",
    content: `We share your information in limited circumstances:

**With Other Users**: Profile information is visible to potential collaboration partners as needed for the platform to function.

**Service Providers**: We work with trusted partners for payment processing, analytics, and infrastructure who are bound by confidentiality agreements.

**Legal Requirements**: We may disclose information when required by law or to protect our rights and safety.

**Business Transfers**: In the event of a merger or acquisition, your information may be transferred to the new entity.

**With Your Consent**: We'll share information for any other purpose with your explicit permission.`,
  },
  {
    icon: Lock,
    title: "Data Security",
    content: `We implement robust security measures to protect your information:

• **Encryption**: All data is encrypted in transit (TLS/SSL) and at rest
• **Access Controls**: Strict role-based access limits who can view your data
• **Regular Audits**: We conduct security assessments and penetration testing
• **Secure Infrastructure**: Our systems are hosted on industry-leading cloud platforms
• **Incident Response**: We have procedures to detect and respond to security incidents

While we strive to protect your data, no system is completely secure. We encourage you to use strong passwords and enable two-factor authentication.`,
  },
  {
    icon: Globe,
    title: "Cookies & Tracking",
    content: `We use cookies and similar technologies to:

**Essential Cookies**: Enable core functionality like authentication and security.

**Analytics Cookies**: Understand how users interact with our platform to improve the experience.

**Preference Cookies**: Remember your settings and preferences.

**Marketing Cookies**: Deliver relevant advertisements (only with your consent).

You can manage cookie preferences through your browser settings or our cookie consent tool. Note that disabling certain cookies may affect platform functionality.`,
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: `Depending on your location, you may have the following rights:

• **Access**: Request a copy of your personal data
• **Correction**: Update or correct inaccurate information
• **Deletion**: Request deletion of your personal data
• **Portability**: Receive your data in a portable format
• **Objection**: Object to certain processing of your data
• **Restriction**: Request limited processing of your data
• **Withdraw Consent**: Revoke previously given consent

To exercise these rights, contact us at privacy@kringp.com. We'll respond within 30 days.`,
  },
  {
    icon: Trash2,
    title: "Data Retention",
    content: `We retain your information for as long as necessary to:

• Provide our services and maintain your account
• Comply with legal and regulatory requirements
• Resolve disputes and enforce agreements
• Improve our services through aggregated analytics

When you delete your account, we'll remove your personal data within 30 days, except for information we're required to retain for legal purposes or aggregated data that doesn't identify you.`,
  },
  {
    icon: Bell,
    title: "Updates to This Policy",
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.

• We'll notify you of significant changes via email or platform notification
• The "Last Updated" date at the top indicates when changes were made
• Continued use of the platform after changes constitutes acceptance

We encourage you to review this policy regularly to stay informed about how we protect your data.`,
  },
];

export default function PrivacyPolicy() {
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
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-yellow flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-primary font-semibold">Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Privacy{" "}
              <span className="text-gradient-yellow">Policy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Your privacy matters to us. This policy explains how we collect, use, 
              and protect your personal information.
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-display font-bold text-foreground">Your Data, Your Control</h3>
              <p className="text-muted-foreground">
                We're committed to transparency and giving you control over your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl space-y-8">
          {privacySections.map((section, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  {section.title}
                </h2>
              </div>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line pl-0 md:pl-16">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our Data Protection team is here to help. Contact us for any privacy-related inquiries.
          </p>
          <a
            href="mailto:privacy@kringp.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            privacy@kringp.com
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}