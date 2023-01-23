import Card from "@/components/elements/Card"
import useScroll from "@/hooks/useScroll"
import { useState, useEffect } from "react"

const AboutMe = () => {
  const scrollPosition = useScroll()
  const [degree, setDegree] = useState(0)

  useEffect(() => {
    setDegree(window.pageYOffset / 4)
  }, [scrollPosition])

  return (
    <Card className="bg-[#1B1B1F] text-[#D0FF94] my-4 relative">
      <div className="hidden sm:block absolute bottom-[24px] right-[24px]">
        <img
          className="w-32 h-32 ease-linear duration-100"
          src="circular-text.svg"
          style={{ transform: `rotate(${degree}deg)` }}
        />
      </div>
      <p className="text-lg">/about-me</p>
      <p className="text-[80px] tracking-tight leading-none mt-10">
        My name is <strong className="gradient-text">Ramadhana Bagus</strong> <br />
        I am from 🇮🇩 Indonesia. <br />
        I work with React & Vue ecosystem.
      </p>
    </Card>
  )
}

export default AboutMe
