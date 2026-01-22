"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, Music2, Code2, Palette, Clock } from "lucide-react"
import { allProjects, type Project } from "./project-card"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectProject: (project: Project) => void
}

export function SearchModal({ isOpen, onClose, onSelectProject }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredProjects = allProjects.filter((project) => {
    const searchLower = query.toLowerCase()
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.subtitle.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
      project.problem.toLowerCase().includes(searchLower) ||
      project.solution.toLowerCase().includes(searchLower)
    )
  })

  const getSectionIcon = (section?: string) => {
    switch (section) {
      case "spotify":
        return <Music2 className="w-4 h-4 text-primary" />
      case "frontend":
        return <Code2 className="w-4 h-4 text-blue-400" />
      case "ux":
        return <Palette className="w-4 h-4 text-pink-400" />
      default:
        return null
    }
  }

  const getSectionLabel = (section?: string) => {
    switch (section) {
      case "spotify":
        return "Spotify Case Study"
      case "frontend":
        return "Frontend Project"
      case "ux":
        return "UX Design"
      default:
        return "Project"
    }
  }

  // Recent searches (mock data)
  const recentSearches = ["Product Strategy", "React", "User Research", "E-commerce"]

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-card rounded-lg w-full max-w-2xl shadow-2xl border border-border overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to explore?"
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-lg"
          />
          {query && (
            <button onClick={() => setQuery("")} className="p-1 hover:bg-secondary rounded-full transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query === "" ? (
            <div className="p-4">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => setQuery(search)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors"
                  >
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    {search}
                  </button>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-muted-foreground mt-6 mb-3">Browse All</h3>
              <div className="space-y-1">
                {allProjects.slice(0, 5).map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      onSelectProject(project)
                      onClose()
                    }}
                    className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded ${project.color} overflow-hidden shrink-0`}>
                      <img src={project.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-foreground text-sm">{project.title}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        {getSectionIcon(project.section)}
                        {getSectionLabel(project.section)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="p-4">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                {filteredProjects.length} result{filteredProjects.length !== 1 ? "s" : ""}
              </h3>
              <div className="space-y-1">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      onSelectProject(project)
                      onClose()
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-secondary/50 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded ${project.color} overflow-hidden shrink-0`}>
                      <img src={project.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-foreground">{project.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{project.subtitle}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        {getSectionIcon(project.section)}
                        {getSectionLabel(project.section)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 max-w-[120px]">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No results found for "{query}"</p>
              <p className="text-sm text-muted-foreground mt-2">Try searching for project names, tags, or keywords</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
