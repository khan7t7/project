import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientLayout } from './client-layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mustafa Ahmad - Full-Stack Developer & AI Expert',
  description: 'Full-Stack Developer | ERPNext Expert | System Administrator | Gen AI Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
