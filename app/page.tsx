import { About } from "@/components/sections/about"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { FloatingNav } from "@/components/ui/FloatingNav"
export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main className="bg-background">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section> <br /><FloatingNav /> </section>
      </main>
    </>
  )
}
