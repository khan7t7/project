"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

interface NavItemProps {
  active: boolean
  label: string
  onClick: () => void
}

const NavItem = ({ active, label, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full transition-all duration-300 ${
      active
        ? 'bg-primary text-primary-foreground'
        : 'hover:bg-primary/10'
    }`}
  >
    {label}
  </button>
)

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  });

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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex backdrop-blur-sm bg-background/30 border border-border/50 rounded-full px-4 py-2 shadow-lg gap-2">
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
      <nav className="md:hidden backdrop-blur-sm bg-background/30 border border-border/50 rounded-full px-4 py-2 shadow-lg flex gap-2">
        {sections.slice(0, 3).map(({ id, label }) => (
          <NavItem
            key={id}
            active={activeSection === id}
            label={label}
            onClick={() => scrollToSection(id)}
          />
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2 rounded-full hover:bg-primary/10">
            <Menu className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {sections.slice(3).map(({ id, label }) => (
              <DropdownMenuItem key={id} onClick={() => scrollToSection(id)}>
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
