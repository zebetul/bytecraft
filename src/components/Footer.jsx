import * as React from "react"
import { Link } from "gatsby"

import LogoSvg from "../assets/icons/logo.svg"
import FacebookIcon from "../assets/icons/social/facebook.svg"
import LinkedinIcon from "../assets/icons/social/linkedin.svg"

const Footer = () => {
  return (
    <footer className="flex justify-between items-end px-4">
      <div className="flex">
        <a
          className="mr-5"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon className="h-6 w-6" />
        </a>

        <a
          className="mr-5"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="h-6 w-6" />
        </a>
      </div>

      <Link className="nav_logo" to="/">
        <LogoSvg className="h-min w-32" />
      </Link>
    </footer>
  )
}

export default Footer
