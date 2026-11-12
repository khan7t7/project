"use client"

import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import {
  Binary,
  Bot,
  Briefcase,
  Boxes,
  Code2,
  Cpu,
  Database,
  Layers,
  Server,
  Workflow
} from "lucide-react"
import { useState } from "react"

interface SkillItem {
  name: string
  category: string
  tier: "ARCHITECT" | "SPECIALIST" | "CORE" | "SENIOR"
  context: string
  color: string
}

const skillsData: SkillItem[] = [
  // ERP & Frappe
  { name: "ERPNext (v14/v15)", category: "ERP & Frappe", tier: "ARCHITECT", context: "Full-lifecycle enterprise architecture & POS sync", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "Frappe Framework", category: "ERP & Frappe", tier: "ARCHITECT", context: "DocTypes, Python event hooks, client-side JS", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "n8n Workflow Automation", category: "ERP & Frappe", tier: "SPECIALIST", context: "Autonomous agent nodes & multi-system orchestration", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
  { name: "RESTful API Integration", category: "ERP & Frappe", tier: "CORE", context: "High-throughput secure data pipelines", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
  { name: "Legacy System Interfaces", category: "ERP & Frappe", tier: "SPECIALIST", context: "Cross-system bridge between ERP and legacy DBs", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  { name: "Odoo Functional", category: "ERP & Frappe", tier: "SENIOR", context: "Inventory, sales, and accounting workflows", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },

  // Oracle & Databases
  { name: "Oracle DB (10g–19c)", category: "Oracle & DBs", tier: "ARCHITECT", context: "Enterprise clustering, indexing, table optimization", color: "text-red-400 border-red-500/30 bg-red-500/10" },
  { name: "SQL & PL/SQL Extraction", category: "Oracle & DBs", tier: "ARCHITECT", context: "10M+ records zero-downtime cutover scripts", color: "text-red-400 border-red-500/30 bg-red-500/10" },
  { name: "Oracle Forms & Reports", category: "Oracle & DBs", tier: "SPECIALIST", context: "Interfacing legacy 10g/12c with modern dashboards", color: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
  { name: "Oracle EBS (10g/11g)", category: "Oracle & DBs", tier: "SPECIALIST", context: "GL, AR, AP, HR & statutory mapping logic", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
  { name: "MariaDB & PostgreSQL", category: "Oracle & DBs", tier: "CORE", context: "ERPNext backend tuning and microservice storage", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "Redis & MongoDB", category: "Oracle & DBs", tier: "CORE", context: "High-speed caching queues and document stores", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },

  // AI & Automation
  { name: "RAG Agent Architectures", category: "AI & Data", tier: "SPECIALIST", context: "Context-aware retrieval for business policies", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
  { name: "LLM Autonomous Workflows", category: "AI & Data", tier: "SPECIALIST", context: "Unstructured invoice parsing into DocTypes", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
  { name: "Prompt Engineering", category: "AI & Data", tier: "CORE", context: "Deterministic JSON schema generation for ERP", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "Power BI Intelligence", category: "AI & Data", tier: "ARCHITECT", context: "Real-time executive KPI dashboards & data streaming", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },

  // Languages & Web
  { name: "Python (FastAPI, Django, Flask)", category: "Languages & Web", tier: "ARCHITECT", context: "Enterprise microservices and Frappe hooks", color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10" },
  { name: "JavaScript / TypeScript", category: "Languages & Web", tier: "CORE", context: "Node.js backends and client-side controllers", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
  { name: "React & Next.js", category: "Languages & Web", tier: "SENIOR", context: "High-performance responsive portal frontends", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "Remix.js & Three.js", category: "Languages & Web", tier: "SPECIALIST", context: "Interactive 3D visuals and dynamic web engines", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
  { name: "PHP & C++", category: "Languages & Web", tier: "CORE", context: "Systems programming and legacy backend services", color: "text-slate-400 border-slate-500/30 bg-slate-500/10" },

  // Cloud & DevOps
  { name: "Linux Server Administration", category: "Cloud & DevOps", tier: "ARCHITECT", context: "Production hosting, daemon services, cron jobs", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  { name: "Docker Containerization", category: "Cloud & DevOps", tier: "SPECIALIST", context: "Multi-container ERPNext deployment stacks", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
  { name: "GitHub Actions CI/CD", category: "Cloud & DevOps", tier: "CORE", context: "Automated test suites, staging, and production rollouts", color: "text-slate-300 border-slate-500/30 bg-slate-500/10" },
  { name: "AWS Infrastructure", category: "Cloud & DevOps", tier: "SPECIALIST", context: "Cloud VM provisioning, S3 backups, VPC security", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
  { name: "Production Support & SLA", category: "Cloud & DevOps", tier: "ARCHITECT", context: "99.98% uptime adherence & 24/7 disaster recovery", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },

  // Business Modules
  { name: "Retail & POS Systems", category: "Business Modules", tier: "ARCHITECT", context: "Multi-branch store registers & offline sync", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "Inventory & Stock Control", category: "Business Modules", tier: "ARCHITECT", context: "Multi-warehouse valuations, batching & tracking", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  { name: "Buying & Procurement", category: "Business Modules", tier: "CORE", context: "Supplier quotations, POs, automated landed costs", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
  { name: "Accounting & Finance", category: "Business Modules", tier: "SPECIALIST", context: "General ledger, journal entries, reconciliation", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
  { name: "HR & Statutory Payroll", category: "Business Modules", tier: "CORE", context: "Salary structures, tax deduction rules, attendance", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" }
]

const categories = [
  "All Matrix",
  "ERP & Frappe",
  "Oracle & DBs",
  "AI & Data",
  "Languages & Web",
  "Cloud & DevOps",
  "Business Modules"
]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Matrix")

  const filteredSkills = selectedCategory === "All Matrix"
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory)

  return (
    <MotionSection className="py-24 px-4 relative" delay={0.25}>
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 // TECHNICAL PROFICIENCY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineered with <span className="gradient-text">Precision Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Practical, enterprise-proven capabilities refined through multi-million record migrations and high-availability enterprise environments.
          </p>
        </div>

        {/* Category Filter HUD */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                selectedCategory === cat
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-sm shadow-cyan-500/20"
                  : "bg-[#0b0e18]/80 text-slate-400 border-white/[0.08] hover:text-white hover:border-white/[0.2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.02 }}
              className="p-4 rounded-xl bg-[#0b0e18]/80 border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider shrink-0 ${skill.color}`}>
                  {skill.tier}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                {skill.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
