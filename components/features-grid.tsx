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
    title: "Capture instantly.",
    description:
      "Notes, links, images, voice — grab anything in seconds with a keyboard shortcut.",
    icon: <BoltIcon className="size-4" />,
    delay: 0,
  },
  {
    title: "Your data, your Mac.",
    description:
      "Everything stays local. Nothing is uploaded or shared unless you choose to.",
    icon: <LockIcon className="size-4" />,
    delay: 0.1,
  },
  {
    title: "Resurface when it matters.",
    description:
      "A visual library that makes it easy to find and rediscover what you've saved.",
    icon: <SparklesIcon className="size-4" />,
    delay: 0.2,
  },
]

export function FeaturesGrid() {
  return (
    <div className="w-full mx-auto z-10">
      <div className="w-full z-1 mx-auto animate-fade-in relative">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
