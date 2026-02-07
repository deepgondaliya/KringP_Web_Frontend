"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, Share2, Trash2, Bell, Globe, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const privacySections = [
  {
    icon: Database,
    title: "I. Information Collected",
    content: `The information collected from You by the Company may constitute 'personal information' or as defined under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 ("SPI Rules"). The SPI Rules define "Sensitive Personal Data or Information" of a person to mean personal information about that person relating to:

• passwords;
• financial information such as bank accounts, credit and debit card details or other payment instrument details;
• physical, physiological and mental health condition;
• sexual orientation;
• medical records and history;
• biometric information;
• any detail relating to the above clauses as provided to body corporate for providing service; and
• visitor details as provided at the time of registration or thereafter.

In the course of providing Services to You through the Platform, We may collect the following:

**Personal Identifiable Information** such as your name, gender, phone number, profile picture, username, password, e-mail address when You register on the Platform.

**Social Media Information** provided by You on your social media account, which will be linked with the account created by You on Our Platform, information disclosed therein including but not limited to username as provided by You at the time of sign-up, and publicly available data of those social media accounts.

**Device Information**: With Your permission, We may automatically collect some information about Your hardware devices when You access the Platform. For example, when You utilize Our Platform, We may collect Your IP address and the type of mobile device/computer/laptop You use and Your geographic location.

**Cookies**: If you permit cookies on Your browser, We may receive, and store certain types of information known as "cookies" when You access the Platform.

**Communications** between You and Mackring9.

**Financial Data** such as account details, e-wallet details, bank account or credit or debit card details or other payment instrument details etc.) that User may have provided Us while using the Services provided by the Platform.`,
  },
  {
    icon: Eye,
    title: "II. Use of Personal Information",
    content: `We (and third-party data processors, vendors and hosting partners who may be acting on Our behalf) may collect, store and process Your personal data/ information for the following reasons:

• to make this Platform customized, to provide content tailored to individual requirements; to understand Your needs and provide You with improved products and Services, newsletters and other communications and to enable others to view submissions/posts and blogs of Users;
• to maintain any registered accounts that You may hold with Us and to provide You with updates or notifications of changes to Your account;
• for Our internal record keeping requirements including collection of anonymized details about visitors to Our website to compile aggregate statistics or produce internal reports;
• with Your agreement, to contact You about Our or Our business partners' promotions, products and Services or other information which We think You may find interesting, offers, or for customer satisfaction purposes;
• for market research, analysis, testing, monitoring, risk management and administrative purposes (including diagnosing technology problems which may be reported to Us);
• for any purposes related to the above or where We have a legal right or duty to use or disclose Your personal data/ information (including for abuse, crime and fraud prevention and related purposes).
• To better understand how Users access and use Our Service, both on an aggregated and individualized basis;
• User posted content may be reused by Us to aggregate data about a particular activity or location and include it in consolidated formats.

If We become aware that We have collected or been sent personal data/ information from a person who is under 18 (eighteen) years of age, without the consent of the legal parent or guardian, We will deactivate the relevant account as soon as is reasonably practicable by Us.`,
  },
  {
    icon: Globe,
    title: "III. Usage of Cookies",
    content: `Your Internet browser has the in-built facility for storing small files -- "cookies" -- that hold information which allows a website to recognize your account. Our website takes advantage of this facility to enhance your experience. You have the ability to prevent your computer from accepting cookies but, if you do, certain functionality on the website may be impaired.`,
  },
  {
    icon: Lock,
    title: "IV. Security",
    content: `The security of User Data and Personal Information is important to Us. We follow generally accepted industry standards to protect the User Data and Personal Information submitted to Us, both during transmission and once We receive it. All information gathered on Our Platform is securely stored. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited.

We take all necessary precautions to protect Your Personal Information both online and off-line, and implement reasonable security practices and measures including certain managerial, technical, operational and physical security control measures that are commensurate with respect to the information being collected and the nature of Our business.

Although We make best possible efforts to store Personal Information in a secure operating environment that is not open to the public, User must understand that there is no such thing as complete security, and We do not guarantee that there will be no unintended disclosures of Personal Information.

**For security from Your part, You should:**
• if using a computer in a public location, always log out and close the website browser when You complete Your online session;
• keep Your account details and passwords private;
• avoid using the same password for multiple online accounts.`,
  },
  {
    icon: Share2,
    title: "V. Google/YouTube",
    content: `We hereby inform all Users that We use YouTube API Services, and by using those API services, Users agree to be bound by the Terms of Service of YouTube available at Terms of Service. It is important for Users to review and comply with the terms outlined in the YouTube Terms of Service.

Further, Users are bound by Google's Privacy Policy, and we encourage everyone to familiarize themselves with Google's privacy practices. To access and review Google's Privacy Policy, please visit https://policies.google.com/privacy.

Additionally, Users have the option to delete their stored data in accordance with the terms and conditions outlined in this Policy. Furthermore, Users can revoke access to their data by visiting the Google security settings page at Security.`,
  },
  {
    icon: Shield,
    title: "VI. Protection of Minors and Child Safety",
    content: `At Mackring9, we are committed to upholding the highest standards of safety and well-being for all users, especially minors. In compliance with global laws and platform policies—including Google's Child Endangerment and Abuse Policy—we strictly prohibit any content or conduct on our platform that exploits, endangers, or harms children in any manner.

This includes, but is not limited to:
• Content that depicts or promotes the sexualization, abuse, neglect, or exploitation of minors.
• Involvement of minors in dangerous challenges, stunts, or activities that may lead to physical or psychological harm.
• Any form of grooming, harassment, or solicitation of minors through our platform.
• Uploading, sharing, or promoting media that includes inappropriate interactions involving minors.
• Content that misrepresents the age or identity of a minor for any deceptive, exploitative, or malicious purposes.

Mackring9 maintains a zero-tolerance policy toward such violations. Any user, influencer, or third-party account found in breach of this clause may face:
• Immediate suspension or termination of access to our services.
• Reporting to relevant legal authorities and law enforcement.
• Permanent removal of associated content from our platform.

We encourage our users to report any content or behavior that appears to endanger the safety or dignity of minors by contacting us at info@kringp.com or using our in-app reporting tools.`,
  },
  {
    icon: Database,
    title: "VII. Meta",
    content: `We also inform all Users that We use Facebook and Instagram API Services, and the Users are thereby bound by the policies framed by Meta. Hence, all Users agree to be bound by Meta's Privacy Policy.

**Data Collection and Processing:**
• **Data Collection**: We collect data from Facebook for the purpose of digital marketing activities. This data may include but is not limited to user profiles, demographic information, and engagement metrics.
• **Data Processing**: The collected data is processed using secure and compliant methods. Our processing activities include segmentation, analysis, and profiling to tailor marketing strategies for targeted audiences.
• **Purposes of Processing**: The data is processed for targeted advertising, marketing campaign optimization, audience analysis and segmentation, and performance measurement and reporting.`,
  },
  {
    icon: Trash2,
    title: "VIII. Data Retention",
    content: `We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for the duration of your account being active, to provide you with our services, to comply with our legal obligations, resolve disputes, and enforce our agreements. The retention period may vary depending on the type of data and the specific purpose. Once the retention period expires, we will securely delete or anonymize your personal information.`,
  },
  {
    icon: Trash2,
    title: "IX. Data Deletion",
    content: `**Request Process**: Users can exercise their right to self-delete personal data by going to the "Account Settings" in the KringP app. Alternatively, users have the right to request the deletion of their personal data held by Mackring9. To initiate a data deletion request, individuals should submit an email request to our designated Data Protection Officer (DPO) at ranojoy.roychowdhury@tring.co.in.

**Required Information**: To process the request efficiently, users should include:
• Full name and contact information.
• Any relevant account or transaction identifiers.
• Description of the data they wish to be deleted.

**Processing Time**: Upon receiving a valid deletion request, we will make all reasonable efforts to promptly and securely delete the requested data from our systems. The time required for deletion of data will not be more than 5 working days except wherein the data requested for deletion are in use related to ongoing Campaign then in this case the data deletion request will be processed within 90 working days from the date of completion of Campaign.

**Exceptions**: Certain data may be exempt from deletion if it is necessary for legal compliance, dispute resolution, or other legitimate business purposes.`,
  },
  {
    icon: Shield,
    title: "X. Your Rights",
    content: `Under applicable data protection laws, including the Digital Personal Data Protection Act, 2023 in India, you may have certain rights regarding your personal information, including:

• **Right to Access**: You have the right to request access to the personal information we hold about you.
• **Right to Rectification**: You have the right to request the correction of inaccurate or incomplete personal information.
• **Right to Erasure (Right to be Forgotten)**: You may have the right to request the deletion of your personal information under certain circumstances as specified under this policy.
• **Right to Restriction of Processing**: You may have the right to request the restriction of the processing of your personal information.
• **Right to Data Portability**: You may have the right to receive your personal information in a structured, commonly used, and machine-readable format and to transmit it to another controller.
• **Right to Object**: You may have the right to object to the processing of your personal information in certain situations, such as for direct marketing purposes.
• **Right to Grievance Redressal**: You have the right to lodge a complaint with us regarding the processing of your personal information. You should submit an email request at info@kringp.com.

To exercise any of these rights, please contact us at info@kringp.com. We may require you to verify your identity before responding to your request.`,
  },
  {
    icon: Heart,
    title: "XI. Mental Health & Support",
    content: `To enhance our commitment to user well-being, we have partnered with a third-party to offer a "Talk to a Counselor" feature. This service facilitates direct communication between our influencers and business users and mental health counselors via WhatsApp chat, with a direct phone number available for emergencies.

**Important Privacy Note**: While we facilitate access to this service, the counseling sessions and your direct communications with the counselors occur directly with the third-party and their counselors. We do not collect, store, or process the content of your conversations with the counselors. This mental health support service is provided to you completely free of charge.`,
  },
  {
    icon: Bell,
    title: "XII. Updates",
    content: `We review this privacy policy on a regular basis to ensure that it is up-to-date with our use of your personal information, and compliant with applicable data protection laws. We reserve the right, at our discretion, to revise this privacy policy at any time. The updated privacy policy will be posted on our website. You are encouraged to review this privacy policy from time to time. This privacy policy was last updated May 30, 2025.`,
  },
  {
    icon: Globe,
    title: "XIII. Cross-Border Data Transfers",
    content: `As our business evolves, we may need to transfer your personal information to countries outside of India where our servers or third-party service providers are located. These countries may have data protection laws that are different from the laws of India. If and when we transfer your personal information internationally, we will take steps to ensure that your personal information is protected in accordance with applicable Indian law and this Privacy Policy. These safeguards may include implementing standard contractual clauses or other legally approved mechanisms for international data transfers, as recognized under Indian law.`,
  },
  {
    icon: Shield,
    title: "XIV. Governing Law and Jurisdiction",
    content: `This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.`,
  },
];

export default function PrivacyPolicy() {
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
      <div className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-8 md:pt-32 md:pb-16 relative">
        <div className="container mx-auto px-6">
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-gradient-orange font-semibold">Legal</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
              Privacy{" "}
              <span className="text-gradient-orange">Policy</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Your privacy matters to us. This policy explains how we collect, use, 
              and protect your personal information.
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Version 1.0 | Last updated: May 30, 2025
            </p>
          </div>
        </div>
        
        {/* Right side image */}
        <img 
          src="/element_4.png" 
          alt="Privacy policy illustration" 
          className="mx-auto mt-8 w-[300px] h-[300px] md:absolute md:top-20 md:right-24 md:w-[500px] md:h-[400px] object-contain pointer-events-none z-10"
        />
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="w-full">
          <div className="border border-border rounded-2xl p-8 mb-8 bg-white shadow-sm">
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how <strong>MACKRING9 PRIVATE LIMITED</strong> (hereinafter referred to as "Mackring9" or "KringP" or "Company" or "We" or "Our" or "Us"), a private limited company registered in the State of Gujarat, India, collects, uses, discloses, and protects the personal information of users ("you" or "users") who access our website www.kringp.com and our mobile application KringP (collectively, the "Platform"). Our Platform connects influencers and business owners for collaboration opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-20 relative z-10">
        <div className="w-full space-y-8">
          {privacySections.map((section, index) => {
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
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-lg md:text-2xl font-display font-bold text-foreground">
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

      {/* Contact Section */}
      <div className="bg-white border-t border-border py-16 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            XV. Contact Us
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            If you have any questions about our Privacy Policy, or if you want to know what information we have collected about you, please email us at info@kringp.com. You can also correct any factual errors in that information or require us to remove your details from any list under our control.
          </p>
          <a
            href="mailto:info@kringp.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            info@kringp.com
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}