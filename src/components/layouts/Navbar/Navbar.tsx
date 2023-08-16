import Container from "@/components/elements/Container"
import Link from "next/link"
import React from "react"
import { twMerge } from "tailwind-merge"

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full border-b border-gray-800 bg-black">
      <Container>
        <div className="flex items-center justify-between">
          <img src="/images/rb-logo.png" className="w-[50px]" />
          <div className="flex items-center gap-6 justify-center">
            <Link href="/" className="border-b-2 border-cyan-600 py-5 px-2 text-white/80">
              Home
            </Link>
            <Link
              href="/"
              className="py-5 px-2 border-transparent border-b-2 hover:border-cyan-600 text-white/80"
            >
              Experiences
            </Link>
            <Link
              href="/"
              className="py-5 px-2 border-transparent border-b-2 hover:border-cyan-600 text-white/80"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
