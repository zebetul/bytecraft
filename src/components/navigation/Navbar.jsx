import * as React from "react"
import { Link } from "gatsby"

import LogoSvg from "../../assets/icons/logo.svg"

import NavLinks from "./NavLinks"
import MobileNavSidebar from "./MobileNavSidebar"

const Navbar = () => {
  return (
    <nav className="fixed z-20 w-full bg-white border-b py-2">
      <div className=" max-w-[1800px] mx-auto flex justify-between items-center">
        <Link className="nav_logo ml-4" to="/">
          <LogoSvg className="h-min w-24" />
        </Link>

        <ul className="hidden md:flex flex-row">
          <NavLinks />
        </ul>

        <MobileNavSidebar />
      </div>
    </nav>
  )
}

export default Navbar
