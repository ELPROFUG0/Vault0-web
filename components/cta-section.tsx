"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AppleIcon } from "@/components/icons/apple-icon"

export function CTASection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 md:px-8 py-20">
      <h2
        style={{ animationDelay: "0.1s" }}
        className="text-3xl md:text-4xl text-balance text-center leading-tight tracking-tight text-foreground opacity-0 animate-blur-fade-slide-in font-serif"
      >
        Start capturing what matters.
      </h2>
      <div
        style={{ animationDelay: "0.3s" }}
        className="flex flex-col gap-3 items-center opacity-0 animate-blur-fade-slide-in"
      >
        <Link href="/download">
          <Button>
            <AppleIcon className="size-4" />
            Download for Mac
          </Button>
        </Link>
        <span className="text-foreground/40 text-sm">
          Free to try · macOS 14+ · iPhone app coming soon
        </span>
      </div>
    </div>
  )
}
