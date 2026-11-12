"use client"

import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  GitBranch,
  GitCommit,
  MapPin,
  Terminal
} from "lucide-react"

interface ExperienceItem {
  id: string
  commitHash: string
  title: string
  company: string
  location: string
  period: string
  status: string
  tags: string[]
  points: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: "lucrumx",
    commitHash: "feat(retail-pos): #8f2a91",
    title: "Senior Implementation Executive",
    company: "LucrumX",
    location: "Lahore, Pakistan",
    period: "Feb 2026 – May 2026",
    status: "Production Architecture",
    tags: ["ERPNext", "Retail POS", "Data Migration", "Frappe Architecture"],
    points: [
      "Leading end-to-end ERP implementation lifecycles, specializing in high-throughput Retail systems and POS modules to streamline front-end operations and multi-store inventory synchronization.",
      "Orchestrating complex data migration strategies, schema mapping, and cross-system integrations to guarantee seamless cutovers from legacy platforms into modern ERP environments.",
      "Configuring business-specific workflows in ERPNext, focusing on requirement gathering and automated reconciliation between retail cashiers and back-office accounting ledgers.",
      "Providing high-level technical consultancy on Frappe/ERPNext framework architecture to optimize enterprise throughput, database indexing, and system scalability."
    ]
  },
  {
    id: "radiant",
    commitHash: "feat(frappe-n8n): #c41e80",
    title: "ERP Manager",
    company: "Radiant Medical (Pvt) Ltd.",
    location: "Lahore, Pakistan (On-site: Oct 2025 – Jan 2026 | Remote: Feb 2026 – Mar 2026)",
    period: "Oct 2025 – Mar 2026",
    status: "Enterprise Lead",
    tags: ["Frappe Hooks", "n8n Automation", "LLM Agents", "SLA Compliance"],
    points: [
      "Created custom enterprise modifications using Frappe Framework (server-side Python hooks, client-side JavaScript controllers, and custom DocTypes) with strict zero-core code overrides.",
      "Engineered intelligent automation workflows with n8n to synchronize data between disparate database systems, integrating LLM-based autonomous agents to classify unstructured documents.",
      "Conducted company-wide staff training on ERP features and best practices, driving a dramatic increase in cross-departmental adoption.",
      "Led full-scale ERP upgrades and database optimizations, elevating UI/UX responsiveness and custom reporting while maintaining 99.9% SLA compliance for production uptime."
    ]
  },
  {
    id: "alansari",
    commitHash: "deploy(oracle-migration): #0a9d4e",
    title: "ERP Specialist & Full-Stack Engineer",
    company: "Al Ansari Group LLC",
    location: "Muscat, Oman",
    period: "Feb 2023 – Aug 2025",
    status: "10M+ Migration Lead",
    tags: ["Oracle EBS 10g/11g", "PL/SQL", "Frappe App", "Power BI", "CI/CD"],
    points: [
      "Developed a custom Frappe application to extend ERPNext functionality, enabling modular, upgrade-safe customizations aligned with enterprise business workflows.",
      "Authored 20+ custom RESTful APIs and connected n8n for complex workflow automation, utilizing AI nodes to eliminate repetitive manual accounting tasks.",
      "Led end-to-end data migration of 10M+ records from Oracle EBS (10g/11g environment) to ERPNext, writing custom SQL/PLSQL extraction scripts ensuring 99.9% data integrity and zero cutover downtime.",
      "Maintained cross-system interfaces between legacy components (Oracle Forms/Reports) and modern web dashboards to ensure uninterrupted business reporting.",
      "Integrated ERPNext with Power BI and engineered real-time executive dashboards, streamlining executive data retrieval and accelerating data-driven decisions.",
      "Owned the enterprise Git/GitHub repository workflow, enforcing automated CI/CD pipelines via GitHub Actions."
    ]
  },
  {
    id: "contentarcade",
    commitHash: "feat(fastapi-react): #5b3c19",
    title: "Python Developer",
    company: "Content Arcade Ltd",
    location: "Faisalabad, Pakistan",
    period: "Oct 2022 – Jan 2023",
    status: "Full-Stack Development",
    tags: ["FastAPI", "Flask", "PostgreSQL", "Redis", "Next.js"],
    points: [
      "Developed scalable RESTful APIs using Flask and FastAPI, engineered complex Ajax workflows, and optimized PostgreSQL/Redis relational databases.",
      "Built dynamic, high-performance UI components with React & Next.js for improved system responsiveness."
    ]
  },
  {
    id: "softwarebench",
    commitHash: "feat(seo-growth): #2f7e04",
    title: "SEO Specialist",
    company: "Software Bench Inc",
    location: "Faisalabad, Pakistan",
    period: "Oct 2020 – Oct 2021",
    status: "Digital Growth",
    tags: ["Technical SEO", "Organic Traffic", "Content Strategy", "Analytics"],
    points: [
      "Led technical SEO operations for 8+ client enterprise websites; boosted organic traffic, brand authority, and search engine visibility through data-driven technical optimization."
    ]
  }
]

export function Experience() {
  return (
    <MotionSection className="py-24 px-4 relative" delay={0.25}>
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 // PRODUCTION CAREER LOG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Battle-Tested <span className="gradient-text">Enterprise Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Track record of delivering enterprise-scale solutions across multinational corporate environments in Pakistan and Oman.
          </p>
        </div>

        {/* Timeline Log */}
        <div className="relative pl-6 sm:pl-10 border-l border-cyan-500/20 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Git Commit Node on timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#07090e] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30 group-hover:scale-125 transition-transform duration-300">
                <GitCommit className="w-3.5 h-3.5" />
              </div>

              {/* Log Card */}
              <div className="rounded-2xl bg-[#0b0e18]/80 border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl group-hover:shadow-cyan-950/30">
                {/* Meta Top Line */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-xs font-mono">
                  <span className="text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <Terminal className="w-3 h-3" /> {exp.commitHash}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.period}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-emerald-400 border border-emerald-500/20 font-semibold">
                      {exp.status}
                    </span>
                  </div>
                </div>

                {/* Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1 shrink-0 font-bold">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-xs font-mono">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/20 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
