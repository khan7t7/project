"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export function StickyHeader() {
  const { scrollYProgress } = useScroll({
    offset: ["85vh", "100vh"]
  })

  // Create smooth springs for our animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

  const smoothProgress = useSpring(scrollYProgress, springConfig)
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1])
  const y = useTransform(smoothProgress, [0, 1], [-20, 0])
  const scale = useTransform(smoothProgress, [0, 1], [0.95, 1])

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-sm z-40 flex items-center px-6 justify-between border-b border-border/40"
    >
      <motion.h1
        className="text-xl font-bold gradient-text"
        style={{ opacity }}
      >
        Mustafa Ahmad
      </motion.h1>
      <motion.p
        className="text-sm text-muted-foreground hidden md:block"
        style={{ opacity }}
      >
        Full-Stack Developer
      </motion.p>
    </motion.div>
  )
}
