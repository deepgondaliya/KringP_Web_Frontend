import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

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
      </body>
    </html>
  )
}