import * as React from "react"

import Navbar from "./navigation/Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="font-body min-h-screen max-w-[1800px] mx-auto text-foreground">
        <main className="">{children}</main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
