import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Head from 'next/head'; // Import the Head component

export default function Home() {
  return (
    <>
      {/* Use the Head component for <head> content */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* FloatingNav should likely be outside the main content */}
      <FloatingNav />

      <main className="bg-background">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <ScrollReveal>
          <section id="about">
            <About />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="experience">
            <Experience />
          </section>
        </ScrollReveal>
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
      </main>
    </>
  );
}
