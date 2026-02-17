import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "beta"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <div
      className={cn(
        "py-1 transition-colors px-2 h-5 rounded-md flex items-center gap-1 text-[10px]",
        variant === "beta"
          ? "bg-[#FBBAC3] text-foreground/80 dark:text-foreground font-medium opacity-90 hover:opacity-100"
          : "bg-foreground/10 text-foreground font-[380] opacity-90 hover:opacity-100",
        className
      )}
    >
      {children}
    </div>
  )
}
