"use client"

import { useEffect, useRef } from "react"

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full relative ring bg-foreground/5 ring-foreground/10 ring-inset rounded-md overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        playsInline
        loop
        muted
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 rounded-md border border-foreground/20 z-10 pointer-events-none" />
    </div>
  )
}

export function VideoDemos() {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1">
        {/* Capture */}
        <div
          style={{ animationDelay: "0.1s" }}
          className="flex flex-col gap-6 px-6 md:px-10 py-10 opacity-0 animate-blur-fade-slide-in"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-foreground/30 tracking-wide">
              Capture
            </span>
            <h3 className="text-2xl font-medium tracking-tight md:text-2xl text-foreground">
              Press a shortcut. Capture anything.
            </h3>
          </div>
          <VideoPlayer src="/videos/capture.mp4" />
        </div>

        {/* Quick Search */}
        <div
          style={{ animationDelay: "0.1s" }}
          className="flex flex-col gap-6 px-6 md:px-10 py-10 opacity-0 border-t border-foreground/8 animate-blur-fade-slide-in"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-foreground/30 tracking-wide">
              Quick Search
            </span>
            <h3 className="text-2xl font-medium tracking-tight md:text-2xl text-foreground">
              Spotlight-style search. Find anything instantly.
            </h3>
          </div>
          <VideoPlayer src="/videos/quick-search.mp4" />
        </div>

        {/* Inbox First */}
        <div
          style={{ animationDelay: "0.1s" }}
          className="flex flex-col gap-6 px-6 md:px-10 py-10 opacity-0 border-t border-foreground/8 animate-blur-fade-slide-in"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-foreground/30 tracking-wide">
              Inbox First
            </span>
            <h3 className="text-2xl font-medium tracking-tight md:text-2xl text-foreground">
              Everything lands into your inbox first. Optional.
            </h3>
          </div>
          <VideoPlayer src="/videos/inbox.mp4" />
        </div>

        {/* Search by Filters */}
        <div
          style={{ animationDelay: "0.1s" }}
          className="flex flex-col gap-6 px-6 md:px-10 py-10 opacity-0 border-t border-foreground/8 animate-blur-fade-slide-in"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-foreground/30 tracking-wide">
              Search by Filters
            </span>
            <h3 className="text-2xl font-medium tracking-tight md:text-2xl text-foreground">
              Filter by type, date, and more.
            </h3>
          </div>
          <VideoPlayer src="/videos/search-filters.mp4" />
        </div>

        {/* In-App Web View */}
        <div
          style={{ animationDelay: "0.1s" }}
          className="flex flex-col gap-6 px-6 md:px-10 py-10 opacity-0 border-t border-foreground/8 animate-blur-fade-slide-in"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-foreground/30 tracking-wide">
              In-App Web View
            </span>
            <h3 className="text-2xl font-medium tracking-tight md:text-2xl text-foreground">
              Open and read links without leaving the app.
            </h3>
          </div>
          <VideoPlayer src="/videos/web-view.mp4" />
        </div>
      </div>
    </div>
  )
}
