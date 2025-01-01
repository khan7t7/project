"use client"

import { ThemeProvider } from '@/components/theme-provider'
import { LoadingAnimation } from "@/components/ui/LoadingAnimation"
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamically import heavy components
const CursorTrail = dynamic(() => import("@/components/ui/CursorTrail").then(mod => mod.CursorTrail), {
  ssr: false
})
const SparklingSphere = dynamic(() => import("@/components/ui/SparklingSphere").then(mod => mod.SparklingSphere), {
  ssr: false
})
const StickyHeader = dynamic(() => import("@/components/ui/sticky-header").then(mod => mod.StickyHeader))

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
      new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <ThemeProvider>
      {!isLoading && <CursorTrail />}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--gradient-1))] via-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <StickyHeader />
      {!isLoading && <SparklingSphere />}

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation onComplete={() => {}} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <main className="min-h-screen pt-20">
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
