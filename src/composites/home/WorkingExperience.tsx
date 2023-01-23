import Card from "@/components/elements/Card"
import React, { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react"
import { BriefcaseIcon } from "@heroicons/react/24/outline"
import { StackWrapper, StackItem } from "@/components/elements/Stack/Stack"
import useScroll from "@/hooks/useScroll"
import useCoordinate from "@/hooks/useCoordinate"
import { LIST_EXPERIENCES_1, LIST_EXPERIENCES_2 } from "@/constants"

interface ExperienceType {
  position: number
  image: string
}

interface ExperiencesProps {
  transformValue: number
  direction?: "left" | "right"
  experienceList?: Array<ExperienceType>
}

interface CircleElementProps {
  image?: string
}

const CircleElement = (props: CircleElementProps) => (
  <div className="ring-1 ring-[#13e2ac] ring-inset rounded-full w-[240px] h-[240px] mr-2">
    {props.image && <img src={props.image} />}
  </div>
)

const Experiences = (props: ExperiencesProps) => {
  const { transformValue, experienceList } = props
  return (
    <>
      <div className="overflow-hidden -mx-10 mb-[-30px]">
        <div className="flex w-max" style={{ transform: `translate(${transformValue}px, 0%)` }}>
          {Array.from(Array(12).keys()).map((_, idx) => {
            const obj = experienceList?.find((item) => item.position === idx)
            if (!obj) return <CircleElement key={idx} />
            return <CircleElement key={idx} image={obj.image} />
          })}
        </div>
      </div>
    </>
  )
}

const WorkingExperience = () => {
  const scrollPosition = useScroll()
  const containerRef = useRef(null)
  const coordinate = useCoordinate(containerRef)
  const transformValue = useMemo(() => {
    if (!coordinate || !scrollPosition) return 0
    return scrollPosition - coordinate?.top + 100
  }, [coordinate, scrollPosition])
  return (
    <Card className="bg-[#031f23] text-[#13e2ac] min-h-[800px] mb-8">
      <div>
        <div className="flex items-center">
          <StackWrapper className="w-max mr-3">
            <StackItem className="w-[72px] h-[72px] rounded-full bg-[#13e2ac]/25 animate-ping" />
            <StackItem className="bg-black/25 p-4 rounded-full">
              <BriefcaseIcon className="w-10 h-10" />
            </StackItem>
          </StackWrapper>
          <p className="gradient-text text-[100px] h-[160px] font-bold tracking-tight">
            Grind - Street Cred
          </p>
        </div>
        <p className="text-2xl font-light">
          My wealth of experiences creating visually appealing and user-friendly websites <br />{" "}
          with a strong grasp of <strong className="font-bold">modern frontend frameworks</strong>.
        </p>
      </div>
      <div className="mt-16 mb-10" ref={containerRef}>
        <Experiences transformValue={transformValue} experienceList={LIST_EXPERIENCES_1} />
        <Experiences transformValue={transformValue + 124} experienceList={LIST_EXPERIENCES_2} />
      </div>
    </Card>
  )
}

export default WorkingExperience
