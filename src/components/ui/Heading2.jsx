import * as React from "react"

function Heading2({ children }) {
  return (
    <h1 className="text-4xl lg:text-6xl font-light mb-4 leading-tight text-center lg:text-start">
      {children}
    </h1>
  )
}

export default Heading2
