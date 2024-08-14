import * as React from "react"

function Paragraph2({ children, className }) {
  return (
    <p
      className={`text-base lg:text-xl text-muted mb-10 text-center lg:text-start ${className}`}
    >
      {children}
    </p>
  )
}

export default Paragraph2
