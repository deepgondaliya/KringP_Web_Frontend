"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, CreditCard } from "lucide-react";
import { useState } from "react";

const sections = [
  {
    title: "Definitions",
    content: `**"Company" or "we" or "us" or "our" or "KringP"** refers to Mackring9 Private Limited, a company registered in India with its registered office at 7, MASHIHA SOCIETY, PETLAD, CON.DT.270701, Rangaipura, Petlad, Anand- 388450, Gujarat.

**"Influencer"** refers to a User who offers their services to create and distribute content on social media or other platforms to promote businesses or brands.

**"Business User" or "Business Owner"** refers to a User who seeks to engage Influencers for marketing or promotional purposes.

**"Content"** refers to any text, images, videos, audio, or other materials created, uploaded, shared, or transmitted through the Website or Mobile or Services.

**"Platform"** refers to the Website or mobile application and the Services offered through it collectively.

**"Services"** refers to the services provided by the Company through the Website or mobile application, including connecting Business Users with Influencers and facilitating their collaborations.

**"User Content"** refers to any Content uploaded, posted, emailed, transmitted, or otherwise made available by Users through the Website or Services.`,
  },
  {
    title: "Service Fees",
    content: `We may charge fees for certain Services offered on our platform. The specific fees applicable to each Service will be displayed on our Website at the point of purchase or engagement. By proceeding with a Service, you agree to pay the associated fees.`,
  },
  {
    title: "Business User Payments to Influencers",
    content: `Business Users are solely responsible for paying the agreed-upon fees to Influencers for the services they render. These payment terms and amounts will be as outlined in the individual agreements or contracts established directly between the Business User and the Influencer.

Our Company is not a party to these direct agreements and does not guarantee the payment obligations of Business Users to Influencers. However, we may facilitate payment processing between both Business Users and Influencers.`,
  },
  {
    title: "Payment Facilitation and Transaction Fees",
    content: `We may facilitate payment processing between Business Users and Influencers to streamline transactions on our platform. For this facilitation, we reserve the right to charge a commission or a transaction fee. The exact details, including the amount or percentage of any such fees, will be transparently communicated and displayed on the Website prior to any transaction. By utilizing our payment facilitation services, you agree to these charges.`,
  },
  {
    title: "Payment Methods",
    content: `All payments for Services, commissions, or transaction fees must be processed through the authorized payment methods specified and accepted on our Website. You agree to adhere to the terms and conditions of the respective payment gateways used.`,
  },
  {
    title: "Taxes",
    content: `You are solely responsible for identifying, calculating, and paying any and all applicable taxes, including but not limited to sales tax, value-added tax (VAT), goods and services tax (GST), or any other duties or levies, arising from your transactions and use of our Services. Our displayed fees may not include these taxes unless explicitly stated otherwise.`,
  },
  {
    title: "Fee Modifications",
    content: `We reserve the right to modify our fees for any Service, commission, or transaction at any time. Any changes to our fee structure will be communicated to Users with reasonable prior notice, typically through an update on our Website or direct notification. Your continued use of our Services after such notice constitutes your acceptance of the new fees.`,
  },
  {
    title: "Refund Policy",
    content: `**i. No Refunds After Release or Posting:** Please be advised that once a payment has been released to an Influencer for services rendered, or once content/postings have been completed and published (as per the terms of engagement), no refunds will be issued. This policy is in place due to the immediate and intangible nature of the services and content provided.

**ii. Company's Discretion for Refunds:** Any requests for refunds outside of the above scenario will be considered on a case-by-case basis and are subject to the sole discretion of the Company. Our decision regarding any refund request shall be final and binding. We encourage Users to thoroughly review all terms and agreements before making payments or initiating services.

**iii. Refunds for Non-Performance:** In instances of verified non-performance by an Influencer or failure to deliver services within mutually agreed timelines, the Company may, at its sole discretion, refund the amount to the Business User. Any such refund will be subject to the deduction of applicable platform fees or any other fees as the Company deems fit.`,
  },
  {
    title: "Influencer Payout Threshold",
    content: `Influencers can redeem accumulated earnings only after their account balance reaches a minimum of Rs.1,000/-. The Company will process payments to Influencers once this minimum threshold has been met and verified.`,
  },
  {
    title: "Escrow-like Payment Handling",
    content: `KringP facilitates secure payments between Businesses and Influencers through its integrated payment partner, Razorpay, using Razorpay Route. All funds paid by Businesses are held temporarily until completion of services, after which the relevant amounts are disbursed to Influencers, and KringP retains its service fee.`,
  },
  {
    title: "Service Fee",
    content: `KringP charges a 20% service fee on the total payment made by the Business User, which is automatically deducted before transferring the balance to the Influencer. This fee is non-refundable under any circumstances once the payment has been released.`,
  },
  {
    title: "No Fiduciary Responsibility",
    content: `KringP is not a licensed escrow agent or financial institution. While we use Razorpay Route to manage payments in an escrow-like fashion, all parties acknowledge that KringP assumes no fiduciary duty, liability, or financial guarantee beyond managing the flow of funds through our technology integration.`,
  },
  {
    title: "Dispute Handling",
    content: `In the event of a dispute between a Business and an Influencer regarding delivery, performance, or quality of service, KringP will review the submitted evidence but is not obligated to mediate or guarantee refunds. Final decision on fund release rests with KringP based on internal review.`,
  },
  {
    title: "Payout Conditions",
    content: `Influencer payouts are processed only after:
• The Business confirms satisfactory service delivery; or
• A specified milestone is reached; or
• A defined period lapses without dispute.`,
  },
  {
    title: "Liability Limitation",
    content: `KringP shall not be liable for:
• Delays in payment due to incorrect bank details;
• Razorpay's internal processing issues;
• Disputes arising post-payment release.`,
  },
  {
    title: "Acceptance",
    content: `By registering and using the KringP platform, both Influencers and Businesses agree to these payment terms and disclaimers in full.`,
  },
];

export default function PaymentRefundPolicy() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,102,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-background pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="text-gradient-orange font-semibold">Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Payment & Refund{" "}
              <span className="text-gradient-orange">Policy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Understand our payment terms and refund policies for transparent transactions.
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Version 1.0 | Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="w-full">
          <div className="border border-border rounded-2xl p-8 mb-8 bg-white shadow-sm">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>PLEASE READ THIS TERMS OF PAYMENTS AND REFUND POLICY CAREFULLY. BY USING THIS WEBSITE OR THE KRINGP MOBILE APPLICATION YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS PAYMENTS AND REFUND POLICY. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE WEBSITE OR SERVICES.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The following Payment & Refund Policy ("Policy") applies to all users and describes how your payments are made to/from Mackring9 Private Limited. ("Company" or "we" or "us" or "our" or "KringP") in connection with our website or mobile application and other services provided on the website (all of the foregoing, collectively, "Services"). Each time you use the Services and/or pay for a Service on the website or mobile application, you agree and expressly consent to the following:
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-20 relative z-10">
        <div className="w-full space-y-8">
          {sections.map((section, index) => {
            const isExpanded = expandedSections.includes(index);
            return (
              <div
                key={index}
                className="border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-8 pb-8 bg-white">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line pl-0 md:pl-16">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
