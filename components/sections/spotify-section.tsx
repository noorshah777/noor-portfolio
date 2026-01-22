"use client"

import { ProjectCard, type Project, allProjects } from "@/components/project-card"
import { Music2, Sparkles, Heart } from "lucide-react"

const spotifyProjects = allProjects.filter((p) => p.section === "spotify")

interface SpotifySectionProps {
  onSelectProject: (project: Project) => void
  likedProjects: string[]
  onToggleLike: (projectId: string) => void
}

export function SpotifySection({ onSelectProject, likedProjects, onToggleLike }: SpotifySectionProps) {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/30 via-primary/20 to-transparent p-6 md:p-8">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Music2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Case Study Collection</p>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground">Spotify Case Studies</h1>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Deep dives into Spotify product features I've conceptualized and designed. Each case study explores user
            problems, research insights, and measurable outcomes.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-sm text-muted-foreground">{spotifyProjects.length} case studies</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-primary" /> Featured work
            </span>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Projects Grid */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-foreground">Featured Case Studies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {spotifyProjects.map((project) => (
            <div key={project.id} className="relative group">
              <ProjectCard project={project} onClick={() => onSelectProject(project)} />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleLike(project.id)
                }}
                className="absolute top-2 right-2 p-2 rounded-full bg-background/50 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
              >
                <Heart
                  className={`w-4 h-4 ${
                    likedProjects.includes(project.id) ? "fill-primary text-primary" : "text-foreground"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
