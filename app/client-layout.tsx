"use client"

import { ThemeProvider } from '@/components/theme-provider'
// import { LoadingAnimation } from "@/components/ui/LoadingAnimation"
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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <StickyHeader />
      {!isLoading && <SparklingSphere />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="min-h-screen pt-4">
          {children}
        </main>
        <footer className="border-t border-white/[0.08] bg-[#05060b] py-8 text-xs font-mono text-slate-400 mt-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-bold text-white">MUSTAFA AHMAD</span>
              <span className="text-slate-600">//</span>
              <span>Senior ERPNext Architect</span>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <a href="https://linkedin.com/in/mustafaERP" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/khan7t7" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                GitHub
              </a>
              <a href="mailto:mmustafa.erp@gmail.com" className="hover:text-cyan-400 transition-colors">
                Email
              </a>
              <span className="text-slate-600">|</span>
              <span className="text-slate-500">Faisalabad, PK</span>
            </div>
          </div>
        </footer>
      </motion.div>
    </ThemeProvider>
  )
}
