import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MainContainer } from "@/components/main-container"

interface ChangeItem {
  type: "new" | "improved" | "fixed"
  text: string
}

interface VersionEntry {
  version: string
  date: string
  title: string
  changes: ChangeItem[]
}

const versions: VersionEntry[] = [
  {
    version: "2.0.0",
    date: "January 2026",
    title: "Vault0 2.0 - Complete Redesign",
    changes: [
      { type: "new", text: "Completely redesigned interface with modern aesthetics" },
      { type: "new", text: "New action editor with live preview" },
      { type: "new", text: "Support for Claude, GPT-4, and Gemini models" },
      { type: "new", text: "iCloud sync for actions across all your devices" },
      { type: "new", text: "Pro subscription with unlimited actions and premium features" },
      { type: "improved", text: "Faster response times with optimized API calls" },
      { type: "improved", text: "Better keyboard shortcut management" },
      { type: "fixed", text: "Memory usage optimizations" },
    ],
  },
  {
    version: "1.5.0",
    date: "December 2025",
    title: "AI Provider Expansion",
    changes: [
      { type: "new", text: "Added support for Anthropic Claude API" },
      { type: "new", text: "Added support for Google Gemini API" },
      { type: "new", text: "Custom system prompts for each action" },
      { type: "improved", text: "Better error handling for API failures" },
      { type: "improved", text: "Improved action organization with folders" },
      { type: "fixed", text: "Fixed keyboard shortcut conflicts with system shortcuts" },
    ],
  },
  {
    version: "1.4.0",
    date: "November 2025",
    title: "Performance & Reliability",
    changes: [
      { type: "new", text: "Action templates gallery" },
      { type: "new", text: "Export and import actions as JSON" },
      { type: "improved", text: "50% faster startup time" },
      { type: "improved", text: "Reduced memory footprint" },
      { type: "fixed", text: "Fixed clipboard issues on macOS Sequoia" },
      { type: "fixed", text: "Fixed rare crash when processing large text selections" },
    ],
  },
  {
    version: "1.3.0",
    date: "October 2025",
    title: "Keyboard Shortcuts Overhaul",
    changes: [
      { type: "new", text: "Global keyboard shortcut customization" },
      { type: "new", text: "Quick action search with Cmd+Shift+Space" },
      { type: "improved", text: "Better visual feedback when actions are triggered" },
      { type: "improved", text: "Smoother animations throughout the app" },
      { type: "fixed", text: "Fixed shortcut registration on first launch" },
    ],
  },
  {
    version: "1.2.0",
    date: "September 2025",
    title: "Menu Bar Improvements",
    changes: [
      { type: "new", text: "Redesigned menu bar interface" },
      { type: "new", text: "Quick access to recent actions" },
      { type: "new", text: "Action history with timestamps" },
      { type: "improved", text: "Better dark mode support" },
      { type: "fixed", text: "Fixed menu bar icon disappearing after sleep" },
    ],
  },
  {
    version: "1.1.0",
    date: "August 2025",
    title: "API Key Management",
    changes: [
      { type: "new", text: "Secure Keychain storage for API keys" },
      { type: "new", text: "Multiple API key profiles" },
      { type: "improved", text: "Clearer API key validation feedback" },
      { type: "fixed", text: "Fixed API key not persisting after restart" },
    ],
  },
  {
    version: "1.0.0",
    date: "July 2025",
    title: "Initial Release",
    changes: [
      { type: "new", text: "Create custom AI actions with keyboard shortcuts" },
      { type: "new", text: "OpenAI GPT integration" },
      { type: "new", text: "Text selection and clipboard support" },
      { type: "new", text: "Native macOS menu bar app" },
      { type: "new", text: "Light and dark mode support" },
    ],
  },
]

function getTypeStyles(type: ChangeItem["type"]) {
  switch (type) {
    case "new":
      return "bg-emerald-500/10 text-emerald-600"
    case "improved":
      return "bg-blue-500/10 text-blue-600"
    case "fixed":
      return "bg-amber-500/10 text-amber-600"
  }
}

function getTypeLabel(type: ChangeItem["type"]) {
  switch (type) {
    case "new":
      return "New"
    case "improved":
      return "Improved"
    case "fixed":
      return "Fixed"
  }
}

export default function ChangelogsPage() {
  return (
    <>
      <MainContainer>
        <Header />
        <div className="relative flex flex-col min-h-[80dvh]">
          {/* Header */}
          <div className="flex flex-col gap-4 p-8 pt-12 pb-10 items-center text-center opacity-0 animate-blur-fade-slide-in">
            <div className="opacity-90 hover:opacity-100 py-1 transition-colors bg-foreground/10 text-foreground px-2 h-5 rounded-md flex items-center gap-1 font-medium text-[11px]">
              What&apos;s New
            </div>
            <h1 className="text-2xl font-medium tracking-tight text-foreground">
              Updates
            </h1>
            <p className="text-foreground/65 text-sm max-w-md leading-relaxed">
              Stay up to date with the latest features, improvements, and bug fixes in Vault0.
            </p>
          </div>

          {/* Version Entries */}
          <div className="flex flex-col">
            {versions.map((version, versionIndex) => (
              <div
                key={version.version}
                className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
                style={{ animationDelay: `${100 + versionIndex * 50}ms` }}
              >
                {/* Version Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-foreground/10 text-foreground px-2 py-0.5 rounded-md text-xs font-medium">
                    v{version.version}
                  </span>
                  <span className="text-foreground/50 text-xs">
                    {version.date}
                  </span>
                </div>

                {/* Version Title */}
                <h2 className="text-base font-medium text-foreground mb-4">
                  {version.title}
                </h2>

                {/* Changes List */}
                <ul className="space-y-2">
                  {version.changes.map((change, changeIndex) => (
                    <li
                      key={changeIndex}
                      className="flex items-start gap-3 text-sm text-foreground/70"
                    >
                      <span
                        className={`shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium ${getTypeStyles(
                          change.type
                        )}`}
                      >
                        {getTypeLabel(change.type)}
                      </span>
                      <span className="leading-relaxed">{change.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div
            className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
            style={{ animationDelay: `${100 + versions.length * 50 + 50}ms` }}
          >
            <div className="text-center">
              <p className="text-sm text-foreground/50">
                Want to stay updated? Follow us on{" "}
                <a
                  href="https://x.com/elmoidev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  X (Twitter)
                </a>{" "}
                for the latest news.
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}
