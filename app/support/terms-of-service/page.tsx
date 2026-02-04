"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const sections = [
  {
    title: "Definitions",
    content: `**Company, we, us, our, or KringP**: Refers to Mackring9 Private Limited, a company registered in India with its registered office at 7, MASHIHA SOCIETY, PETLAD, CON.DT.270701, Rangaipura, Petlad, Anand- 388450, Gujarat.

**Influencer**: Refers to a User who offers their services to create and distribute content on social media or other platforms to promote businesses or brands.

**Business User or Business Owner**: Refers to a User who seeks to engage Influencers for marketing or promotional purposes.

**Content**: Refers to any text, images, videos, audio, or other materials created, uploaded, shared, or transmitted through the Website, Mobile Application, or Services.

**Platform**: Refers to the Website or mobile application and the Services offered through it collectively.

**Services**: Refers to the services provided by the Company through the Website or mobile application, including connecting Business Users with Influencers and facilitating their collaborations.

**User Content**: Refers to any Content uploaded, posted, emailed, transmitted, or otherwise made available by Users through the Website or Services.`,
  },
  {
    title: "General Terms",
    content: `KringP is a marketplace platform developed and operated by Mackring9 Private Limited, designed to connect influencers (content creators) with businesses (brands/agencies) for collaboration and paid promotional opportunities. The platform operates under a commission-based model and integrates real-time social media analytics to facilitate informed collaborations.

Your use of Our services offered on or through the KringP website and mobile application (the "Platform") is conditioned upon Your acceptance without modification of these General Terms and Conditions.

These General Terms & Conditions apply to the entire content of the Platform without limitation and should be read carefully along with the specific Terms and Conditions for Influencers and Business Users.

The use of this Platform and its related services and tools are governed collectively by the "Terms & Conditions" and "Privacy Policy" as may be applicable.

If You do not agree to these General Terms & Conditions read with other Specific Terms & Conditions and/or other documents / information / rules / regulations, You should not use the services provided by the Platform.`,
  },
  {
    title: "Eligibility",
    content: `Use of the Platform is available only to persons who can enter into legally binding contracts under the Indian Contract Act, 1872. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including minors (below the age of 18 years), un-discharged insolvents, and persons of unsound mind are not eligible to use the Platform.

If a minor wishes to use the Platform, such use or transaction may be made by the minor under supervision of legal guardian or parents. KringP reserves the right to terminate any person's membership and/or refuse to provide such person with access to the Platform if it is brought to KringP's notice or if it is discovered that such person is not eligible to use the Platform.`,
  },
  {
    title: "Registration",
    content: `KringP is pleased to offer the users access to the Platform through any compatible device with ability to collaborate with Business Users by participating in the promotional activities offered by the Business Users through the KringP platform in consideration of Fees / Compensation.

In order to use the Platform, as part of the registration process, You will be required to provide certain information and details, including an e-mail id and any other information deemed necessary by KringP. You hereby acknowledge that You will be fully responsible for all activities that occur under Your Account.

**While registering with Us to use the Platform, You shall not:**
• Create an Account for anyone apart from yourself, unless such person's prior permission has been obtained;
• Use an Account that is in the name of another person with the intent to impersonate that person;
• Use a name for the Account which is offensive, vulgar or obscene or otherwise unlawful;
• Create more than one Account on the Platform.

You shall be responsible for maintaining the confidentiality and security of the password for all activities that occur in and through Your Account.`,
  },
  {
    title: "Intellectual Property Rights",
    content: `**Company Content**: The Website and its original content, features, and functionality (including but not limited to text, graphics, logos, icons, images, audio clips, video clips, software, and data compilations) are owned by the Company and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

**User Content**: You retain ownership of your User Content. However, by uploading, posting, or otherwise making available User Content through the Website or Services, you grant the Company a non-exclusive, worldwide, royalty-free, sub-licensable, transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your User Content in connection with the Website and Services.

You represent and warrant that you have all necessary rights to grant the licenses in this section and that your User Content does not infringe upon the intellectual property rights or other rights of any third party.`,
  },
  {
    title: "Payments and Fees",
    content: `The Company may charge fees for certain Services. The applicable fees will be displayed on the Website.

Business Users agree to pay the agreed-upon fees to Influencers for their services as outlined in their agreements.

The Company may facilitate payments between Business Users and Influencers and may charge a commission or transaction fee for such facilitation. The details of any such fees will be clearly communicated on the Website.

All payments shall be processed through the payment methods specified on the Website.

You are responsible for any taxes applicable to your transactions.

The Company reserves the right to modify its fees at any time, with notice to Users.

No refund shall be made after payment is released or posting is done.

Any refund shall be done at sole discretion of the Company and Company's decision shall be considered final.`,
  },
  {
    title: "Payment & Escrow Disclaimer",
    content: `**Escrow-like Payment Handling**: KringP facilitates secure payments between Businesses and Influencers through its integrated payment partner, Razorpay, using Razorpay Route. All funds paid by Businesses are held temporarily until completion of services, after which the relevant amounts are disbursed to Influencers, and KringP retains its service fee.

**Service Fee**: KringP charges a 20% service fee on the total campaign payment made by the Business User, which is automatically deducted before transferring the balance to the Influencer. This fee is non-refundable under any circumstances once the payment has been released.

**No Fiduciary Responsibility**: KringP is not a licensed escrow agent or financial institution. While we use Razorpay Route to manage payments in an escrow-like fashion, all parties acknowledge that KringP assumes no fiduciary duty, liability, or financial guarantee beyond managing the flow of funds through our technology integration.

**Dispute Handling**: In the event of a dispute between a Business and an Influencer regarding delivery, performance, or quality of service, KringP will review the submitted evidence but is not obligated to mediate or guarantee refunds.

**Payout Conditions**: Influencer payouts are processed only after:
• The Business confirms satisfactory service delivery; or
• A specified milestone is reached; or
• A defined period lapses without dispute.

**Liability Limitation**: KringP shall not be liable for:
• Delays in payment due to incorrect bank details;
• Razorpay's internal processing issues;
• Disputes arising post-payment release.`,
  },
  {
    title: "Protection of Minors and Child Safety",
    content: `At KringP, we are committed to upholding the highest standards of safety and well-being for all users, especially minors. In compliance with global laws and platform policies—including Google's Child Endangerment and Abuse Policy—we strictly prohibit any content or conduct on our platform that exploits, endangers, or harms children in any manner.

This includes, but is not limited to:
• Content that depicts or promotes the sexualization, abuse, neglect, or exploitation of minors.
• Involvement of minors in dangerous challenges, stunts, or activities that may lead to physical or psychological harm.
• Any form of grooming, harassment, or solicitation of minors through our platform.
• Uploading, sharing, or promoting media that includes inappropriate interactions involving minors.
• Content that misrepresents the age or identity of a minor for any deceptive, exploitative, or malicious purposes.

KringP maintains a zero-tolerance policy toward such violations. Any user, influencer, or third-party account found in breach of this clause may face:
• Immediate suspension or termination of access to our services.
• Reporting to relevant legal authorities and law enforcement.
• Permanent removal of associated content from our platform.

We encourage our users to report any content or behavior that appears to endanger the safety or dignity of minors by contacting us at care@kringp.com or using our in-app reporting tools.`,
  },
  {
    title: "User Liability",
    content: `You are responsible to keep Your account details up-to-date at all times and must ensure that the password which You have created on the Platform to access the account must be confidential and must not disclose it to or share it with anyone. You shall be responsible for all activities that occur under Your login id and password. You will not sell or otherwise transfer Your account to another person or entity.

You shall be held liable for display on the Platform through Your account of any grossly harmful, blasphemous, obscene, pornographic, paedophilic or harmful display of any material to minors which in anyway is hateful, or racially and ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, false, malicious, inaccurate or misleading, fraudulent in nature or involving the sale of counterfeit or stolen items or items which are otherwise illegal or otherwise unlawful in any manner whatsoever.`,
  },
  {
    title: "Termination",
    content: `By using the Platform, You acknowledge that while we take every reasonable action to make sure that the Services remain fully functional and up to date, interruptions do happen, for any reason or no reason, including for routine maintenance, as may be required for effective functioning of the Platform.

Further, KringP reserves the right to terminate Your access to the Platform if it reasonably believes, in its sole discretion, that You have breached any of the terms and conditions of this Agreement. Following termination, You will not be permitted to use the Platform and KringP may, in its sole discretion and without advance notice to You, cancel any outstanding service requests.

If Your access to the Platform is terminated, KringP reserves the right to exercise whatever means it deems necessary to prevent unauthorized access of the Platform. This Agreement will survive indefinitely unless and until KringP chooses, in its sole discretion and without advance to You, to terminate it.`,
  },
  {
    title: "Dispute Resolution",
    content: `If You consider there to be a dispute between You and us or the services provided by us, please contact us at care@kringp.com. These Terms, Privacy Policy and Payments and Refunds Policy that are available on the Platform shall be governed by and construed in accordance with the laws of India. You agree to submit to the exclusive jurisdiction of the courts of Ahmedabad, India to resolve any dispute arising out of the same.

We shall not be held liable for any dispute arising out of any communication led through/on our Platform between any two users using the Platform.

**Arbitration and Jurisdiction**: Any dispute or difference between the parties hereto arising out of, from or relating to anything contained in this agreement including any dispute or difference arising out of its termination, shall be referred to the arbitration as governed by Arbitration and Conciliation Act, 1996. The venue of the arbitration shall be Ahmedabad, Gujarat.`,
  },
  {
    title: "Grievance Redressal",
    content: `In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the name and contact details of the Grievance Officer are:

**Name**: Mr. Nikhilkumar Macwan
**Designation**: Grievance Officer
**Email**: info@kringp.com`,
  },
  {
    title: "Contact Us",
    content: `If You need to contact us for anything, You must write to us at info@kringp.com.

For any questions about these Terms of Service, please contact us at the above email address. We aim to respond to all inquiries within 48 business hours.`,
  },
];

export default function TermsOfService() {
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
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-gradient-orange font-semibold">Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Terms of{" "}
              <span className="text-gradient-orange">Service</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Please read these terms carefully before using KringP. By using our platform, 
              you agree to be bound by these terms.
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Version 1.0 | Last updated: May 30, 2025
            </p>
          </div>
        </div>
        
        {/* Right side image */}
        <img 
          src="/element_5.png" 
          alt="Terms of service illustration" 
          className="absolute top-20 right-24 w-[500px] h-[400px] object-contain pointer-events-none z-10"
        />
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="w-full">
          <div className="border border-border rounded-2xl p-8 mb-8 bg-white shadow-sm">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS WEBSITE OR THE KRINGP MOBILE APPLICATION, YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE WEBSITE OR SERVICES.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This is a legal agreement between You, the potential user of this website/mobile applications ("You" or "Your" or "User" "Business User" or "Influencer") and Mackring9 Private Limited ("We" or "Us" or "Our" or "Mackring9" or "KringP"). This agreement is in accordance with the Information Technology Act, 2000 and rules thereunder pertaining to electronic records as applicable and amended from time to time.
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
                      <FileText className="w-6 h-6 text-primary" />
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