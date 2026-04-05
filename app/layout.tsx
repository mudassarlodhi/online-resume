import type { Metadata, Viewport } from 'next'
import { Poppins, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: 'Mudassar Lodhi | Senior Full-Stack Engineer',
  description: 'Senior Full-Stack Engineer with 8+ years of experience building production-grade web applications for Careem, Motive, and VentureDive. Specialized in React, Next.js, Angular, and Node.js.',
  keywords: ['Full-Stack Engineer', 'React', 'Angular', 'Next.js', 'Node.js', 'Software Engineer', 'Mudassar Lodhi'],
  authors: [{ name: 'Mudassar Lodhi' }],
  openGraph: {
    title: 'Mudassar Lodhi | Senior Full-Stack Engineer',
    description: 'Senior Full-Stack Engineer with 8+ years of experience in React, Angular, Next.js, and Node.js',
    type: 'profile',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunitoSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
