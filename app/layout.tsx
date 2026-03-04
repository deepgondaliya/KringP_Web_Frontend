import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import ChatBot from '@/components/ChatBot'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata = {
  title: 'KringP - Where Influence Meets Impact | India\'s #1 Influencer Marketing Platform',
  description: 'KringP connects local businesses with authentic creators across India. Find the perfect influencer for your brand or showcase your talent as a creator. Join the movement today.',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'KringP - Where Influence Meets Impact',
    description: 'India\'s #1 Influencer Marketing Platform connecting brands with creators',
    url: 'https://kringp.com',
    siteName: 'KringP',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KringP - Where Influence Meets Impact',
    description: 'India\'s #1 Influencer Marketing Platform',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body`}>
        {children}
        <ChatBot />
      </body>
    </html>
  )
}