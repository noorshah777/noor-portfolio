"use client"

import { Home, Search, Library, Plus, Heart, Music2, Code2, Palette, User, Pin } from "lucide-react"
import { useState } from "react"
import type { Section } from "@/app/page"
import { allProjects, type Project } from "./project-card"
import { moreAboutMeItems } from "./sections/about-section"

interface SidebarProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
  onOpenSearch: () => void
  onSelectProject: (project: Project) => void
  likedProjects: string[]
  onToggleLike: (projectId: string) => void
}

const sections = [
  { id: "spotify" as Section, label: "Spotify Case Studies", icon: Music2, color: "text-primary" },
  { id: "frontend" as Section, label: "Frontend Dev", icon: Code2, color: "text-blue-400" },
  { id: "ux" as Section, label: "UX Design", icon: Palette, color: "text-pink-400" },
  { id: "about" as Section, label: "About Me", icon: User, color: "text-amber-400" },
]

type LibraryFilter = "all" | "playlists" | "projects" | "liked"

export function Sidebar({
  activeSection,
  setActiveSection,
  onOpenSearch,
  onSelectProject,
  likedProjects,
  onToggleLike,
}: SidebarProps) {
  const [libraryFilter, setLibraryFilter] = useState<LibraryFilter>("all")
  const [pinnedSections, setPinnedSections] = useState<Section[]>(["spotify"])

  const togglePin = (sectionId: Section) => {
    setPinnedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const likedProjectsList = allProjects.filter((p) => likedProjects.includes(p.id))
  const likedMoreAboutMe = moreAboutMeItems.filter((item) => likedProjects.includes(item.id))
  const liked = [...likedProjectsList, ...likedMoreAboutMe]

  // Filter library items based on selected filter
  const getFilteredItems = () => {
    switch (libraryFilter) {
      case "playlists":
        return sections
      case "projects":
        return allProjects
      case "liked":
        return liked
      default:
        return sections
    }
  }

  return (
    <aside className="hidden md:flex flex-col w-64 lg:w-72 bg-sidebar p-2 gap-2 shrink-0">
      {/* Top Navigation */}
      <div className="bg-card rounded-lg p-4">
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActiveSection("spotify")}
            className="flex items-center gap-4 text-foreground font-semibold hover:text-foreground transition-colors"
          >
            <Home className="w-6 h-6" />
            <span>Home</span>
          </button>
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="w-6 h-6" />
            <span>Search</span>
          </button>
        </nav>
      </div>

      {/* Library / Portfolio Sections */}
      <div className="bg-card rounded-lg p-4 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <Library className="w-6 h-6" />
            <span className="font-semibold">Your Library</span>
          </div>
          <button className="p-1 hover:bg-secondary rounded-full transition-colors">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          <button
            onClick={() => setLibraryFilter("all")}
            className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
              libraryFilter === "all"
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setLibraryFilter("playlists")}
            className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
              libraryFilter === "playlists"
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            Sections
          </button>
          <button
            onClick={() => setLibraryFilter("liked")}
            className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
              libraryFilter === "liked"
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            Liked
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-1">
          {libraryFilter === "liked" ? (
            liked.length > 0 ? (
              <>
                {likedProjectsList.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded ${project.color} overflow-hidden shrink-0`}>
                      <img src={project.coverImage || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{project.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{project.subtitle}</p>
                    </div>
                  </button>
                ))}
                {likedMoreAboutMe.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection("about")}
                    className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded bg-gradient-to-br ${item.gradient} overflow-hidden shrink-0`}>
                      <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
                    </div>
                  </button>
                ))}
              </>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">No liked items yet</p>
            )
          ) : (
            <>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded-md transition-colors group ${
                    activeSection === section.id ? "bg-secondary" : "hover:bg-secondary/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded flex items-center justify-center bg-gradient-to-br from-secondary to-card ${section.color}`}
                  >
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm text-foreground">{section.label}</p>
                    <p className="text-xs text-muted-foreground">Portfolio Section</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePin(section.id)
                    }}
                    className={`p-1 rounded transition-opacity ${
                      pinnedSections.includes(section.id)
                        ? "opacity-100 text-primary"
                        : "opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Pin className="w-4 h-4" />
                  </button>
                </button>
              ))}

              <button
                onClick={() => setLibraryFilter("liked")}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded flex items-center justify-center bg-gradient-to-br from-indigo-800 to-indigo-400">
                  <Heart className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm text-foreground">Liked Items</p>
                  <p className="text-xs text-muted-foreground">{liked.length} {liked.length === 1 ? 'item' : 'items'}</p>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  )
}
