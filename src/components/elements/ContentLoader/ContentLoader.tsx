import { twMerge } from "tailwind-merge"

interface ContentLoaderProps {
  width?: string | number
  height?: string | number
  isRounded?: boolean
  className?: string
  isClassNameDimension?: boolean
}

export default function ContentLoader(props: ContentLoaderProps) {
  const {
    width = "100%",
    height = "100%",
    isRounded,
    className,
    isClassNameDimension = false,
  } = props

  const dimension = { width, height }

  return (
    <div
      className={twMerge("bg-cyan-800/50 shrink-0 grow-0", isRounded && "rounded-lg", className)}
      style={isClassNameDimension ? {} : dimension}
    >
      <div className="animate-pulse h-full relative">
        <div className={twMerge("bg-line absolute inset-0", isRounded && "rounded-lg")} />
      </div>
    </div>
  )
}
