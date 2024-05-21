import * as React from "react"
import { Link } from "gatsby"

const NavLinks = () => {
  return (
    <>
      <li className="nav_link hover:bg-primaryLight transition-colors duration-300 p-2">
        <Link to="/about" className="py-2 px-4">
          About
        </Link>
      </li>

      <li className="nav_link hover:bg-primaryLight transition-colors duration-300 p-2">
        <Link to="/services" className="py-2 px-4">
          Services
        </Link>
      </li>

      <li className="nav_link hover:bg-primaryLight transition-colors duration-300 p-2">
        <Link to="/contact" className="py-2 px-4">
          Contact
        </Link>
      </li>
    </>
  )
}

export default NavLinks
