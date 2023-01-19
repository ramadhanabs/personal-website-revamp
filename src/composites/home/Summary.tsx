import React from "react"
import Card from "@/components/elements/Card"
import MarqueeText from "@/components/elements/MarqueeText"
import { ArrowDownRightIcon } from "@heroicons/react/24/solid"
import { BoltIcon, FingerPrintIcon, PhoneIcon } from "@heroicons/react/24/outline"

const Summary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
      <Card className="h-auto bg-[#030f23] text-[#139de2]" isWithHover>
        <p className="font-extralight text-2xl tracking-wide">/intro</p>
        <MarqueeText className="text-[100px] h-[160px] font-bold tracking-tight group-hover:opacity-0 ease-in-out duration-300">
          I leverage the power of TypeScript and React to write robust and maintainable code.
        </MarqueeText>
        <div className="flex justify-between items-center">
          <p className="text-lg font-light">See what we can do</p>
          <ArrowDownRightIcon className="w-6 h-6 animate-bounce" />
        </div>
      </Card>
      <div className="grid grid-row-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-[#031f23] text-[#13e2ac]" isWithHover>
            <div className="flex justify-end">
              <BoltIcon className="w-6 h-6 group-hover:animate-ping" />
            </div>
            <MarqueeText className="text-[40px] h-[80px] font-bold tracking-tight opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 ease-in-out duration-300">
              Frontend - React - VueJS - Javascript & Typescript
            </MarqueeText>
            <p className="font-extralight text-2xl tracking-wide">/tech-stack</p>
          </Card>
          <Card className="bg-[#290038] text-[#fcd5ff]" isWithHover>
            <div className="flex justify-end">
              <FingerPrintIcon className="w-6 h-6 group-hover:animate-ping" />
            </div>
            <MarqueeText className="text-[40px] h-[80px] font-bold tracking-tight opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 ease-in-out duration-300">
              My name is Ramadhana Bagus and I am a highly skilled front-end developer from 🇮🇩
              Indonesia with a strong background in TypeScript and React.
            </MarqueeText>
            <p className="font-extralight text-2xl tracking-wide">/about-me</p>
          </Card>
        </div>
        <Card className="bg-[#1d1c17] text-[#d4c850]" isWithHover>
          <div className="flex justify-end">
            <PhoneIcon className="w-6 h-6 group-hover:animate-ping" />
          </div>
          <MarqueeText className="text-[40px] h-[80px] font-bold tracking-tight opacity-0 group-hover:opacity-100 ease-in-out duration-300">
            ramadhanabagus99@gmail.com / +62-822-2780-4252
          </MarqueeText>
          <p className="font-extralight text-2xl tracking-wide">/contact</p>
        </Card>
      </div>
    </div>
  )
}

export default Summary
