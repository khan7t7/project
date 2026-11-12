"use client"

import { MotionSection } from "@/components/ui/motion-section"
import { GithubIcon } from "@/components/ui/icons"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Boxes,
  Brain,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  LineChart,
  Server,
  Zap
} from "lucide-react"

interface ProjectItem {
  title: string
  subtitle: string
  client: string
  date: string
  metric: string
  metricLabel: string
  description: string
  architecturePoints: string[]
  tags: string[]
  icon: any
  gradient: string
  githubUrl?: string
}

const projects: ProjectItem[] = [
  {
    title: "Enterprise Retail POS & Intelligent ERPNext Engine",
    subtitle: "High-Throughput Multi-Store Synchronization",
    client: "LucrumX & Radiant Medical (Pvt) Ltd.",
    date: "Oct 2025 – Present",
    metric: "100%",
    metricLabel: "Core-Code Integrity",
    description: "Architected end-to-end retail implementation life cycles specializing in POS cash registers, automated barcode scanners, and inventory synchronization across distributed warehouses.",
    architecturePoints: [
      "Created server-side Python event hooks for DocType submission without overriding core source code.",
      "Engineered automated n8n workflows chaining LLM agents to parse unstructured supplier invoices into structured DocTypes.",
      "Reduced cashier reconciliation bottlenecks with real-time stock ledger journal posting."
    ],
    tags: ["ERPNext v15", "Frappe Framework", "Retail POS", "n8n AI Agents", "Python", "MariaDB"],
    icon: Code2,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    githubUrl: "https://github.com/khan7t7"
  },
  {
    title: "Oracle EBS (10g/11g) to ERPNext Cloud Migration",
    subtitle: "Zero-Downtime Data Cutover for 10M+ Records",
    client: "Al Ansari Group LLC (Muscat, Oman)",
    date: "Feb 2023 – Aug 2025",
    metric: "10,480,000+",
    metricLabel: "Records Migrated",
    description: "Spearheaded the complete data migration and legacy sunsetting from Oracle EBS to a modernized Frappe/ERPNext ecosystem with uninterrupted business reporting.",
    architecturePoints: [
      "Wrote custom high-performance SQL/PLSQL extraction scripts ensuring 99.9% data integrity.",
      "Maintained cross-system interfaces between Oracle Forms/Reports and modern web portals during phased transition.",
      "Engineered real-time Power BI reporting feeds directly from replicated staging databases."
    ],
    tags: ["Oracle EBS 10g/11g", "PL/SQL", "ERPNext", "Power BI", "REST APIs", "CI/CD"],
    icon: Database,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    githubUrl: "https://github.com/khan7t7"
  },
  {
    title: "Autonomous Real-Time Weapon Detection Vision System",
    subtitle: "Computer Vision & AI Surveillance Pipeline",
    client: "University of Faisalabad (Final-Year Capstone)",
    date: "2022",
    metric: "45 FPS",
    metricLabel: "Real-Time Inference",
    description: "Designed and engineered an automated deep learning computer vision model to identify concealed and brandished weapons across surveillance video feeds in real-time.",
    architecturePoints: [
      "Trained custom convolutional neural network (CNN) architectures leveraging OpenCV and YOLOv2.",
      "Engineered sub-50ms inference latency pipelines for instant automated threat dispatching.",
      "Awarded top honors for advanced application of AI in enterprise security."
    ],
    tags: ["Computer Vision", "YOLOv2", "OpenCV", "CNN", "Python", "Deep Learning"],
    icon: Brain,
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    githubUrl: "https://github.com/khan7t7"
  },
  {
    title: "High-Concurrency RESTful APIs & Cloud Microservices",
    subtitle: "Distributed API Engine for Web Applications",
    client: "Content Arcade Ltd",
    date: "Oct 2022 – Jan 2023",
    metric: "<80ms",
    metricLabel: "API Response Latency",
    description: "Engineered scalable RESTful API backends using FastAPI and Flask, managing asynchronous Ajax pipelines and PostgreSQL/Redis connection pooling.",
    architecturePoints: [
      "Built resilient caching layers with Redis to absorb sudden traffic spikes.",
      "Crafted dynamic front-end client components with React & Next.js for high user responsiveness.",
      "Structured comprehensive API documentation adhering to OpenAPI / Swagger specifications."
    ],
    tags: ["FastAPI", "Flask", "React", "Next.js", "PostgreSQL", "Redis", "Docker"],
    icon: Globe2,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    githubUrl: "https://github.com/khan7t7"
  }
]

export function Projects() {
  return (
    <MotionSection className="py-24 px-4 relative" delay={0.25}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[350px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Boxes className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // PRODUCTION CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Proven Systems in <span className="gradient-text">Live Production</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            A selection of mission-critical enterprise systems, legacy migrations, and AI-driven automation deployments.
          </p>
        </div>

        {/* Case Studies Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => {
            const Icon = proj.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-[#0b0e18]/85 border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 shadow-2xl"
              >
                {/* Top Subtle Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${proj.gradient} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Top Meta Line */}
                  <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-cyan-400 font-semibold">{proj.client}</div>
                        <div className="text-[11px] font-mono text-slate-500">{proj.date}</div>
                      </div>
                    </div>

                    {/* Metric Chip */}
                    <div className="text-right">
                      <div className="text-lg sm:text-xl font-extrabold font-mono text-white">
                        {proj.metric}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {proj.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors relative z-10">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-4 relative z-10">
                    // {proj.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 relative z-10">
                    {proj.description}
                  </p>

                  {/* Architecture Takeaways */}
                  <div className="space-y-2 mb-6 relative z-10 border-t border-white/[0.06] pt-4">
                    {proj.architecturePoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <Zap className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Stack & Actions */}
                <div className="pt-4 border-t border-white/[0.06] relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-400 group-hover:text-cyan-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/[0.1] hover:border-cyan-500/30 text-xs font-mono transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}
