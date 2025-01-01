"use client"

import { Card } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certifications = [
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn"
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    issuer: "GitHub & LinkedIn"
  },
  {
    name: "DevOps Professional Certificate",
    issuer: "Microsoft & LinkedIn"
  },
  {
    name: "Python for Data Science",
    issuer: "Cognitive Class"
  },
  {
    name: "Career Essentials In Business Analysis",
    issuer: "PagerDuty and LinkedIn"
  },
  {
    name: "The Complete Frappe Framework & Erpnext Developer",
    issuer: "Upeosoft"
  }
]

export function Certifications() {
  return (
    <MotionSection className="py-20 px-4 bg-muted/30" delay={0.6}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text bubble-text">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
