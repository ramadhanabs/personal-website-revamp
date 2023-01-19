import Card from "@/components/elements/Card"
import React from "react"

const AboutMe = () => {
  return (
    <Card className="bg-[#1B1B1F] text-[#D0FF94] mt-4 relative">
      <div className="hidden sm:block absolute bottom-[24px] right-[24px]">
        <img className="w-32 h-32 animate-spin-slow" src="circular-text.svg" />
      </div>
      <p className="text-lg">/about-me</p>
      <p className="text-[80px] tracking-tight leading-none mt-10">
        My name is Ramadhana Bagus <br />
        and I am a highly skilled <br />
        front-end developer <br />
        from 🇮🇩 Indonesia.
      </p>
    </Card>
  )
}

export default AboutMe
