import * as React from "react"
import Button from "../ui/Button"

const links = [
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
]

const NavLinks = () => {
  return (
    <>
      {links.map(link => (
        <li key={link.name}>
          <Button to={link.to} variant="navLink">
            {link.name}
          </Button>
        </li>
      ))}
    </>
  )
}

export default NavLinks
