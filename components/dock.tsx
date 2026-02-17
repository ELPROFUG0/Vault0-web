"use client"

import MacOSDock from "@/components/ui/mac-os-dock"

const dockApps = [
  {
    id: "safari",
    name: "Safari",
    icon: "/dock-icons/Safari@4x 1.png"
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: "/dock-icons/Calendar@4x 1.png"
  },
  {
    id: "textab",
    name: "TexTab",
    icon: "/logo textab.png"
  },
  {
    id: "pages",
    name: "Pages",
    icon: "/dock-icons/Pages@4x 1.png"
  },
  {
    id: "news",
    name: "News",
    icon: "/dock-icons/News@4x 1.png"
  },
]

export function Dock() {
  return (
    <MacOSDock
      apps={dockApps}
      openApps={["textab"]}
      onAppClick={(appId) => {
        if (appId === "textab") {
          window.location.href = "/download"
        }
      }}
    />
  )
}
