"use state"

import { Play } from "lucide-react"
import { useState } from "react"

export interface Project {
  id: string
  title: string
  subtitle: string

  coverImage: string
  previewImage?: string

  color: string
  duration?: string
  problem: string
  users: string
  solution: string
  impact: string
  tags: string[]

  embedType?: "video" | "website" | "figma" | "image-link"
  embedUrl?: string
  linkUrl?: string

  section: string
}


export const allProjects: Project[] = [
  // Spotify projects
  {
    id: "short-form-mixes",
    title: "Mix & Match",
    subtitle: "Short-form discovery inspired by mixed-audio trends",
    coverImage: "/images/mix-and-match.png",
    color: "bg-gradient-to-br from-green-600 to-teal-800",
    duration: "1 week",
    problem:
      "Mixed audios are popular on platforms like TikTok because they expose listeners to multiple sounds quickly. On Spotify, discovery is slower and usually limited to one song at a time or long playlists.",
    users:
      "Listeners who enjoy discovering music through mixed audios and want a fast, low-effort way to hear more variety.",
    solution:
      "Designed short mixes that blend multiple songs into a single continuous audio experience. Each mix gives listeners a quick taste of several tracks while staying fully audio-first.",
    impact:
      "Educational case study explored how Spotify could lean into mixed-audio listening behaviors. Concept testing showed users found the experience more engaging and better suited for discovery than traditional playlists.",
    tags: ["Product Strategy", "User Research", "Discovery", "Concept Design"],
    embedType: "figma",
    embedUrl: 
    "https://www.figma.com/embed?embed_host=share&url=" + 
    encodeURIComponent("https://www.figma.com/proto/1CqSrlhdCmMCOn2x5uiMQm/spotify?node-id=20-4&t=SZe9NMUDJdWxktOw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=20%3A4"),
    section: "spotify",
  },

  // Frontend projects
  {
    id: "apex-consulting",
    title: "APEX Consulting",
    subtitle: "Website redesign for a student consulting organization",
    coverImage: "/images/apex.png",
    color: "bg-gradient-to-br from-blue-600 to-indigo-800",
    duration: "6 weeks",
    problem:
      "APEX did not have a strong website to clearly explain what it does, attract new members, or build trust with potential clients.",
    users:
      "Prospective consulting clients and students considering joining APEX.",
    solution:
      "Redesigned and built a clear, modern website that highlights past work, explains the member experience, and makes it easy to take action.",
    impact:
      "Attracted 1.4K+ unique visitors and increased click-through rates on call-to-action buttons by 28%.",
    tags: ["Next.js", "React", "Tailwind CSS", "UX"],
    embedType: "website",
    embedUrl: "https://www.apexconsulting.org/",
    section: "frontend",
  },

  {
    id: "foxeur",
    title: "Foxeur",
    subtitle: "Shopify redesign for a candle brand",
    coverImage: "/images/foxeur.png",
    previewImage: "/images/foxeur-cover.png",
    color: "bg-gradient-to-br from-amber-500 to-orange-700",
    duration: "4 weeks",
    problem:
      "Customers were leaving the site before completing purchases due to a cluttered layout and confusing shopping flow.",
    users:
      "Customers shopping for handmade candles who expect a calm, simple, and trustworthy experience.",
    solution:
      "Redesigned the Shopify interface to simplify navigation, improve product pages, and reduce friction throughout the shopping and checkout flow.",
    impact:
      "Reduced customer drop-off and bounce rates by making the shopping experience clearer and easier to complete.",
    tags: ["Shopify", "UX Design", "E-commerce", "Conversion"],
    embedType: "image-link",
    linkUrl: "https://foxeur.com/",
    section: "frontend",
  },

  {
    id: "product-motion",
    title: "Product Motion",
    subtitle: "Brand and website for a new product management club",
    coverImage: "/images/product-motion.png",
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    duration: "2 weeks",
    problem:
      "As a new student organization, Product Motion had no brand or online presence, making it hard for students to understand what the club was or why they should join.",
    users:
      "Aspiring product managers at UMich looking for community, resources, or events related to product management.",
    solution:
      "Designed the full brand system and website with a focus on visual appeal and simple navigation so students could quickly understand the mission and get involved.",
    impact:
      "Generated 200+ applications, creating the largest application pipeline since the organization was founded.",
    tags: ["Brand Design", "Web Design", "UX"],
    embedType: "website",
    embedUrl: "https://www.product-motion.com/",
    section: "frontend",
  },

  // UX projects
  {
    id: "pip",
    title: "Carpool Connect",
    subtitle: "Carpool marketplace built for the 2025 Product Innovation Program",
    coverImage: "/images/carpool-connect.png",
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    duration: "12 weeks",
    problem:
      "Many young adults feel overwhelmed or intimidated by financial tools, which makes it hard to build consistent habits.",
    users:
      "18–25 year olds entering the workforce and managing money on their own for the first time.",
    solution:
      "Designed a friendly, gamified experience with small lessons and challenges that make financial learning feel approachable.",
    impact:
      "Concept testing showed strong engagement and positive feedback around clarity and ease of use.",
    tags: ["Mobile Design", "Gamification", "User Research", "Figma"],
    embedType: "figma",
    embedUrl: 
    "https://www.figma.com/embed?embed_host=share&url=" + 
    encodeURIComponent("https://www.figma.com/proto/vg1cm5Vdj9tjOohfqBpnql/personal-pip-wireframes?node-id=1-286&p=f&t=hb6bzgKpZgwFPHkK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"),
    section: "ux",
  },

  {
    id: "elevate-empower",
    title: "Elevate & Empower",
    subtitle: "Functional health coaching platform",
    coverImage: "/images/elevate-and-empower.png",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    duration: "12 weeks",
    problem:
      "People interested in functional health often feel unsure or hesitant before committing to services they don’t fully understand, making it difficult for the client to onboard customers",
    users:
      "Individuals exploring functional health and wellness services for the first time who are interested in coaching services",
    solution:
      "Designed an  website mockup that explains functional health in simple terms and helps users feel comfortable engaging with services.",
    impact:
      "The mockup led to a second round of iteration, with plans to launch a production-ready site by January 2026.",
    tags: ["Web Design", "Education", "Accessibility", "Design Systems"],
embedType: "figma",
embedUrl:
  "https://www.figma.com/embed?embed_host=share&url=" +
  encodeURIComponent("https://www.figma.com/proto/HZ273H0VTARc4GAGQsdJ4E/elevate-and-empower?t=X4WdpjAS3cpm9WBZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=23-36&starting-point-node-id=23%3A36"),
section: "ux",
},
];

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-card hover:bg-secondary/50 rounded-lg p-4 transition-all duration-300 text-left w-full"
    >
      <div className="relative mb-4">
        <div
          className={`aspect-square rounded-md ${project.color} flex items-center justify-center overflow-hidden shadow-lg`}
        >
          <img src={project.coverImage || "/placeholder.svg"} alt={project.title} className="w-full h-full object-fit" />
        </div>
        <button
          className={`absolute bottom-2 right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } hover:scale-105`}
        >
          <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
        </button>
      </div>
      <h3 className="font-bold text-foreground mb-1 truncate">{project.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{project.subtitle}</p>
      <div className="flex flex-wrap gap-1 mt-3">
        {project.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}
