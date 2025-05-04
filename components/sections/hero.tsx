"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react"
import { useRef, useState } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const nameScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7])
  const nameX = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const taglineX = useTransform(scrollYProgress, [0, 0.3], [0, 50])
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="relative w-full">
      <motion.section
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[100vh] flex flex-col justify-center items-center text-center relative overflow-hidden"
      >
        {/* Left Side Decoration */}
        <div className="fixed left-0 top-0 bottom-0 w-64 pointer-events-none">
          <div className="absolute top-1/4 left-8 w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))] opacity-20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-16 w-24 h-24 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] opacity-15 blur-2xl floating-2" />
        </div>

        {/* Right Side Decoration */}
        <div className="fixed right-0 top-0 bottom-0 w-64 pointer-events-none">
          <div className="absolute top-1/3 right-16 w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] opacity-20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-8 w-24 h-24 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))] opacity-15 blur-2xl floating-1" />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="mb-6"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-1))] via-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] animate-pulse-slow opacity-50 blur-2xl" />


            </div>
          </motion.div>

          <div className="relative top-4">
            <motion.div
              style={{
                scale: nameScale,
                x: nameX,
                opacity: nameOpacity
              }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold gradient-text bubble-text">
                Mustafa Ahmad
              </h1>
            </motion.div>

            <motion.div
              style={{
                x: taglineX,
                opacity: taglineOpacity
              }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl bubble-text">
                Full-Stack Software Engineer | ERPNext Techno-Functional Specialist | Gen AI Enthusiast
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <Button variant="outline" size="lg" asChild className="gradient-border">
              <a href="https://linkedin.com/in/khan777" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gradient-border">
              <MailIcon className="mr-2 h-5 w-5" />
              mustafak.direct@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="gradient-border">
              <PhoneIcon className="mr-2 h-5 w-5" />
              (+968) 79818196
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
