import * as React from "react"
import { useState } from "react"

import Menu from "../../assets/icons/menu.svg"
import Close from "../../assets/icons/close.svg"

import NavLinks from "./NavLinks"

function MobileNavSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="trigger md:hidden">
      <button className="nav_button p-2" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
      </button>

      <aside
        className={`content fixed z-10 left-0 top-0 w-full h-screen bg-white transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="close_button absolute top-0 right-0 p-2"
          onClick={() => setIsOpen(false)}
        >
          <Close className="h-6 w-6" />
        </button>

        <ul className="flex flex-col mt-10">
          <NavLinks />
        </ul>
      </aside>
    </div>
  )
}

export default MobileNavSidebar
