"use client"

import { ThemeProvider } from '@/components/theme-provider'
import { CursorTrail } from "@/components/ui/CursorTrail"
import { LoadingAnimation } from "@/components/ui/LoadingAnimation"
import { StickyHeader } from "@/components/ui/sticky-header"
import { ThreeScene } from "@/components/ui/ThreeScene"
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    Promise.all([
      document.fonts.ready,
      new Promise(resolve => setTimeout(resolve, 2000))
    ]).then(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="theme-preference"
    >
      <CursorTrail />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--gradient-1))] via-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Sticky Header */}
      <StickyHeader />

      {/* Site-wide Background */}
      <div className="fixed inset-0 z-[-2]">
        <motion.div
          className="absolute inset-0 tech-background"
          style={{
            opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
            scale: useSpring(1 - scrollYProgress.get() * 0.1, { stiffness: 100, damping: 30 })
          }}
        />
        <motion.div
          className="absolute inset-0 grid-background"
          style={{
            opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
            scale: useSpring(1 + scrollYProgress.get() * 0.1, { stiffness: 100, damping: 30 })
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <ThreeScene />

      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        {isLoading ? (
          <LoadingAnimation onComplete={() => {}} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5
            }}
          >
            <main className="min-h-screen pt-20 scroll-smooth">
              {children}
            </main>
            <footer className="text-center py-1.5 text-sm text-muted-foreground mt-auto">
              Made by Mustafa | with <span className="text-red-500">🩵</span>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}
