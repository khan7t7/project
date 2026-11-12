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
  title: 'Mustafa Ahmad - Senior ERPNext Architect & Enterprise Solutions Developer',
  description: 'Senior ERPNext Architect & Frappe Developer specializing in end-to-end ERP implementations, bespoke customization, legacy Oracle migrations, and AI-driven workflow automations. Based in Faisalabad, Pakistan.',
  keywords: [
    'Senior ERPNext Architect',
    'Enterprise Solutions Developer',
    'Frappe Developer',
    'ERPNext',
    'Oracle EBS Migration',
    'n8n Automation',
    'AI LLM Agents',
    'Python Developer',
    'Full-Stack Developer',
    'PL/SQL',
    'Faisalabad',
    'Pakistan'
  ],
  authors: [{ name: 'Mustafa Ahmad', url: 'https://linkedin.com/in/mustafaERP' }],
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
    url: 'https://itsmustafa.vercel.app',
    title: 'Mustafa Ahmad - Senior ERPNext Architect & Enterprise Solutions Developer',
    description: 'Senior ERPNext Architect & Frappe Developer specializing in end-to-end ERP implementations, bespoke customization, legacy Oracle migrations, and AI-driven workflow automations.',
    siteName: 'Mustafa Ahmad Portfolio',
    images: [{
      url: '/DP.jpg',
      width: 1200,
      height: 630,
      alt: 'Mustafa Ahmad - Senior ERPNext Architect & Enterprise Solutions Developer'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Ahmad - Senior ERPNext Architect & Enterprise Solutions Developer',
    description: 'Senior ERPNext Architect & Frappe Developer specializing in ERP implementations and AI automation.',
    images: ['/DP.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://itsmustafa.vercel.app',
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
