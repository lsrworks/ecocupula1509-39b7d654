import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-accent hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        eco: "bg-primary text-primary-foreground hover:bg-accent px-6 py-3 rounded-xl font-display font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300",
        "eco-outline": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-xl font-display font-semibold transform hover:scale-105 bg-transparent shadow-md hover:shadow-lg transition-all duration-300",
        "eco-cta": "bg-white text-primary hover:bg-eco-gray-light px-8 py-4 rounded-xl font-display font-semibold text-base transform hover:scale-105 shadow-lg hover:shadow-xl md:px-12 md:py-5 md:text-lg transition-all duration-300",
        "hero-primary": "bg-primary text-primary-foreground px-10 py-4 rounded-xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
        "hero-outline": "border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-xl font-display font-semibold text-lg bg-transparent transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg",
        "whatsapp": "bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        responsive: "h-12 px-6 py-3 text-sm md:h-14 md:px-8 md:py-4 md:text-base",
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
