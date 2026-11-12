"use client"

import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import { Award, BookOpen, Calendar, GraduationCap, MapPin, Sparkles } from "lucide-react"

export function Education() {
  return (
    <MotionSection className="py-24 px-4 relative" delay={0.25}>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 // ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Computer Science <span className="gradient-text">Degree</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#0b0e18]/85 border border-cyan-500/25 p-6 sm:p-8 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Top Glow */}
          <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Higher Education</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  BSc in Computer Science (16 Years Education)
                </h3>
                <p className="text-base text-cyan-300 font-medium mt-0.5">
                  University of Faisalabad
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col sm:items-end gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" /> 2018 – 2022
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Faisalabad, Pakistan
              </span>
            </div>
          </div>

          <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.08] pt-5">
            <p>
              Specialized in core computing tracks including <strong>Programming Fundamentals</strong>, <strong>Object-Oriented Programming</strong>, <strong>Data Structures &amp; Algorithms</strong>, and <strong>Relational Database Management Systems (RDBMS)</strong>.
            </p>
            <p>
              Completed advanced coursework in Software Engineering, Computer Networks, and Artificial Intelligence alongside a comprehensive final-year capstone application development project (Real-Time AI/ML Computer Vision Weapon Detection System).
            </p>
          </div>

          {/* Academic Highlights Chips */}
          <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono">
            {["Data Structures & Algorithms", "Relational Database Management (RDBMS)", "Object-Oriented Architecture", "Software Engineering", "Artificial Intelligence & Vision", "Computer Networks"].map((track, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300"
              >
                ✓ {track}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
