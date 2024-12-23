import { About } from "@/components/sections/about"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}