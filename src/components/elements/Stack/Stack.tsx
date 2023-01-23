import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

interface StackProps {
  className?: string
}

export const StackWrapper = ({ children, className }: PropsWithChildren<StackProps>) => (
  <div className={twMerge("grid", className)}>{children}</div>
)

export const StackItem = ({ children, className }: PropsWithChildren<StackProps>) => (
  <div className={className} style={{ gridColumn: 1, gridRow: 1 }}>
    {children}
  </div>
)