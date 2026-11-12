"use client"

import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import { Award, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react"

interface CertItem {
  name: string
  issuer: string
  badge: string
  color: string
}

const certifications: CertItem[] = [
  {
    name: "ERPNext Developer",
    issuer: "Upeosoft",
    badge: "Enterprise ERP",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400"
  },
  {
    name: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    badge: "Gen AI & LLM",
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400"
  },
  {
    name: "DevOps Professional",
    issuer: "Microsoft",
    badge: "Cloud & CI/CD",
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400"
  },
  {
    name: "GitHub Professional",
    issuer: "GitHub",
    badge: "Version Control & Actions",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    badge: "Data Science",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400"
  },
  {
    name: "Business Analysis",
    issuer: "PagerDuty",
    badge: "Operations & Incident SLA",
    color: "from-pink-500/20 to-rose-500/10 border-pink-500/30 text-pink-400"
  }
]

export function Certifications() {
  return (
    <MotionSection className="py-24 px-4 relative" delay={0.25}>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-base">
            Accredited credentials spanning ERP architecture, cloud DevOps, AI workflows, and data systems.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-400 uppercase tracking-wider">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm font-mono text-cyan-400/90 font-medium mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Issue
                </span>
                <span className="text-slate-600">ID: ACCREDITED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
