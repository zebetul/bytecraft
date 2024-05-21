import React from "react"
import { Link } from "gatsby"
import LogoImage from "../assets/icons/logo.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link className="nav_logo" to="/">
        <LogoImage className="h-20" />
      </Link>

      <ul className="flex gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
