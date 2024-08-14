import * as React from "react"

function Section({ children }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">{children}</section>
  )
}

export default Section
