import React, { ReactNode, useEffect, useRef, useState } from "react"
import Card from "../Card"

interface ScrollExpandCardProps {
  startCoordinate: number
  leftContent: ReactNode
  rightContent: ReactNode
}

const ScrollExpandCard = (props: ScrollExpandCardProps) => {
  const { startCoordinate, leftContent, rightContent } = props
  const firstCardRef = useRef(null)
  const containerRef = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(0)
  const [anchorLeft, setAnchorLeft] = useState(0)
  const [anchorRight, setAnchorRight] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const height = document.body.offsetHeight
    const containerWidth = containerRef?.current?.clientWidth
    const rect = firstCardRef?.current?.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    if (scrollPosition > startCoordinate) {
      const operator = scrollPosition - startCoordinate
      const percentageLeft = 50 - operator / 10
      const percentageRight = 50 + operator / 10

      if (percentageLeft >= 0 && percentageLeft <= 50) {
        setAnchorLeft(percentageLeft)
      }

      if (percentageRight >= 50 && percentageRight <= 100) {
        setAnchorRight(percentageRight)
      }
    }
  }, [scrollPosition])

  return (
    <div className="grid grid-cols-2 mt-4" ref={containerRef}>
      <div
        className="w-[calc(100%+100px)] ease-linear"
        style={{ transform: `translate(${anchorLeft}%, 0%)` }}
        ref={firstCardRef}
      >
        <Card className="bg-[#1B1B1F] text-[#D0FF94] h-[300px] flex flex-col justify-center">
          {leftContent}
        </Card>
      </div>
      <div
        className="w-full"
        style={{ transform: `translate(-${anchorLeft}%, 0%)` }}
        ref={firstCardRef}
      >
        <Card className="text-[#1B1B1F] bg-[#D0FF94] h-[300px] flex flex-col justify-center">
          {rightContent}
        </Card>
      </div>
      <div></div>
    </div>
  )
}

export default ScrollExpandCard
