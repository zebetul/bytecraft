import * as React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="font-body min-h-screen text-textColor">
      <Navbar />

      <main className="flex flex-col">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
