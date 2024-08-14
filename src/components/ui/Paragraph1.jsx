import * as React from "react"

function Paragraph1({ children }) {
  return (
    <p className="text-lg lg:text-2xl text-muted mb-10 text-center lg:text-start">
      {children}
    </p>
  )
}

export default Paragraph1
