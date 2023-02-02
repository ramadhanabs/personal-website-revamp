import Container from "@/components/elements/Container"
import Link from "next/link"
import React from "react"

interface MenuProps {
  href: string
  label: string
}

const MenuButton = (props: MenuProps) => {
  return (
    <Link href={props.href}>
      <p className="text-white">{props.label}</p>
    </Link>
  )
}

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-5 bg-black z-10">
      <Container>
        <div className="flex justify-between w-full">
          <h1 className="text-white text-2xl font-bold">Superbasic.</h1>
          <div className="flex items-center gap-8">
            <MenuButton href="/superbasic" label="Service" />
            <MenuButton href="/superbasic" label="Our Works" />
            <MenuButton href="/superbasic" label="Why Us" />
            <button className="bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 py-2 px-4 text-white font-bold rounded-lg ease-in-out duration-300 text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header
