"use client"

import { TerminalDeck } from "@/components/ui/TerminalDeck"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowDown,
  ArrowRight,
  Database,
  Layers,
  Mail,
  Server,
  Sparkles,
  Zap
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const metrics = [
  {
    icon: Database,
    value: "10M+",
    label: "Records Migrated",
    sub: "Oracle EBS to ERPNext",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Zap,
    value: "0.0s",
    label: "Cutover Downtime",
    sub: "High-Integrity Extraction",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: Layers,
    value: "5+",
    label: "ERP Cycles Led",
    sub: "POS, Retail, Inventory",
    color: "from-purple-400 to-indigo-500"
  },
  {
    icon: Server,
    value: "99.9%",
    label: "Production SLA",
    sub: "Multi-Country Operations",
    color: "from-amber-400 to-orange-500"
  }
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2])
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 80])

  return (
    <div ref={containerRef} className="relative w-full min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background Cyber Glow & Matrix */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Dynamic Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Top Status Radar Pill */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-950/50 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-wide">ENTERPRISE SYSTEM ARCHITECT</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">OPEN TO SELECT CONSULTATIONS & ROLES</span>
          </motion.div>
        </div>

        {/* Hero Head Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          {/* Left Column: Avatar with HUD Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0"
          >
            <div className="relative w-44 h-44 sm:w-52 sm:h-52">
              {/* Outer Rotating Cyber Ring */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-cyan-500/40 animate-spin" style={{ animationDuration: "25s" }} />
              {/* Inner Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-emerald-400 opacity-50 blur-lg animate-pulse-slow" />
              {/* Profile Image Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-2xl bg-slate-950">
                <Image
                  src="/mustafa.jpg"
                  alt="Mustafa Ahmad"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Verified Tech Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#0c101d] border border-cyan-500/60 rounded-xl px-2.5 py-1 flex items-center gap-1.5 shadow-lg shadow-black/80">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono text-cyan-200 font-bold">ERPNext v15</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title, Subtitle, Badges & CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-3"
            >
              <span className="text-white">MUSTAFA</span>{" "}
              <span className="gradient-text">AHMAD</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <h2 className="text-lg sm:text-2xl font-bold text-cyan-300 font-mono tracking-tight">
                Senior ERPNext Architect &amp; Enterprise Solutions Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              Bridging complex business domains with modern technical execution. Specialized in{" "}
              <span className="text-cyan-300 font-medium">Frappe bespoke frameworks</span>,{" "}
              <span className="text-emerald-300 font-medium">10M+ zero-downtime Oracle migrations</span>,{" "}
              <span className="text-purple-300 font-medium">autonomous n8n workflows</span>, and{" "}
              <span className="text-amber-300 font-medium">AI-driven LLM categorization agents</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold border-0 shadow-lg shadow-cyan-500/25">
                <a href="#about" className="flex items-center gap-2">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/30 text-cyan-200">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Direct Transmission</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-slate-300 hover:text-white hover:bg-white/[0.06]">
                <a href="https://linkedin.com/in/mustafaERP" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-slate-300 hover:text-white hover:bg-white/[0.06]">
                <a href="https://github.com/khan7t7" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="w-4 h-4 text-slate-200" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Enterprise Metrics Counter Deck */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {metrics.map((m, idx) => {
            const Icon = m.icon
            return (
              <div
                key={idx}
                className="relative p-4 rounded-xl bg-[#0b0e17]/80 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md group hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/[0.04] text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-2xl sm:text-3xl font-extrabold font-mono bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                    {m.value}
                  </span>
                </div>
                <div className="font-semibold text-sm text-slate-200">{m.label}</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">{m.sub}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Interactive Terminal / Code Console Deck */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6"
        >
          <div className="text-center mb-3">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              // Interactive Architecture Console — Click tabs below to inspect live code
            </span>
          </div>
          <TerminalDeck />
        </motion.div>
      </motion.div>

      {/* Down Arrow Indicator */}
      <div className="flex justify-center mt-12">
        <a
          href="#about"
          className="p-2 rounded-full border border-white/[0.1] text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
