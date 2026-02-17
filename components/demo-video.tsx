"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { PlayIcon } from "@/components/icons/feature-icons"

export function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="w-full mx-auto px-4 z-10 relative">
      <div className="max-w-[52rem] w-full z-1 mx-auto border-x border-t border-tertiary rounded-t-2xl animate-fade-in relative gap-2 flex flex-col items-center justify-center overflow-hidden">
        <div
          className="flex z-10 flex-col gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="min-w-[calc(100%+2px)] translate-x-[-1px] bg-secondary h-fit flex flex-col items-center justify-center relative overflow-hidden rounded-t-2xl">
            {/* Hero Image */}
            <Image
              src="/capture-hero.png"
              alt="CaptureAI"
              width={4000}
              height={2250}
              className={`w-full h-auto object-cover transition-opacity duration-300 ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
              priority
            />

            {/* Video */}
            <video
              ref={videoRef}
              src="/V1.mp4"
              className={`w-full h-full ring-0 object-contain absolute inset-0 rounded-t-2xl transition-opacity duration-300 ${
                isPlaying ? "opacity-100" : "opacity-0"
              }`}
                            playsInline
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
            />

            {/* Play Button */}
            <button
              type="button"
              onClick={handlePlayClick}
              className="absolute cursor-pointer bottom-4 left-4 z-60 flex items-center justify-center gap-2 rounded-full bg-foreground/80 backdrop-blur-xl px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03] disabled:cursor-wait min-w-[120px]"
              aria-label={isPlaying ? "Pause demo" : "Play demo"}
            >
              <PlayIcon className="w-4 h-4 text-background" />
              <span>{isPlaying ? "Pause" : "Play Demo"}</span>
            </button>

            {/* Border overlay */}
            <div className="absolute inset-0 border border-foreground/15 rounded-t-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}
