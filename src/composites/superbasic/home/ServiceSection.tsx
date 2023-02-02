import Button from "@/components/elements/Button"
import {
  RocketLaunchIcon,
  CodeBracketSquareIcon,
  ChevronRightIcon,
  PaintBrushIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid"
import React, { ReactElement, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

const DATA = [
  {
    id: 1,
    title: "Company Profile Website",
    description:
      "Unlock your website's potential with custom landing page development - designed to convert visitors into customers.",
    icon: <CodeBracketSquareIcon className="w-8 h-8" />,
    isComingSoon: false,
  },
  {
    id: 2,
    title: "Logo Design",
    description:
      "Create a unique & memorable logo, the face of your brand elevated with professional design.",
    icon: <PaintBrushIcon className="w-6 h-6" />,
    isComingSoon: true,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Elevate your website to the next level with custom UI/UX design. Enhance user experience, increase engagement and drive business growth.",
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    isComingSoon: true,
  },
]

interface MockDataProps {
  id: number
  title: string
  description: string
  icon: ReactElement
}

interface ServiceItemProps {
  data: MockDataProps
  onClick?: () => void
  isActive?: boolean
  isComingSoon?: boolean
}

const ServiceItem = (props: ServiceItemProps) => {
  const { data, onClick, isActive, isComingSoon = false } = props
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "border border-white/10 rounded-lg p-4 hover:bg-cyan-700/50 hover:border-cyan-500 ease-in-out duration-200 group flex items-center justify-between cursor-pointer",
        isActive && "border-cyan-500 bg-cyan-700/50",
        isComingSoon && "opacity-50"
      )}
      disabled={isComingSoon}
    >
      <div className="flex items-center">
        {data.icon}
        <p className="text-xl ml-2">{data.title}</p>
        {isComingSoon && <p className="text-xs text-gray-400 ml-2 tracking-wide">Coming Up!</p>}
      </div>
      {isComingSoon && <LockClosedIcon className="w-5 h-5" />}
      {!isComingSoon && (
        <ChevronRightIcon className="opacity-0 w-6 h-6 group-hover:opacity-100 ease-in-out duration-200" />
      )}
    </button>
  )
}

const SelectedService = (props: ServiceItemProps) => {
  const { data } = props
  return (
    <div className="transition-all ease-in-out duration-200 my-5">
      <div className="flex items-center text-cyan-500">
        {data.icon}
        <p className="text-2xl ml-2 font-bold text-cyan-500">{data.title}</p>
      </div>
      <p className="opacity-80 mt-2 mb-4 font-thin">{data.description}</p>
      <Button>See Pricing</Button>
    </div>
  )
}

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState<MockDataProps | null>(null)
  useEffect(() => {
    setSelectedService(DATA[0])
  }, [])
  return (
    <section className="bg-[#1a1a1a] py-8 px-12 rounded-[2rem] -mx-12 mb-[100px]">
      <p className="text-xs text-white font-thin tracking-[.15em]">OUR SERVICES</p>
      <p className="text-[48px] font-bold text-white my-8 leading-none">
        <strong className="gradient-text">Tailored services</strong> <br />
        for your unique needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-2 md:gap-6">
        <div className="flex flex-col gap-4">
          {DATA.map((item) => (
            <ServiceItem
              key={item.id}
              data={item}
              onClick={() => setSelectedService(item)}
              isActive={selectedService !== null && item.id === selectedService.id}
              isComingSoon={item.isComingSoon}
            />
          ))}
        </div>

        {selectedService && <SelectedService data={selectedService} />}
      </div>
    </section>
  )
}

export default ServiceSection
