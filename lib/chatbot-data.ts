export interface QAPair {
  id: string
  question: string
  keywords: string[]
  answer: string
}

export const qaPairs: QAPair[] = [
  {
    id: 'what-is-kringp',
    question: 'What is KringP?',
    keywords: ['what is', 'what are', 'about', 'explain', 'overview', 'kringp', 'platform', 'tell me', 'describe'],
    answer: 'KringP is a global influencer marketplace that connects brands with local creators. Businesses can find the perfect influencer for their campaigns, and creators can showcase their talent and earn through collaborations.',
  },
  {
    id: 'sign-up',
    question: 'How do I sign up?',
    keywords: ['sign up', 'register', 'join', 'create account', 'get started', 'new account', 'start', 'how to join', 'signup', 'registration'],
    answer: "You can sign up by clicking the 'Get Started' button on our homepage. Choose whether you're a Business or a Creator, fill in your details, and you're ready to go!",
  },
  {
    id: 'for-businesses',
    question: 'How does KringP work for businesses?',
    keywords: ['business', 'brand', 'campaign', 'find creators', 'advertise', 'promote', 'marketing', 'hire', 'collaboration request', 'company', 'enterprise'],
    answer: 'As a business, you can search for creators using location-based targeting, advanced filters, and real-time analytics. Create campaigns, send collaboration requests, and track performance — all in one place.',
  },
  {
    id: 'for-creators',
    question: 'How does KringP work for creators?',
    keywords: ['creator', 'influencer', 'join as creator', 'earn', 'portfolio', 'showcase', 'content creator', 'make money', 'collaborate', 'youtuber', 'instagrammer', 'blogger'],
    answer: "As a creator, build your profile, set your rates, and get discovered by brands looking for your niche. You'll receive collaboration requests and get paid securely once work is confirmed complete.",
  },
  {
    id: 'payments',
    question: 'How do payments work?',
    keywords: ['payment', 'pay', 'billing', 'fee', 'cost', 'commission', 'refund', 'money', 'price', 'pricing', 'charge', 'transaction', 'payout'],
    answer: 'Payments are processed securely once both parties confirm a collaboration is complete. KringP charges a 20% commission from the creator side only. Funds are transferred to your connected payment method within 3-5 business days.',
  },
  {
    id: 'how-it-works',
    question: 'How does KringP work?',
    keywords: ['how does', 'how it works', 'process', 'steps', 'explain how', 'workflow', 'mechanism', 'function'],
    answer: 'KringP works in 3 simple steps: 1) Businesses post campaigns or search creators. 2) Creators apply or receive collaboration requests. 3) Both parties agree, work is completed, and payment is released automatically.',
  },
  {
    id: 'cancel',
    question: 'Can I cancel a collaboration?',
    keywords: ['cancel', 'cancellation', 'withdraw', 'stop', 'end collaboration', 'quit', 'terminate', 'abort'],
    answer: 'Collaborations can be cancelled before work begins. Once work has started, cancellation requires mutual agreement. Check our cancellation policy for details on refunds.',
  },
  {
    id: 'security',
    question: 'Is my data safe?',
    keywords: ['safe', 'security', 'secure', 'data', 'privacy', 'personal information', 'protect', 'private', 'encryption', 'confidential'],
    answer: "Absolutely. KringP uses industry-standard encryption and security measures to protect your data. Your personal information is never shared without your consent. Review our Privacy Policy for full details.",
  },
  {
    id: 'contact-support',
    question: 'How do I contact support?',
    keywords: ['contact', 'help', 'support', 'talk to someone', 'agent', 'human', 'team', 'assist', 'problem', 'issue', 'customer service'],
    answer: 'You can reach our support team via Live Chat on our Help Center page, or email us at hello@kringp.com. We typically respond within 24 hours.',
  },
  {
    id: 'pricing-plans',
    question: 'What are the pricing plans?',
    keywords: ['pricing plans', 'subscription', 'plans', 'packages', 'membership', 'tier', 'free trial', 'premium', 'how much'],
    answer: 'KringP is completely free to join for both businesses and creators! There are no subscription fees or upfront costs. We only charge a 20% platform commission from creators when a deal is successfully completed.',
  },
  {
    id: 'location-targeting',
    question: 'Can I find local creators?',
    keywords: ['local', 'location', 'nearby', 'area', 'city', 'region', 'geography', 'target location', 'find near me'],
    answer: 'Yes! KringP specializes in location-based targeting. You can search for creators in specific cities, regions, or countries. This helps businesses connect with local influencers who have authentic community connections.',
  },
  {
    id: 'creator-verification',
    question: 'Are creators verified?',
    keywords: ['verified', 'verification', 'authentic', 'real', 'genuine', 'legitimate', 'badge', 'check'],
    answer: 'Yes, we verify all creators on our platform. Verified creators have a badge on their profile. We check social media accounts, engagement metrics, and identity to ensure authenticity and quality.',
  },
  {
    id: 'campaign-types',
    question: 'What types of campaigns can I create?',
    keywords: ['campaign types', 'types of campaigns', 'collaboration types', 'sponsored post', 'product review', 'brand ambassador', 'giveaway'],
    answer: 'You can create various campaign types including sponsored posts, product reviews, unboxing videos, brand ambassadorships, giveaways, event coverage, and long-term partnerships. Customize each campaign to fit your marketing goals.',
  },
  {
    id: 'analytics',
    question: 'Do you provide analytics?',
    keywords: ['analytics', 'metrics', 'statistics', 'data', 'insights', 'performance', 'tracking', 'reports', 'roi', 'results'],
    answer: 'Yes! KringP provides real-time analytics and performance tracking. Monitor reach, engagement, conversions, and ROI for all your campaigns. Get detailed reports to measure the success of your influencer collaborations.',
  },
  {
    id: 'minimum-followers',
    question: 'Is there a minimum follower requirement?',
    keywords: ['minimum followers', 'follower requirement', 'how many followers', 'follower count', 'micro influencer', 'nano influencer'],
    answer: 'We welcome creators of all sizes! From nano-influencers (1K+ followers) to mega-influencers. We believe authentic engagement matters more than follower count. Build your profile and connect with brands that value your unique audience.',
  },
  {
    id: 'social-platforms',
    question: 'Which social media platforms are supported?',
    keywords: ['platforms', 'social media', 'instagram', 'youtube', 'tiktok', 'facebook', 'twitter', 'linkedin', 'which platforms'],
    answer: 'KringP supports all major social media platforms including Instagram, YouTube, TikTok, Facebook, Twitter, and LinkedIn. You can connect multiple accounts and showcase your presence across different platforms.',
  },
  {
    id: 'contract-agreement',
    question: 'How do contracts work?',
    keywords: ['contract', 'agreement', 'terms', 'legal', 'document', 'sign', 'binding'],
    answer: 'Every collaboration includes a clear agreement outlining deliverables, timelines, payment terms, and usage rights. Both parties review and accept terms before work begins. This protects everyone and ensures smooth collaborations.',
  },
  {
    id: 'content-ownership',
    question: 'Who owns the content?',
    keywords: ['content ownership', 'rights', 'copyright', 'intellectual property', 'usage rights', 'who owns'],
    answer: 'Content ownership and usage rights are defined in each collaboration agreement. Typically, creators retain copyright while brands get usage rights for marketing. Specific terms are negotiated and agreed upon before the campaign starts.',
  },
  {
    id: 'response-time',
    question: 'How long does it take to get responses?',
    keywords: ['response time', 'how long', 'wait time', 'reply time', 'turnaround', 'when will', 'how fast'],
    answer: 'Response times vary by user. Most creators respond within 24-48 hours. Businesses typically review applications within 2-3 days. You can set your own response preferences and receive notifications for new messages and requests.',
  },
  {
    id: 'dispute-resolution',
    question: 'What if there is a dispute?',
    keywords: ['dispute', 'conflict', 'disagreement', 'problem', 'complaint', 'resolution', 'mediation'],
    answer: 'If a dispute arises, our support team acts as a mediator. We review the collaboration agreement, communication history, and deliverables to find a fair resolution. Our goal is to protect both parties and maintain platform integrity.',
  },
  {
    id: 'profile-optimization',
    question: 'How can I improve my profile?',
    keywords: ['improve profile', 'optimize', 'better profile', 'profile tips', 'stand out', 'get noticed', 'visibility'],
    answer: 'To optimize your profile: add high-quality photos, write a compelling bio, showcase your best work, keep your rates competitive, respond quickly to messages, and maintain high engagement. Complete profiles get 3x more collaboration requests!',
  },
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    keywords: ['payment methods', 'payment options', 'how to pay', 'credit card', 'paypal', 'bank transfer', 'upi'],
    answer: 'We accept multiple payment methods including credit/debit cards, PayPal, bank transfers, and UPI. Choose your preferred method in account settings. All transactions are encrypted and secure.',
  },
  {
    id: 'mobile-app',
    question: 'Is there a mobile app?',
    keywords: ['mobile app', 'app', 'ios', 'android', 'download', 'smartphone', 'mobile version'],
    answer: 'Our mobile app is coming soon! Currently, our website is fully responsive and works great on mobile browsers. You can access all features from your phone. Download the app when it launches for an even better experience.',
  },
  {
    id: 'free-account',
    question: 'Is KringP free to use?',
    keywords: ['free', 'cost', 'free account', 'no cost', 'trial', 'free version', 'charges', 'any fees'],
    answer: 'Yes! KringP is 100% free to join and use for both businesses and creators. No subscription fees, no hidden charges. We only take a 20% commission from creators when a collaboration is successfully completed. Businesses pay nothing!',
  },
  {
    id: 'success-rate',
    question: 'What is the success rate?',
    keywords: ['success rate', 'success stories', 'results', 'effectiveness', 'testimonials', 'reviews', 'case studies'],
    answer: 'Over 85% of campaigns on KringP achieve their goals! Our platform has facilitated thousands of successful collaborations. Check our Success Stories page to see real results from businesses and creators who have grown with KringP.',
  },
]

// Pre-normalize keywords at module load time to avoid repeated work per invocation
const normalizedPairs = qaPairs.map(pair => ({
  ...pair,
  keywords: pair.keywords.map(k => k.toLowerCase()),
}))

/**
 * Returns the best-matching QAPair for the given user input,
 * or null if no keyword matches (including empty string input).
 * Tie-breaking is by array order — earlier entries take priority.
 */
export function findBestMatch(input: string): QAPair | null {
  const normalized = input.toLowerCase().replace(/[^\w\s]/g, '')

  let bestMatch: QAPair | null = null
  let bestScore = 0

  for (let i = 0; i < normalizedPairs.length; i++) {
    const pair = normalizedPairs[i]
    let score = 0
    for (const keyword of pair.keywords) {
      if (normalized.includes(keyword)) {
        // Multi-word keywords score higher than single words
        score += keyword.split(' ').length
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = qaPairs[i]
    }
  }

  return bestScore > 0 ? bestMatch : null
}
