"use client"

import { useState } from "react"
import { Menu, X, Music2, Code2, Palette, User, Search } from "lucide-react"
import type { Section } from "@/app/page"

interface MobileNavProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
  onOpenSearch: () => void
}

const sections = [
  { id: "spotify" as Section, label: "Spotify Case Studies", icon: Music2 },
  { id: "frontend" as Section, label: "Frontend Dev", icon: Code2 },
  { id: "ux" as Section, label: "UX Design", icon: Palette },
  { id: "about" as Section, label: "About Me", icon: User },
]

export function MobileNav({ activeSection, setActiveSection, onOpenSearch }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden flex items-center gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <button onClick={onOpenSearch} className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center">
        <Search className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-card border-b border-border p-4 z-50">
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id)
                  setIsOpen(false)
                }}
                className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                  activeSection === section.id ? "bg-secondary" : "hover:bg-secondary/50"
                }`}
              >
                <section.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
