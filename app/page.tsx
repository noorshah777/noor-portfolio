"use client"

import { useState, Suspense } from "react"
import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { NowPlayingBar } from "@/components/now-playing-bar"
import { SearchModal } from "@/components/search-modal"
import { ProjectPlayer } from "@/components/project-player"
import type { Project } from "@/components/project-card"

export type Section = "spotify" | "frontend" | "ux" | "about"

function HomeContent() {
  const [activeSection, setActiveSection] = useState<Section>("spotify")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [likedProjects, setLikedProjects] = useState<string[]>([])

  const handleToggleLike = (projectId: string) => {
    setLikedProjects((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
  }

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onOpenSearch={() => setIsSearchOpen(true)}
          onSelectProject={handleSelectProject}
          likedProjects={likedProjects}
          onToggleLike={handleToggleLike}
        />
        <MainContent
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onSelectProject={handleSelectProject}
          likedProjects={likedProjects}
          onToggleLike={handleToggleLike}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      </div>
      <NowPlayingBar />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectProject={handleSelectProject} />

      {/* Project Player */}
      {selectedProject && <ProjectPlayer project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  )
}
