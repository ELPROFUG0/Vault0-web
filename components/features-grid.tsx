import { FeatureCard } from "@/components/feature-card"
import {
  CommandIcon,
  BoltIcon,
  SparklesIcon,
  PuzzleIcon,
  ChatIcon,
  GlobeIcon,
  KeyIcon,
  WandIcon,
  LockIcon,
  CpuIcon,
} from "@/components/icons/feature-icons"

const features = [
  {
    title: "Custom Keyboard Shortcuts",
    description:
      "Create unlimited AI actions and assign each one a unique keyboard shortcut. Trigger them instantly from any app.",
    icon: <CommandIcon className="size-4" />,
    delay: 0,
  },
  {
    title: "Works Everywhere",
    description:
      "Select text in any macOS app—browsers, emails, IDEs, documents—and run your AI action with one shortcut.",
    icon: <BoltIcon className="size-4" />,
    delay: 0.1,
  },
  {
    title: "Multiple AI Providers",
    description:
      "Use OpenAI, Anthropic, Groq, Perplexity, or OpenRouter. Switch providers anytime, pick the model you prefer.",
    icon: <CpuIcon className="size-4" />,
    delay: 0.2,
  },
  {
    title: "Bring Your Own API Key",
    description:
      "Your API key, your model. No subscriptions, no middlemen. Connect directly to the AI provider of your choice.",
    icon: <KeyIcon className="size-4" />,
    delay: 0.3,
  },
  {
    title: "Prompt Enhancement",
    description:
      "One-click AI-powered prompt improver. Turn simple instructions into better-structured prompts for optimal results.",
    icon: <WandIcon className="size-4" />,
    delay: 0.4,
  },
  {
    title: "Native Plugins",
    description:
      "Extend functionality with built-in plugins: Chat with AI, QR Code Generator, Image Converter, and Color Picker.",
    icon: <PuzzleIcon className="size-4" />,
    badge: "beta" as const,
    delay: 0.5,
  },
  {
    title: "Chat with AI",
    description:
      "Have direct conversations with AI in a popup window. Multi-turn conversations with streaming responses.",
    icon: <ChatIcon className="size-4" />,
    delay: 0.6,
  },
  {
    title: "Web Search",
    description:
      "Search the web using Perplexity. Get formatted results with links and images for queries that need live data.",
    icon: <GlobeIcon className="size-4" />,
    delay: 0.7,
  },
  {
    title: "Pre-built Actions",
    description:
      "Start with ready-to-use actions: Fix Grammar, Rephrase, Shorten, Formalize, Translate, and more.",
    icon: <SparklesIcon className="size-4" />,
    delay: 0.8,
  },
  {
    title: "Private & Local",
    description:
      "Your data stays on your Mac. API calls go directly to providers. No Vault0 servers in between.",
    icon: <LockIcon className="size-4" />,
    delay: 0.9,
  },
]

export function FeaturesGrid() {
  return (
    <div className="w-full mx-auto z-10">
      <div className="w-full z-1 mx-auto animate-fade-in relative">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                badge={feature.badge}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
