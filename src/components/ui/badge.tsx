import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        critical:
          "border-rose-500/30 bg-rose-950/80 text-rose-300 font-bold uppercase tracking-wider",
        favourable:
          "border-emerald-500/30 bg-emerald-950/80 text-emerald-300 font-bold uppercase tracking-wider",
        watch:
          "border-amber-500/30 bg-amber-950/80 text-amber-300 font-bold uppercase tracking-wider",
        neutral:
          "border-slate-500/30 bg-slate-800 text-slate-300 font-medium",
        railway:
          "border-blue-400/30 bg-blue-900/90 text-blue-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
