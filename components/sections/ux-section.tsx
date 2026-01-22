"use client"

import { ProjectCard, type Project, allProjects } from "@/components/project-card"
import { Palette, Figma, Heart } from "lucide-react"

const uxProjects = allProjects.filter((p) => p.section === "ux")

interface UXSectionProps {
  onSelectProject: (project: Project) => void
  likedProjects: string[]
  onToggleLike: (projectId: string) => void
}

export function UXSection({ onSelectProject, likedProjects, onToggleLike }: UXSectionProps) {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-6 md:p-8">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
              <Palette className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Design Portfolio</p>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground">UX Design</h1>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            End-to-end UX design projects from research to high-fidelity prototypes. Human-centered design that solves
            real problems.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-sm text-muted-foreground">{uxProjects.length} projects</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Figma className="w-4 h-4 text-pink-400" /> Design work
            </span>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Projects Grid */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-foreground">Design Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {uxProjects.map((project) => (
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
