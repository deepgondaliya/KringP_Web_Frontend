"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using KringP's platform, website, and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all users of the platform, including creators, businesses, and visitors. We reserve the right to update these terms at any time, and your continued use of the platform constitutes acceptance of any changes.`,
  },
  {
    title: "2. User Accounts",
    content: `To access certain features of KringP, you must create an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain the security of your password and account
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use of your account

You must be at least 18 years old to create an account. Accounts are non-transferable.`,
  },
  {
    title: "3. Creator Obligations",
    content: `As a creator on KringP, you agree to:

• Create original, authentic content that complies with our community guidelines
• Fulfill collaboration commitments with businesses in good faith
• Accurately represent your audience demographics and engagement metrics
• Maintain professional communication with all parties
• Disclose sponsored content according to applicable advertising regulations

Creators retain ownership of their content but grant KringP a license to display and promote it on the platform.`,
  },
  {
    title: "4. Business Obligations",
    content: `Businesses using KringP agree to:

• Provide accurate information about your brand and campaign requirements
• Make timely payments for completed collaborations
• Respect creator content rights and agreed-upon usage terms
• Maintain professional and respectful communication
• Comply with all applicable advertising and marketing regulations

Businesses are responsible for ensuring their campaigns comply with local laws and regulations.`,
  },
  {
    title: "5. Payment Terms",
    content: `KringP facilitates payments between creators and businesses. By using our payment services:

• All fees and commissions are clearly displayed before transaction completion
• Payments are processed securely through our trusted payment partners
• Refunds and disputes are handled according to our Dispute Resolution Policy
• You agree to provide accurate tax information as required by law
• Payment processing times may vary based on payment method and location`,
  },
  {
    title: "6. Prohibited Activities",
    content: `Users are prohibited from:

• Posting illegal, harmful, or offensive content
• Engaging in fraud, deception, or misrepresentation
• Harassing, threatening, or bullying other users
• Attempting to circumvent platform fees or payment systems
• Using automated systems to access the platform without permission
• Infringing on intellectual property rights of others
• Sharing account credentials or allowing unauthorized access`,
  },
  {
    title: "7. Content Guidelines",
    content: `All content on KringP must comply with our community standards:

• No hate speech, discrimination, or harassment
• No explicit adult content or violence
• No promotion of illegal activities or substances
• No spam, misleading information, or clickbait
• Respect copyright and intellectual property rights

We reserve the right to remove content that violates these guidelines and suspend or terminate accounts of repeat offenders.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `KringP provides the platform "as is" and makes no warranties regarding:

• Continuous, uninterrupted access to services
• Results or outcomes from using the platform
• Accuracy of user-provided information
• Third-party content or services

To the maximum extent permitted by law, KringP shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.`,
  },
  {
    title: "9. Termination",
    content: `We reserve the right to suspend or terminate your account at any time for violation of these terms or for any reason at our sole discretion. Upon termination:

• Your right to access the platform immediately ceases
• Any pending transactions may be cancelled
• You remain responsible for any outstanding obligations
• Certain provisions of these terms survive termination`,
  },
  {
    title: "10. Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us:

Email: legal@kringp.com
Address: KringP Headquarters, Innovation District
Support: Available through our Help Center

We aim to respond to all inquiries within 48 business hours.`,
  },
];

export default function TermsOfService() {
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
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-primary font-semibold">Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Terms of{" "}
              <span className="text-gradient-yellow">Service</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Please read these terms carefully before using KringP. By using our platform, 
              you agree to be bound by these terms.
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <CheckCircle2 size={16} className="text-primary" />
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              id={`section-${index}`}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors scroll-mt-24"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}