import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap font-medium transition-transform disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-base-background hover:bg-base-background text-foreground/90 hover:text-foreground shadow-[0_4px_10px_0px_rgba(0,0,0,0.1),0_1px_3px_0px_rgba(0,0,0,0.06),0_0.85px_0.5px_0px_rgba(255,255,255)_inset,0px_0px_0px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_10px_0px_rgba(0,0,0,0.2),0_1px_3px_0px_rgba(0,0,0,0.12),0_0_0px_1px_rgba(255,255,255,0.1)_inset,0_0.85px_0.5px_0px_rgba(255,255,255,0.05)_inset,0px_0px_0px_1px_rgba(0,0,0,0.06)]",
        ghost:
          "hover:bg-foreground/10 hover:text-foreground text-foreground/60 dark:hover:bg-foreground/15",
      },
      size: {
        default: "h-9 px-4 has-[>svg]:px-3 text-sm rounded-full gap-2",
        sm: "h-7 gap-1.5 px-2.5 has-[>svg]:px-2 text-xs rounded-lg",
        xs: "h-6 gap-1.5 px-2.5 has-[>svg]:px-2 text-xs rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
