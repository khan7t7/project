"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import { Calendar, GraduationCap, MapPin } from "lucide-react"

export function Education() {
  return (
    <MotionSection className="py-20 px-4" delay={0.55}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text bubble-text">
          Education
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/70 gradient-border">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      BSc in Computer Science (16 Years Education)
                    </h3>
                    <p className="text-lg text-primary font-medium mt-1">
                      University of Faisalabad
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>2018 – 2022</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>Faisalabad, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-foreground/80 leading-relaxed border-t border-border/50 pt-4">
                <p>
                  Specialized in core computing tracks including Programming Fundamentals, Object-Oriented Programming, Data Structures &amp; Algorithms, and Relational Database Management Systems.
                </p>
                <p>
                  Completed advanced coursework in Software Engineering, Computer Networks, and Artificial Intelligence alongside a comprehensive final-year capstone application development project (Real-Time AI/ML Weapon Detection System).
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MotionSection>
  )
}
