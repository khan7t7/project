"use client"

import { Button } from "@/components/ui/button"
import { LinkedinIcon } from "@/components/ui/icons"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import {
  Check,
  Copy,
  Globe2,
  Languages,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Terminal
} from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    if (type === "email") {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1200)
  }

  return (
    <MotionSection className="py-24 px-4 relative" delay={0.25}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 // DIRECT TRANSMISSION LINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Initiate <span className="gradient-text">Contact Protocol</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-base sm:text-lg">
            Available for Senior ERPNext Architecture, Legacy Oracle Migrations, and Enterprise AI Workflow Consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Column: Direct Credentials & 1-Click Copy (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Direct Email</span>
                </div>
                <button
                  onClick={() => copyToClipboard("mmustafa.erp@gmail.com", "email")}
                  className="p-1.5 rounded-md bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 text-xs font-mono transition-colors flex items-center gap-1"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[11px]">{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <a
                href="mailto:mmustafa.erp@gmail.com"
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
              >
                mmustafa.erp@gmail.com
              </a>
              <p className="text-xs text-slate-400 mt-1 font-mono">Guaranteed response within 24 hours.</p>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Direct Phone &amp; WhatsApp</span>
                </div>
                <button
                  onClick={() => copyToClipboard("+923177791717", "phone")}
                  className="p-1.5 rounded-md bg-white/[0.04] hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-300 text-xs font-mono transition-colors flex items-center gap-1"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[11px]">{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <a
                href="tel:+923177791717"
                className="text-base sm:text-lg font-bold text-white hover:text-emerald-300 transition-colors font-mono"
              >
                +92 317 7791717
              </a>
              <div className="flex items-center gap-2 mt-2">
                <a
                  href="https://wa.me/923177791717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono hover:bg-emerald-500/25 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Relocation Card */}
            <div className="p-5 rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Primary Base</span>
              </div>
              <div className="text-base font-bold text-white">Faisalabad, Pakistan</div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Available for Remote Worldwide &amp; On-Site Hybrid Deployments.
              </p>
            </div>

            {/* Linguistic Proficiency Card */}
            <div className="p-5 rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Languages className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Language Capabilities</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span>English:</span>
                  <span className="text-cyan-300 font-bold">Professional Working</span>
                </div>
                <div className="flex justify-between">
                  <span>Urdu, Punjabi, Pashto, Hindi:</span>
                  <span className="text-emerald-300 font-bold">Native Mastery</span>
                </div>
                <div className="flex justify-between">
                  <span>Arabic:</span>
                  <span className="text-amber-300 font-bold">Intermediate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Transmission Form (Spans 3 cols) */}
          <div className="lg:col-span-3 rounded-2xl bg-[#0b0e18]/85 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-cyan-400">
              <MessageSquare className="w-4 h-4" />
              <span>DIRECT DISPATCH INTERFACE</span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Transmission Delivered</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto font-mono">
                  Your message has been routed to Mustafa Ahmad's direct dispatch terminal. Expect an executive response shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Sender Name / Organization
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe / Enterprise Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Contact Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. jdoe@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Engagement Scope / Project Nature
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080a11] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  >
                    <option>ERPNext Architecture / Implementation</option>
                    <option>Oracle EBS to Cloud Zero-Downtime Migration</option>
                    <option>n8n &amp; Autonomous AI Agent Workflow Automation</option>
                    <option>Senior Full-Stack / Advisory Role</option>
                    <option>Other Technical Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Transmission Content / Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your architecture requirements, timelines, or role scope..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3 text-sm rounded-xl border-0 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Payload...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message to Mustafa</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
