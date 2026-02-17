"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AppleIcon } from "@/components/icons/apple-icon"
import { Dock } from "@/components/dock"
import { AwardBadge } from "@/components/ui/award-badge"

export function Hero() {
  return (
    <div className="w-full relative overflow-hidden p-0">
      <div className="w-full mx-auto">
        <div className="w-full z-1 mx-auto animate-fade-in">
          <div className="h-[500px] px-6 md:px-8 relative flex w-full flex-col gap-8 items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="opacity-0 animate-blur-fade-slide-in" style={{ animationDelay: "0.05s" }}>
                <AwardBadge type="product-of-the-day" place={3} link="https://www.producthunt.com/products/textab" />
              </div>
              <div className="opacity-0 animate-blur-fade-slide-in" style={{ animationDelay: "0.08s" }}>
                <Badge variant="beta">Currently in Beta</Badge>
              </div>

              <h1
                style={{ animationDelay: "0.1s" }}
                className="text-[2.75rem] md:text-[3.5rem] text-balance text-center leading-[1.1] tracking-tight font-medium max-w-[700px] text-foreground opacity-0 animate-blur-fade-slide-in font-serif"
              >
                Turn any AI task <br /> into a Keyboard Shortcut
              </h1>

              <p
                style={{ animationDelay: "0.2s" }}
                className="text-center leading-6.5 max-w-[360px] !text-base opacity-0 text-foreground/65 animate-blur-fade-slide-in"
              >
                Create custom AI actions and trigger them instantly.
              </p>

              <div
                style={{ animationDelay: "0.25s" }}
                className="opacity-0 animate-blur-fade-slide-in mt-2"
              >
                <Dock />
              </div>
            </div>

            <div
              style={{ animationDelay: "0.3s" }}
              className="flex flex-col gap-4 items-center justify-center opacity-0 animate-blur-fade-slide-in"
            >
              <div className="flex flex-row items-start justify-start gap-2">
                <Link href="/download">
                  <Button>
                    <AppleIcon className="size-4" />
                    Download for Mac
                  </Button>
                </Link>
                <Link href="/examples">
                  <span className="shimmer-border rounded-full inline-flex">
                    <Button variant="secondary">See Examples</Button>
                  </span>
                </Link>
              </div>
              <span className="text-foreground/50 text-sm">
                Free to try • iPhone app coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
