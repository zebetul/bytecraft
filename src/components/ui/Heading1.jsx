import * as React from "react"

function Heading1({ children }) {
  return (
    <h1 className="text-6xl lg:text-8xl font-light mb-4 leading-tight text-center lg:text-start">
      {children}
    </h1>
  )
}

export default Heading1
