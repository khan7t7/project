"use client"

import { Card } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "ERP & Integration",
    skills: [
      { name: "ERPNext (Core Focus)", level: 96, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Frappe Framework", level: 95, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "n8n Automation", level: 92, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "RESTful APIs", level: 93, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Legacy System Interfaces", level: 90, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Odoo (Functional)", level: 85, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" }
    ]
  },
  {
    name: "Business Modules",
    skills: [
      { name: "Retail & POS", level: 95, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Inventory & Stock Management", level: 94, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Buying & Procurement", level: 92, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Selling & CRM", level: 90, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Accounting & Finance", level: 88, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "HR & Payroll", level: 90, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" }
    ]
  },
  {
    name: "Oracle Stack & Tools",
    skills: [
      { name: "Oracle DB (10g, 11g, 12c, 19c)", level: 92, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "SQL / PLSQL", level: 94, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Oracle Forms & Reports (10g/12c)", level: 88, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Oracle EBS", level: 90, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Oracle APEX (Familiarity)", level: 82, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" }
    ]
  },
  {
    name: "AI & Data",
    skills: [
      { name: "RAG Agent Architecture", level: 92, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "LLM Workflows & Agents", level: 94, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Prompt Engineering", level: 93, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Business Intelligence (Power BI)", level: 90, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" }
    ]
  },
  {
    name: "Languages",
    skills: [
      { name: "Python (FastAPI, Django, Flask)", level: 95, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "JavaScript / TypeScript (Node.js, React)", level: 92, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "SQL / PLSQL", level: 94, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "PHP", level: 85, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "C++", level: 84, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" }
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "Full-Stack Architecture", level: 94, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "RESTful API Design", level: 95, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Next.js & Remix.js", level: 91, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Three.js (3D Graphics)", level: 86, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Single Page Apps (SPA) & Responsive UI/UX", level: 92, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" }
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Linux Server Administration", level: 91, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Docker Containerization", level: 90, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "GitHub Actions & CI/CD", level: 92, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "AWS", level: 86, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "Production Support & SLA Compliance", level: 93, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MariaDB", level: 93, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "PostgreSQL", level: 91, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "Oracle DB", level: 92, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" },
      { name: "Redis", level: 88, color: "from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]" },
      { name: "MongoDB", level: 86, color: "from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))]" },
      { name: "IndexedDB (Browser DB)", level: 85, color: "from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))]" }
    ]
  }
]

export function Skills() {
  return (
    <MotionSection className="py-20 px-4 relative overflow-hidden" delay={0.5}>
      <div className="absolute inset-0" />
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text bubble-text">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="p-4 gradient-border backdrop-blur-sm bg-background/70">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
