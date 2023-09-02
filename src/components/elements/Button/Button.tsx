import React, { ButtonHTMLAttributes, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"
import Spinner from "../Spinner"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  size?: "small" | "normal" | "large"
  isFullWidth?: boolean
  variant?: "primary" | "secondary" | "dark"
  isLoading?: boolean
  onClick?: () => void
}

const VARIANT_STYLE = {
  primary: "bg-cyan-500 hover:shadow-cyan-500/50 text-white",
  secondary: "bg-yellow-500 hover:shadow-yellow-500/50 text-white",
  dark: "border bg-[#282828] border border-[#4f4f4f] text-white hover:bg-gray-700",
}

const SIZE_STYLE = {
  small: "text-xs",
  normal: "text-sm",
  large: "text-lg",
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    children,
    className,
    size = "normal",
    isFullWidth = false,
    variant = "primary",
    isLoading = false,
    ...other
  } = props
  return (
    <button
      className={twMerge(
        "hover:shadow-lg py-2 px-4 font-bold rounded-lg ease-in-out duration-300 w-max flex items-center",
        VARIANT_STYLE[variant],
        SIZE_STYLE[size],
        isFullWidth && "w-full justify-center",
        className
      )}
      {...other}
    >
      {isLoading ? (
        <>
          <Spinner />
          <p>Loading...</p>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
