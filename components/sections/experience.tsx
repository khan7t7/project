"use client"

import { Card } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import { BriefcaseIcon } from "lucide-react"
import { useEffect } from "react"

const experiences = [
   {
    title: "ERP Manager",
    company: "Radiant Medical Pvt Ltd",
    location: "Lahore",
    period: "Oct 2025 - Present",
    points: [
      "Created custom modifications using the Frappe Framework (server-side Python hooks, client-side JavaScript, and DocType) to meet evolving business requirements without core code overrides",
      "Conducted staff training on ERP features and best practices; improved system adoption",
      "Monitored performance and resolved critical technical issues with high SLA compliance",
      "Led ERP upgrades, enhancing UI/UX and reporting capabilities",
      "Designed data security and disaster recovery protocols",
      "Developed KPI dashboards and operational reports from ERP data"
    ]
  },
  {
    title: "Full-Stack Engineer | ERPNext Specialist",
    company: "Al Ansari Group LLC",
    location: "Oman",
    period: "Feb 2023 - Present",
    points: [
      "Led Erpnext development and AI integration, automating 50% of manual processes",
      "Integrated AI solutions to enhance system functionality and optimize organizational efficiency",
      "Migrated 10M+ records from Orion ERP to Erpnext, ensuring 99.9% data integrity",
      "Integrated Erpnext with Power BI, reducing data retrieval time by 70%",
      "Conducted monthly system audits, improving Erpnext performance by 25%"
    ]
  },
  {
    title: "Python Developer Intern",
    company: "Content Arcade Ltd",
    location: "Pakistan",
    period: "Nov 2022 - Jan 2023",
    points: [
      "Built dynamic front-end components with React & Next.js, improving UI responsiveness",
      "Developed APIs, Databases, and Websites"
    ]
  },
  {
    title: "SEO Specialist",
    company: "Software Bench Inc",
    location: "Pakistan",
    period: "Oct 2020 - Oct 2021",
    points: [
      "Successfully led SEO strategies for over eight websites, Improved rankings & organic traffic",
      "Executed email marketing and social media management initiatives",
      "Created content writing strategies to enhance brand visibility"
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
