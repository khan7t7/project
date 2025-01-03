"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function MotionSection({ children, className, delay = 0 }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className={cn("py-20 px-4", className)}
    >
      {children}
    </motion.section>
  )
}
