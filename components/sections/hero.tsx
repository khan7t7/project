"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { LinkedinIcon, MailIcon, PhoneIcon, Terminal } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

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

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[100vh] flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))] blur-3xl opacity-20 floating-1"
        style={{ top: '20%', left: '20%' }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] blur-3xl opacity-20 floating-2"
        style={{ bottom: '20%', right: '20%' }}
      />
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))] blur-3xl opacity-10 floating-3"
        style={{ top: '40%', right: '30%' }}
      />

      <div className="relative">
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

            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/DP.png"
                alt="Mustafa Ahmad"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          <Terminal className="w-12 h-12 mx-auto text-primary mb-4 animate-float" />
        </motion.div>

        <div className="sticky top-4">
          <motion.h1
            style={{
              scale: nameScale,
              x: nameX,
              opacity: nameOpacity
            }}
            className="text-4xl md:text-6xl font-bold mb-4 gradient-text bubble-text"
          >
            Mustafa Ahmad
          </motion.h1>

          <motion.p
            style={{
              x: taglineX,
              opacity: taglineOpacity
            }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl bubble-text"
          >
            Full-Stack Developer | ERPNext Expert | System Administrator | Gen AI Enthusiast
          </motion.p>
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
  )
}
