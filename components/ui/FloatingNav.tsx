"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'

interface NavItemProps {
  active: boolean
  label: string
  onClick: () => void
}

const NavItem = ({ active, label, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 relative ${
      active
        ? 'text-cyan-950 font-bold bg-cyan-400 shadow-md shadow-cyan-400/30'
        : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
    }`}
  >
    {label}
  </button>
)

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Architecture' },
    { id: 'experience', label: 'Career Log' },
    { id: 'skills', label: 'Tech Matrix' },
    { id: 'projects', label: 'Systems' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'contact', label: 'Terminal' }
  ]

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0,
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      {/* Desktop HUD Navigation */}
      <nav className="hidden md:flex items-center backdrop-blur-xl bg-[#090c15]/90 border border-cyan-500/25 rounded-full px-2 py-1.5 shadow-2xl shadow-black/80 gap-1">
        <div className="flex items-center pl-2 pr-1 text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
        </div>
        {sections.map(({ id, label }) => (
          <NavItem
            key={id}
            active={activeSection === id}
            label={label}
            onClick={() => scrollToSection(id)}
          />
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden backdrop-blur-xl bg-[#090c15]/90 border border-cyan-500/30 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5">
        {sections.slice(0, 3).map(({ id, label }) => (
          <NavItem
            key={id}
            active={activeSection === id}
            label={label}
            onClick={() => scrollToSection(id)}
          />
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger className="px-3 py-1.5 rounded-full text-xs font-mono text-cyan-300 hover:bg-white/[0.08] flex items-center gap-1">
            <Menu className="h-3.5 w-3.5" />
            <span>More</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#0b0e18] border-cyan-500/30 text-slate-200">
            {sections.slice(3).map(({ id, label }) => (
              <DropdownMenuItem
                key={id}
                onClick={() => scrollToSection(id)}
                className="font-mono text-xs cursor-pointer hover:text-cyan-300 focus:bg-cyan-500/15 focus:text-cyan-300"
              >
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  )
}

export { FloatingNav }
