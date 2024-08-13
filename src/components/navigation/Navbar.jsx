import * as React from "react"
import { Link } from "gatsby"

import LogoSvg from "../../assets/icons/logo.svg"

import NavLinks from "./NavLinks"
import MobileNavSidebar from "./MobileNavSidebar"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-start">
      <Link className="nav_logo" to="/">
        <LogoSvg className="h-min w-8" />
      </Link>

      <ul className="hidden md:flex flex-row">
        <NavLinks />
      </ul>

      <MobileNavSidebar />
    </nav>
  )
}

export default Navbar
