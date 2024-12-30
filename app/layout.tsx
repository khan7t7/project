import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mustafa Ahmad - Full-Stack Developer & AI Expert',
  description: 'Full-Stack Developer | ERPNext Expert | System Administrator | Gen AI Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <main className="bg-background min-h-screen pt-20">
            {children}
            <footer className="text-center py-4 text-sm text-muted-foreground mt-auto">
              Made by Mustafa | with <span className="text-red-500">🩵</span>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
