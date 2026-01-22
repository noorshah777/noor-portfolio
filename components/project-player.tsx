"use client"

import { X, Target, Users, Lightbulb, TrendingUp, MonitorPlay, Clock, ExternalLink } from "lucide-react"
import type { Project } from "./project-card"

interface ProjectPlayerProps {
  project: Project
  onClose: () => void
}

export function ProjectPlayer({ project, onClose }: ProjectPlayerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={onClose} />

      <div className="relative bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-border shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header */}
          <div className="p-6 pb-4 flex flex-col sm:flex-row gap-6 bg-gradient-to-b from-secondary/30 to-transparent">
            <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-lg ${project.color} shrink-0 overflow-hidden shadow-xl`}>
              <img
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Case Study</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{project.title}</h1>
              <p className="text-muted-foreground text-sm mb-3">{project.subtitle}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-secondary rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.duration && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

{/* Demo Section */}
    {(project.embedUrl || project.linkUrl) && (
      <div className="px-6 pb-6">
        <div className="flex items-center gap-2 mb-3">
          <MonitorPlay className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-foreground">
            {project.embedType === "video"
              ? "Demo Video"
              : project.embedType === "figma"
                ? "Figma Prototype"
                : project.embedType === "image-link"
                  ? "Preview"
                  : "Live Website"}
          </h2>

          {(project.embedType === "website" || project.embedType === "image-link") && (project.embedUrl || project.linkUrl) && (
            <a
              href={project.embedUrl ?? project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-xs text-primary hover:underline flex items-center gap-1"
            >
              Open in new tab <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {project.embedType === "image-link" ? (
      <a
        href={project.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full overflow-hidden rounded-lg border border-border"
      >
        <img
          src={project.previewImage || "/placeholder.svg"}
          alt={`${project.title} preview`}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 flex items-center justify-center">
          <span className="opacity-0 transition-opacity group-hover:opacity-100 text-sm font-medium bg-background/90 px-3 py-1 rounded-full">
            View live site →
          </span>
        </div>
      </a>
    ) : (
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-black/50 border border-border">
        {project.embedType === "video" ? (
          <video className="w-full h-full" controls playsInline preload="metadata">
            <source src={project.embedUrl} />
          </video>
        ) : (
          <iframe
            src={project.embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    )}
  </div>
)}

          {/* Content Grid */}
          <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pain Points */}
            <div className="bg-secondary/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-red-400" />
                <h3 className="font-semibold text-foreground text-sm">User Pain Points</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
            </div>

            {/* Target Users */}
            <div className="bg-secondary/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-blue-400" />
                <h3 className="font-semibold text-foreground text-sm">Target Users</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.users}</p>
            </div>

            {/* Solution */}
            <div className="bg-secondary/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <h3 className="font-semibold text-foreground text-sm">Solution & Approach</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
            </div>

            {/* Impact */}
            <div className="bg-secondary/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground text-sm">Impact & Results</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
