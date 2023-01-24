/* eslint-disable react/no-unescaped-entities */
import Card from "@/components/elements/Card"
import React from "react"
import { StackWrapper, StackItem } from "@/components/elements/Stack/Stack"
import { PhoneIcon } from "@heroicons/react/24/outline"

const Contact = () => {
  return (
    <Card className="bg-[#031f23] text-[#13e2ac] min-h-[800px]">
      <div>
        <div className="flex items-center">
          <StackWrapper className="w-max mr-3">
            <StackItem className="w-[72px] h-[72px] rounded-full bg-[#13e2ac]/25 animate-ping" />
            <StackItem className="bg-black/25 p-4 rounded-full">
              <PhoneIcon className="w-10 h-10" />
            </StackItem>
          </StackWrapper>
          <p className="gradient-text text-[100px] h-[160px] font-bold tracking-tight hidden sm:block">
            Reach Me Out
          </p>
        </div>
        <p className="text-[40px] font-bold tracking-tight leading-none block sm:hidden my-8">
          Reach Me Out
        </p>
        <p className="text-2xl font-light">
          Whether you're a fellow developer, a business owner looking to improve your website,{" "}
          <br />
          or just someone interested in the tech behind the web,{" "}
          <strong className="font-bold">I'd love to connect with you.</strong>
        </p>
      </div>
    </Card>
  )
}

export default Contact
