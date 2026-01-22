"use client"

import {
  User,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Coffee,
  Camera,
  Music,
  Plane,
  PartyPopper, 
  PiggyBank, 
  Hand,
  ChevronLeft,
  ChevronRight,
  Play,
  X
} from "lucide-react"
import { useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

type AboutTab = "bio" | "timeline" | "scrapbook"

const timeline = [
  {
    year: "Aug 2025 – Present",
    role: "Founder & CEO",
    company: "Catalyst Digital",
    description:
      "Founded and scaled a freelance web development studio, leading end-to-end product delivery from discovery to launch. Drove Agile sprints, UX experimentation, and analytics-informed iteration across 4 client launches, reaching 8.5K+ users and improving conversion and engagement metrics.",
    icon: Briefcase,
  },
  {
    year: "May 2025 – Aug 2025",
    role: "Product Management Intern",
    company: "Vertiv",
    description:
      "Led multiple 0-to-1 product initiatives within Vertiv’s digital commerce and infrastructure portfolio, including an automated e-commerce sizing tool that recovered $28.8K in annual revenue and a SmartAisle GTM strategy that supported a $450K enterprise deal.",
    icon: Briefcase,
  },
  {
    year: "Jan 2025 – Apr 2025",
    role: "Machine Learning Engineer",
    company: "Rivian",
    description:
      "Built and productionized predictive ML models to improve part cost and lead-time forecasting, analyzing 110K+ data rows and aligning engineering, operations, and data teams on model adoption, increasing confidence in forecasts by 35%.",
    icon: Briefcase,
  },
  {
    year: "Sept 2024 – Present",
    role: "Project Manager & Lead Frontend Developer",
    company: "APEX Consulting Group",
    description:
      "Spearheaded 0-to-1 redesign of APEX’s digital presence by re-architecting information hierarchy, CTAs, and frontend implementation in Next.js, driving 1.4K+ unique visitors and a 28% lift in call-to-action click-through rates.",
    icon: Heart,
  },
  {
    year: "Jan 2025 – Apr 2025",
    role: "Product Manager",
    company: "Product Innovation Program",
    description:
      "Led a cross-functional team to design a B2B intern carpool marketplace, translating 85+ user interviews into personas, core journeys, and a 52-screen Figma MVP, while optimizing matching logic to reduce time-to-match by 46%.",
    icon: Heart,
  },
  {
    year: "Sept 2023 – Present",
    role: "Vice President of Client Relations",
    company: "Michigan Advertising & Marketing Club",
    description:
      "Managed client relationships and delivery across multiple consulting teams, setting expectations, resolving conflicts, and ensuring on-time execution of 17+ marketing assets for Ann Arbor–based businesses.",
    icon: Heart,
  },
  {
    year: "2023 – 2027",
    role: "BBA & B.A. in Computer Science",
    company: "University of Michigan",
    description:
      "Dual-degree student studying business and computer science, with a focus on digital product design, backend systems, and data-driven decision-making",
    icon: GraduationCap,
  },
];


const scrapbookItems = [
  { icon: PartyPopper, label: "Balloon animal twister", color: "text-amber-500" },
  { icon: PiggyBank, label: "Adament secondhand shopper", color: "text-blue-400" },
  { icon: Hand, label: "Press on nail enthusiast", color: "text-primary" },
  { icon: Camera, label: "Amateur photographer", color: "text-cyan-400" },
]

interface MoreAboutMeItem {
  id: string
  title: string
  subtitle: string
  image: string
  gradient: string
  description: string
  details: string[]
}

export const moreAboutMeItems: MoreAboutMeItem[] = [
  {
    id: "more-about-me-pluto",
    title: "Pluto on Repeat",
    subtitle: "7 years together",
    image: "/images/pluto.png",
    gradient: "from-amber-500/20 to-orange-600/20",
    description:
      "Pluto’s been with me for seven years and is usually somewhere near my desk. Sleeps a lot, shows up at the worst times, and somehow makes everything better.",
    details: [
      "Adopted 7 years ago",
      "Always finds the warmest spot",
      "Makes biscuits when it matters",
      "Sits directly on my laptop"
    ],
  },
  {
    id: "more-about-me-pinterest",
    title: "Saved for No Reason",
    subtitle: "very organized chaos",
    image: "/images/pinterest.PNG",
    gradient: "from-red-500/20 to-pink-600/20",
    description:
      "My Pinterest is mostly personal and extremely specific. Everything is color-coded, from jewelry ideas to full aesthetic boards for events that may or may not ever happen.",
    details: [
      "Color-coded boards",
      "Jewelry and accessory inspo",
      "Outfit ideas I won’t forget",
      "Aesthetic boards for every event"
    ],
  },
  {
    id: "more-about-me-fashion",
    title: "What I’m Wearing",
    subtitle: "thinking through clothes",
    image: "/images/fashion.JPG",
    gradient: "from-purple-500/20 to-indigo-600/20",
    description:
      "I treat outfits as another creative outlet. I like playing with proportion, texture, and small details more than following trends.",
    details: [
      "Mixing silhouettes",
      "Secondhand finds",
      "Details over trends",
      "Outfits that feel intentional"
    ],
  },
  {
    id: "more-about-me-food",
    title: "Food > Cooking",
    subtitle: "strong opinions, weak skills",
    image: "/images/food.JPG",
    gradient: "from-emerald-500/20 to-teal-600/20",
    description:
      "I really love food and think about it constantly. Unfortunately, I am a terrible cook, so this usually means trying new places or unsuccessfully recreating things I liked.",
    details: [
      "Loves food",
      "Bad at cooking",
      "Attempts recipes anyway",
      "Always down to try a new spot"
    ],
  },
]

function MoreAboutMePlayer({ 
  item, 
  onClose, 
  isLiked, 
  onToggleLike 
}: { 
  item: MoreAboutMeItem
  onClose: () => void
  isLiked: boolean
  onToggleLike: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative bg-card rounded-xl max-w-2xl w-full max-h-[85vh] overflow-hidden border border-border shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[85vh]">
          {/* Header - Spotify Now Playing Style */}
          <div className={`p-8 pb-6 bg-gradient-to-b ${item.gradient} to-transparent`}>
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end">
              <div className={`w-48 h-48 sm:w-56 sm:h-56 rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br ${item.gradient} shrink-0`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-end text-center sm:text-left">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Personal Collection</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{item.title}</h1>
                <p className="text-muted-foreground text-base mb-4">{item.subtitle}</p>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      onToggleLike()
                    }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-105 ${
                      isLiked
                        ? "border-red-400 bg-red-400/10"
                        : "border-foreground/30 hover:border-foreground"
                    }`}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors ${
                        isLiked 
                          ? "text-red-400 fill-red-400" 
                          : "text-foreground"
                      }`} 
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <div>
              <h2 className="font-semibold text-lg text-foreground mb-3">About</h2>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg text-foreground mb-3">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg border border-border/50"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MoreAboutMeCarouselProps {
  likedProjects: string[]
  onToggleLike: (itemId: string) => void
}

function MoreAboutMeCarousel({ likedProjects, onToggleLike }: MoreAboutMeCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<MoreAboutMeItem | null>(null)

  const scrollPrev = () => {
    emblaApi?.scrollPrev()
  }

  const scrollNext = () => {
    emblaApi?.scrollNext()
  }

  const handleCardClick = (item: MoreAboutMeItem) => {
    setSelectedItem(item)
  }

  return (
    <>
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" /> More About Me
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 hover:scale-105 transition-all cursor-pointer text-foreground shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 hover:scale-105 transition-all cursor-pointer text-foreground shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {moreAboutMeItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-[0_0_calc(100%-1rem)] sm:flex-[0_0_calc(50%-0.5rem)] lg:flex-[0_0_calc(33.333%-0.667rem)] min-w-0 relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onToggleLike(item.id)
                    }}
                    className="absolute top-2 right-2 z-10 p-2 rounded-full bg-background/50 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedProjects.includes(item.id) ? "fill-primary text-primary" : "text-foreground"
                      }`}
                    />
                  </button>
                  
                  <div 
                    onClick={() => handleCardClick(item)}
                    className="bg-secondary/30 hover:bg-secondary/50 rounded-lg p-4 transition-all duration-300 cursor-pointer h-full border border-border/50 hover:border-border hover:shadow-lg active:scale-[0.98]"
                  >
                    {/* Album Cover with Play Button */}
                    <div className="relative mb-4">
                      <div className={`aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-[1.02]`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      {/* Play Button Overlay */}
                      <div
                        className={`absolute bottom-3 right-3 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl transition-all duration-300 ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-2 scale-95"
                        } group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 hover:scale-110`}
                      >
                        <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
                      </div>
                    </div>
                    
                    {/* Title & Subtitle */}
                    <div>
                      <h4 className="font-bold text-base text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spotify-themed Player Modal */}
      {selectedItem && (
        <MoreAboutMePlayer 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)}
          isLiked={likedProjects.includes(selectedItem.id)}
          onToggleLike={() => onToggleLike(selectedItem.id)}
        />
      )}
    </>
  )
}

interface AboutSectionProps {
  likedProjects: string[]
  onToggleLike: (itemId: string) => void
}

export function AboutSection({ likedProjects, onToggleLike }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<AboutTab>("bio")

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent p-6 md:p-8">
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shrink-0">
            <User className="w-12 h-12 md:w-16 md:h-16 text-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Nice to meet you, I'm </p>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Noor</h1>
            <p className="text-lg text-primary font-medium mb-3">Student + Product Manager</p>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
                  I've always been the type of person who loves tend to dabble in a bit of everything, and that’s what I love most about PM. I have experience in everything from UX design, frontend development, strategy consulting, and marketing, which lets me move fluidly between users, data, and 
                  engineering. 
            </p>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Hudson, OH
              </span>
              <a
                href="mailto:noorshah@umich.edu"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/noor-u-shah/"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/noorshah777"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("bio")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "bio" ? "bg-foreground text-background" : "bg-secondary text-foreground hover:bg-secondary/80"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("timeline")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "timeline"
              ? "bg-foreground text-background"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          }`}
        >
          Resume Timeline
        </button>
        <button
          onClick={() => setActiveTab("scrapbook")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "scrapbook"
              ? "bg-foreground text-background"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          }`}
        >
          Scrapbook
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "bio" && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="font-bold text-lg mb-4 text-foreground">What I Do</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Define product vision and strategy aligned with business goals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Lead user research and translate insights into features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Partner with engineering and design to ship high-quality products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Drive growth through experimentation and data analysis</span>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="font-bold text-lg mb-4 text-foreground">Skills & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Product Strategy",
                "User Research",
                "A/B Testing",
                "SQL",
                "Figma",
                "Jira",
                "Data Analysis",
                "Roadmapping",
                "Agile/Scrum",
                "PRDs",
                "OKRs",
                "Stakeholder Management",
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "timeline" && (
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-4 md:gap-6 pl-2">
                <div className="relative z-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="flex-1 bg-card rounded-lg p-4 md:p-6 border border-border">
                  <span className="text-xs text-primary font-medium">{item.year}</span>
                  <h3 className="font-bold text-foreground mt-1">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "scrapbook" && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scrapbookItems.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border text-center hover:bg-secondary/50 transition-colors"
              >
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                <p className="text-sm text-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <MoreAboutMeCarousel likedProjects={likedProjects} onToggleLike={onToggleLike} />

        </div>
      )}
    </div>
  )
}
