import React, { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

interface CardProps {
  className?: string
  isWithHover?: boolean
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const { className, children, isWithHover = false } = props
  return (
    <div
      className={twMerge(
        "rounded-[60px] p-10 flex flex-col justify-between group",
        className,
        isWithHover && "hover:scale-95 ease-in-out duration-300 cursor-pointer"
      )}
    >
      {children}
    </div>
  )
}

export default Card
