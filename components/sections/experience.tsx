"use client"

import { Card } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import { BriefcaseIcon } from "lucide-react"

const experiences = [
  {
    title: "Full-Stack Engineer | Cloud Systems Admin",
    company: "Al Ansari Group LLC",
    location: "Oman",
    period: "Oct 2023 - Present",
    points: [
      "Managed system administration including ERPNext Systems, development tasks, and business processes",
      "Integrated AI solutions to enhance system functionality and optimize organizational efficiency",
      "Developed Python APIs and integrated machine learning models",
      "Provided comprehensive IT technical support and conducted user training sessions"
    ]
  },
  {
    title: "Python Developer Intern",
    company: "Content Arcade Ltd",
    location: "Pakistan",
    period: "Nov 2022 - Jan 2023",
    points: [
      "Focused on Python API development, API integration, and Ajax requests",
      "Developed APIs, Databases, and Websites"
    ]
  },
  {
    title: "SEO Specialist",
    company: "Software Bench Inc",
    location: "Pakistan",
    period: "Oct 2020 - Oct 2021",
    points: [
      "Managed link building, guest posting, and SEO optimization",
      "Executed email marketing and social media management initiatives",
      "Created content writing strategies to enhance brand visibility"
    ]
  }
]

export function Experience() {
  return (
    <MotionSection className="py-20 px-4" delay={0.4}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
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
