import * as React from "react"

function Heading2({ children, className }) {
  return (
    <h1
      className={`text-4xl lg:text-6xl font-light mb-4 leading-tight text-center lg:text-start ${className}`}
    >
      {children}
    </h1>
  )
}

export default Heading2
