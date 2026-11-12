"use client"

import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import {
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  GitBranch,
  Layers,
  Network,
  ShieldCheck,
  Workflow,
  Zap
} from "lucide-react"

export function About() {
  return (
    <MotionSection className="py-24 px-4 relative" delay={0.2}>
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // ARCHITECTURAL DNA & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineering Systems That <span className="gradient-text">Never Fail</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Bridging enterprise-grade legacy stability with modern autonomous intelligence. High-throughput data cutovers, upgrade-safe ERP ecosystems, and autonomous AI agents.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Bento Card 1: Frappe & ERPNext Core Engine (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-2xl bg-[#0b0e18]/80 border border-cyan-500/25 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Core Engine</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">ERPNext &amp; Frappe Framework Architecture</h3>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              Leading end-to-end ERP implementations with strict adherence to <strong>zero core-code overrides</strong>. Architecting scalable Frappe apps, custom DocTypes, server-side Python event hooks, and client-side JavaScript controllers designed to safely survive upstream version upgrades.
            </p>

            {/* Architecture Node Visualizer Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.08] text-slate-300">
                <div className="text-cyan-400 font-bold mb-1">01 / HOOKS</div>
                <div className="text-[11px] text-slate-400">Server Python Hooks &amp; Async Tasks</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.08] text-slate-300">
                <div className="text-emerald-400 font-bold mb-1">02 / POS SYNC</div>
                <div className="text-[11px] text-slate-400">Multi-Store Retail &amp; Ledger Queue</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.08] text-slate-300">
                <div className="text-purple-400 font-bold mb-1">03 / UPGRADE</div>
                <div className="text-[11px] text-slate-400">100% Core-Isolated Customizations</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.08] text-slate-300">
                <div className="text-amber-400 font-bold mb-1">04 / REST APIs</div>
                <div className="text-[11px] text-slate-400">Fast High-Speed Interfacing</div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: 10M+ Oracle EBS Cutover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] hover:border-emerald-500/40 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Zero Downtime</span>
                  <h3 className="text-xl font-bold text-white">Oracle EBS Migration</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Migrated <strong>10,000,000+ records</strong> from Oracle EBS (10g/11g) to ERPNext. Authored high-speed SQL/PLSQL extraction scripts and schema mappings with 99.9% data integrity and uninterrupted enterprise reporting.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 100% Zero-Loss Cutover
              </span>
              <span className="text-slate-500">Oracle 10g/19c</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Autonomous AI & n8n Workflows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] hover:border-purple-500/40 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">AI Integration</span>
                  <h3 className="text-xl font-bold text-white">Autonomous LLM &amp; n8n Agents</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Automating business operations by chaining <strong>n8n workflow nodes</strong> with LLM agents. Classifying unstructured supplier invoices, automated purchase receipts, and real-time business telemetry into ERP DocTypes.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-purple-400 font-bold flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> 28+ Active Workflows
              </span>
              <span className="text-slate-500">LangChain • RAG</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Modern Full-Stack & DevOps (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Full-Stack Execution</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Python, Modern Web &amp; DevOps Pipelines</h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>Lahore • Muscat • Remote</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Engineering full-stack web platforms with <strong>FastAPI, Django, Next.js, and Three.js</strong>. Implementing production-grade Docker containerization, Linux daemon management, and automated GitHub Actions CI/CD to deliver zero-friction deployments.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {["Python (FastAPI / Django)", "JavaScript / TypeScript", "React & Next.js", "Docker Containerization", "GitHub Actions CI/CD", "Power BI Dashboards", "Linux Server Admin"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  )
}
