"use client"

import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, ListMusic } from "lucide-react"

export function NowPlayingBar() {
  return (
    <footer className="h-20 md:h-24 bg-card border-t border-border px-4 flex items-center justify-between shrink-0">
      {/* Currently Playing */}
      <div className="flex items-center gap-3 w-1/4 min-w-0">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
          <span className="text-primary text-lg md:text-xl">🎵</span>
        </div>
        <div className="min-w-0 hidden sm:block">
          <p className="text-sm font-medium text-foreground truncate">Currently Viewing</p>
          <p className="text-xs text-muted-foreground truncate">Product Manager Portfolio</p>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-1 md:gap-2 flex-1 max-w-xl">
        <div className="flex items-center gap-3 md:gap-6">
          <button className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center hover:scale-105 transition-transform">
            <Play className="w-4 h-4 text-background fill-background ml-0.5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors">
            <Repeat className="w-4 h-4" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-2 w-full">
          <span className="text-xs text-muted-foreground">0:00</span>
          <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden group cursor-pointer">
            <div className="h-full w-1/3 bg-muted-foreground group-hover:bg-primary transition-colors rounded-full" />
          </div>
          <span className="text-xs text-muted-foreground">3:45</span>
        </div>
      </div>

      {/* Volume & Options */}
      <div className="hidden md:flex items-center gap-3 w-1/4 justify-end">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ListMusic className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <div className="w-24 h-1 bg-secondary rounded-full overflow-hidden group cursor-pointer">
            <div className="h-full w-2/3 bg-muted-foreground group-hover:bg-primary transition-colors rounded-full" />
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </footer>
  )
}
