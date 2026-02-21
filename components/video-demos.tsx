"use client"

import { useEffect, useRef, useState } from "react"

function VideoSection({
  label,
  title,
  src,
  showBorder = false
}: {
  label: string
  title: string
  src: string
  showBorder?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            video.play()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-6 px-6 md:px-10 py-10 ${showBorder ? "border-t border-foreground/8" : ""} ${
        isVisible ? "animate-blur-fade-slide-in" : "opacity-0"
      }`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-foreground/30 tracking-wide">
          {label}
        </span>
        <h3 className="text-2xl font-medium tracking-tight md:text-2xl text-foreground">
          {title}
        </h3>
      </div>
      <div className="w-full relative ring bg-foreground/5 ring-foreground/10 ring-inset rounded-md overflow-hidden transition-opacity duration-500 opacity-100">
        <video
          ref={videoRef}
          src={src}
          playsInline
          loop
          muted
          preload="auto"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 rounded-md border border-foreground/20 z-10" />
      </div>
    </div>
  )
}

export function VideoDemos() {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1">
        <VideoSection
          label="Capture"
          title="Press a shortcut. Capture anything."
          src="/videos/capture.mp4"
        />
        <VideoSection
          label="Quick Search"
          title="Spotlight-style search. Find anything instantly."
          src="/videos/quick-search.mp4"
          showBorder
        />
        <VideoSection
          label="Inbox First"
          title="Everything lands into your inbox first. Optional."
          src="/videos/inbox.mp4"
          showBorder
        />
        <VideoSection
          label="Search by Filters"
          title="Filter by type, date, and more."
          src="/videos/search-filters.mp4"
          showBorder
        />
        <VideoSection
          label="In-App Web View"
          title="Open and read links without leaving the app."
          src="/videos/web-view.mp4"
          showBorder
        />
      </div>
    </div>
  )
}
