"use client"

import { Card } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import { BriefcaseIcon } from "lucide-react"
import { useEffect } from "react"

const experiences = [
  {
    title: "Senior Implementation Executive",
    company: "LucrumX",
    location: "Lahore, Pakistan",
    period: "Feb 2026 – May 2026",
    points: [
      "Leading end-to-end ERP implementation life cycles, specializing in Retail systems and POS modules to streamline front-end operations and inventory synchronization.",
      "Orchestrating complex data migration strategies, schema mapping, and system integrations to ensure seamless transitions from legacy platforms to modern ERP environments.",
      "Configuring business-specific workflows in ERPNext, focusing on requirement gathering and alignment of retail business processes with automated back-office systems.",
      "Providing high-level technical consultancy on Frappe/ERPNext architecture to optimize enterprise workflows and enhance system scalability."
    ]
  },
  {
    title: "ERP Manager",
    company: "Radiant Medical (Pvt) Ltd.",
    location: "Lahore, Pakistan (On-site: Oct 2025 – Jan 2026 | Remote: Feb 2026 – Mar 2026)",
    period: "Oct 2025 – Mar 2026",
    points: [
      "Created custom modifications using the Frappe Framework (server-side Python hooks, client-side JavaScript, and DocTypes) without core code overrides.",
      "Engineered intelligent automation workflows using n8n to synchronize data between disparate database systems, integrating LLM-based agents to categorize unstructured inputs.",
      "Conducted staff training on ERP features and best practices; significantly improved system adoption rates.",
      "Led ERP upgrades and database optimizations, enhancing UI/UX and reporting capabilities while maintaining high SLA compliance for production support."
    ]
  },
  {
    title: "ERP Specialist & Full-Stack Engineer",
    company: "Al Ansari Group LLC",
    location: "Muscat, Oman",
    period: "Feb 2023 – Aug 2025",
    points: [
      "Developed a custom Frappe app to extend ERPNext functionality, enabling scalable, upgrade-safe customizations aligned with business workflows.",
      "Built custom RESTful APIs and integrated n8n for complex workflow automation, utilizing AI nodes to eliminate repetitive manual tasks.",
      "Led the end-to-end data migration from Oracle EBS (10g/11g environment) to ERPNext, writing custom SQL/PLSQL extraction scripts to ensure high data integrity and a zero-downtime cut-over.",
      "Maintained cross-system interfaces between legacy components (Oracle Forms/Reports) and new web dashboards to guarantee uninterrupted business reporting.",
      "Integrated ERPNext with Power BI and engineered real-time dashboards to streamline data retrieval and support data-driven business decisions.",
      "Owned the end-to-end Git/GitHub workflow, managing the enterprise repository and enforcing automated CI/CD pipelines via GitHub Actions."
    ]
  },
  {
    title: "Python Developer",
    company: "Content Arcade Ltd",
    location: "Faisalabad, Pakistan",
    period: "Oct 2022 – Jan 2023",
    points: [
      "Developed scalable APIs using Flask and FastAPI, handled Ajax workflows, and managed PostgreSQL/Redis relational databases.",
      "Built dynamic UI components with React & Next.js for improved system responsiveness."
    ]
  },
  {
    title: "SEO Specialist",
    company: "Software Bench Inc",
    location: "Faisalabad, Pakistan",
    period: "Oct 2020 – Oct 2021",
    points: [
      "Led SEO for 8+ client websites; boosted organic traffic via technical SEO, content strategy, and backlinking."
    ]
  }
]

export function Experience() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, {
      threshold: 0.1
    })

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])

  return (
    <MotionSection className="py-20 px-4" delay={0.4}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text bubble-text">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:text-left md:ml-auto md:mr-0'
              } md:w-1/2 w-full pl-12`}
            >
              {/* Timeline dot */}
              <div className={`absolute ${
                index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
              } left-0 -translate-x-1/2 top-0 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center`}>
                <BriefcaseIcon className="w-4 h-4 text-primary" />
              </div>

              <Card className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">{exp.title}</h3>
                <p className="text-muted-foreground mb-2">{exp.company} • {exp.location}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                <ul className={`list-disc ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'} ml-4 space-y-2`}>
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{point}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
