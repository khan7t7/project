"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight, Cpu, Sparkles } from "lucide-react"

export function StickyHeader() {
  const { scrollYProgress } = useScroll({
    offset: ["20vh", "35vh"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1])
  const y = useTransform(smoothProgress, [0, 1], [-25, 0])

  return (
    <motion.header
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 h-16 bg-[#07090f]/85 backdrop-blur-xl z-50 flex items-center px-4 sm:px-8 justify-between border-b border-cyan-500/20 shadow-lg shadow-black/50"
    >
      <a href="#hero" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all">
          <Cpu className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            MUSTAFA AHMAD
          </span>
          <span className="text-[10px] font-mono text-cyan-400/80 -mt-0.5">
            Senior ERPNext Architect
          </span>
        </div>
      </a>

      <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
        <a href="#about" className="hover:text-cyan-300 transition-colors">01 // ABOUT</a>
        <a href="#experience" className="hover:text-cyan-300 transition-colors">02 // CAREER</a>
        <a href="#skills" className="hover:text-cyan-300 transition-colors">03 // MATRIX</a>
        <a href="#projects" className="hover:text-cyan-300 transition-colors">04 // SYSTEMS</a>
        <a href="#education" className="hover:text-cyan-300 transition-colors">05 // EDUCATION</a>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          AVAILABLE
        </div>
        <Button asChild size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs h-8 px-3">
          <a href="#contact" className="flex items-center gap-1">
            <span>Direct Line</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </Button>
      </div>
    </motion.header>
  )
}
