"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react"
import Image from "next/image"
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
          <div className="absolute inset-y-0 left-12 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
          <div className="absolute inset-y-0 left-24 w-[1px] bg-gradient-to-b from-transparent via-border/50 to-transparent" />
          <div className="absolute top-1/4 left-8 w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))] opacity-20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-16 w-24 h-24 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] opacity-15 blur-2xl floating-2" />
        </div>

        {/* Right Side Decoration */}
        <div className="fixed right-0 top-0 bottom-0 w-64 pointer-events-none">
          <div className="absolute inset-y-0 right-12 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
          <div className="absolute inset-y-0 right-24 w-[1px] bg-gradient-to-b from-transparent via-border/50 to-transparent" />
          <div className="absolute top-1/3 right-16 w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] opacity-20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-8 w-24 h-24 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-3))] to-[hsl(var(--gradient-1))] opacity-15 blur-2xl floating-1" />
        </div>

        {/* Background Grid Lines */}
        <div className="fixed inset-0 flex justify-between px-8 pointer-events-none opacity-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
          ))}
        </div>

        {/* Diagonal Lines */}
        <div className="fixed inset-0 pointer-events-none opacity-5">
          <div className="absolute -left-1/4 top-0 w-1/2 h-screen transform rotate-12 bg-gradient-to-b from-transparent via-border/20 to-transparent" />
          <div className="absolute -right-1/4 bottom-0 w-1/2 h-screen transform -rotate-12 bg-gradient-to-b from-transparent via-border/20 to-transparent" />
        </div>

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

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden" style={{
                clipPath: "polygon(50% 0%, 100% 75%, 0% 75%)"
              }}>
                <Image
                  src="/DP.jpg"
                  alt="Mustafa Ahmad - Full-Stack Developer"
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                  loading="eager"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true)
                    console.error('Failed to load image')
                  }}
                  className={cn(
                    "object-cover transition-transform duration-500 hover:scale-105",
                    !imageLoaded && "blur-sm"
                  )}
                />
              </div>
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
                Full-Stack Developer | Gen AI Enthusiast | ERPNext Expert | System Administrator
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
