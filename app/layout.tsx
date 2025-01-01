import { ErrorBoundary } from '@/components/error-boundary'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ClientLayout } from './client-layout'
import './globals.css'
import { PersonStructuredData } from './structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://itsmustafa.vercel.app'),
  title: 'Mustafa Ahmad - Full-Stack Developer & AI Expert',
  description: 'Expert Full-Stack Developer specializing in ERPNext, System Administration, and AI integration. Based in Muscat, Oman.',
  keywords: [
    'Full-Stack Developer',
    'ERPNext Expert',
    'System Administrator',
    'AI Integration',
    'Cloud Computing',
    'Python Developer',
    'Web Development',
    'Muscat',
    'Oman'
  ],
  authors: [{ name: 'Mustafa Ahmad', url: 'https://linkedin.com/in/khan777' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Mustafa Ahmad - Full-Stack Developer & AI Expert',
    description: 'Expert Full-Stack Developer specializing in ERPNext, System Administration, and AI integration.',
    siteName: 'Mustafa Ahmad Portfolio',
    images: [{
      url: '/og-image.jpg', // Add your OG image
      width: 1200,
      height: 630,
      alt: 'Mustafa Ahmad - Full-Stack Developer'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Ahmad - Full-Stack Developer & AI Expert',
    description: 'Expert Full-Stack Developer specializing in ERPNext and AI integration.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PersonStructuredData) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ErrorBoundary>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
