import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type MarqueeTextProps = {
  className?: string
  direction?: "left" | "right"
}

export default function MarqueeText(props: PropsWithChildren<MarqueeTextProps>) {
  const { children, direction = "left", className } = props
  return (
    <div
      className={twMerge(
        "marquee-left w-full relative overflow-hidden",
        direction === "left" ? "marquee-left" : "marquee-right",
        className
      )}
    >
      <p className={`${className}`}>{children}</p>
    </div>
  )
}
