"use client"

import { SpotifySection } from "@/components/sections/spotify-section"
import { FrontendSection } from "@/components/sections/frontend-section"
import { UXSection } from "@/components/sections/ux-section"
import { AboutSection } from "@/components/sections/about-section"
import { ChevronLeft, ChevronRight, Bell, User } from "lucide-react"
import type { Section } from "@/app/page"
import { MobileNav } from "@/components/mobile-nav"
import type { Project } from "./project-card"

interface MainContentProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
  onSelectProject: (project: Project) => void
  likedProjects: string[]
  onToggleLike: (projectId: string) => void
  onOpenSearch: () => void
}

export function MainContent({
  activeSection,
  setActiveSection,
  onSelectProject,
  likedProjects,
  onToggleLike,
  onOpenSearch,
}: MainContentProps) {
  return (
    <main className="flex-1 bg-gradient-to-b from-card via-background to-background overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 sticky top-0 bg-card/80 backdrop-blur-sm z-10">
        <div className="flex items-center gap-2">
          <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} onOpenSearch={onOpenSearch} />
          <button className="hidden md:flex w-8 h-8 rounded-full bg-secondary/80 items-center justify-center hover:bg-secondary transition-colors">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button className="hidden md:flex w-8 h-8 rounded-full bg-secondary/80 items-center justify-center hover:bg-secondary transition-colors">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1vWNLMvpvEKsPdHVTOJZ_LMBVlc7GP-mc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-4 py-2 bg-foreground text-background rounded-full text-sm font-semibold hover:scale-105 transition-transform"
          >
            Download Resume
            </a>
          <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform">
            <User className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </header>

      {/* Dynamic Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {activeSection === "spotify" && (
          <SpotifySection onSelectProject={onSelectProject} likedProjects={likedProjects} onToggleLike={onToggleLike} />
        )}
        {activeSection === "frontend" && (
          <FrontendSection
            onSelectProject={onSelectProject}
            likedProjects={likedProjects}
            onToggleLike={onToggleLike}
          />
        )}
        {activeSection === "ux" && (
          <UXSection onSelectProject={onSelectProject} likedProjects={likedProjects} onToggleLike={onToggleLike} />
        )}
        {activeSection === "about" && <AboutSection likedProjects={likedProjects} onToggleLike={onToggleLike} />}
      </div>
    </main>
  )
}
