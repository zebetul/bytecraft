import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import LogoSvg from "../assets/icons/logo.svg"
import Menu from "../assets/icons/menu.svg"
import Close from "../assets/icons/close.svg"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex justify-between items-start">
      <Link className="nav_logo" to="/">
        <LogoSvg className="h-min w-8" />
      </Link>

      <ul className="hidden md:flex transition-all duration-300">
        <NavLinks />
      </ul>

      <div className="md:hidden">
        <button className="nav_button relative p-2 z-10" onClick={toggleMenu}>
          {isOpen ? (
            <Close className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute left-0 top-0 flex flex-col bg-white w-full transition-all duration-300 pt-5">
          <NavLinks />
        </ul>
      )}
    </nav>
  )
}

export default Navbar
