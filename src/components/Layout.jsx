import * as React from "react"

import Navbar from "./navigation/Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="font-body min-h-screen max-w-[1700px] mx-auto text-foreground">
      <Navbar />

      <main className="">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
