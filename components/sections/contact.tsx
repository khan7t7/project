"use client"

import { MotionSection } from "@/components/ui/motion-section"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Languages } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mustaffabro@gmail.com",
    link: "mailto:mustaffabro@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+968) 79818196",
    link: "tel:+96879818196"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Muscat, Oman"
  },
  {
    icon: Languages,
    label: "Languages",
    value: "English, Urdu, Arabic, Punjabi, Pashto, Hindi"
  }
]

export function Contact() {
  return (
    <MotionSection className="py-20 px-4 bg-muted/30" delay={0.8}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}