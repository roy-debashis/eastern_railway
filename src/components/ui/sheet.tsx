import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface SheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  side?: "left" | "right"
  className?: string
}

function Sheet({ open, onOpenChange, children, side = "right", className }: SheetProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => onOpenChange(false)}
      />
      <div className={cn("fixed inset-y-0 flex max-w-full", side === "right" ? "right-0 pl-10" : "left-0 pr-10")}>
        <div
          className={cn(
            "w-screen max-w-md md:max-w-lg bg-card border-l shadow-2xl p-6 transition duration-300 transform",
            side === "right" ? "animate-in slide-in-from-right" : "animate-in slide-in-from-left",
            className
          )}
        >
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}

function SheetHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-2 text-left mb-4", className)} {...props}>{children}</div>
}

function SheetTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-bold text-foreground", className)} {...props}>{children}</h3>
}

function SheetDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-xs text-muted-foreground", className)} {...props}>{children}</p>
}

export { Sheet, SheetHeader, SheetTitle, SheetDescription }
