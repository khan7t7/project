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
     <main className="bg-background min-h-screen">
  <section id="hero" className="min-h-screen">
    <Hero />
  </section>
  <section id="about" className="min-h-screen">
    <About />
  </section>
  <section id="experience" className="min-h-screen">
    <Experience />
  </section>
  <section id="skills" className="min-h-screen">
    <Skills />
  </section>
  <section id="projects" className="min-h-screen">
    <Projects />
  </section>
  <section id="certifications" className="min-h-screen">
    <Certifications />
  </section>
  <section id="contact" className="min-h-screen">
    <Contact />
  </section>
  <FloatingNav />
</main>
    </>
  )
}
