import * as React from "react"

function Section({ children }) {
  return (
    <section className="lg:min-h-[700px] mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
      {children}
    </section>
  )
}

export default Section
