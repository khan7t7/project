"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LinkedinIcon, MailIcon, PhoneIcon, Terminal } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      {/* Tech Background */}
      <div className="absolute inset-0 tech-background grid-background" />

      {/* Floating Elements */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))] blur-3xl opacity-20 floating"
        style={{ top: '20%', left: '20%' }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-2))] to-[hsl(var(--gradient-3))] blur-3xl opacity-20 floating"
        style={{ bottom: '20%', right: '20%' }}
      />

      <div className="relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="/DP.png" // Make sure to add your profile image to the public folder
              alt="Mustafa Ahmad"
              fill
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
              priority
            />
          </div>
          <Terminal className="w-12 h-12 mx-auto text-primary mb-4" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
        >
          Mustafa Ahmad
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
        >
          Full-Stack Developer | ERPNext Expert | System Administrator | Gen AI Enthusiast
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
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
            mustaffabro@gmail.com
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
