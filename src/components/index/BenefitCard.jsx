import * as React from "react"

function BenefitCard({ benefit, icon }) {
  return (
    <li className="p-10 lg:p-12 xl:p-24 text-sm border-r">
      {icon}

      <h2 className="max-w-80 font-semibold mt-4">{benefit.benefit}</h2>

      <p className="max-w-80 text-muted">{benefit.description}</p>
    </li>
  )
}

export default BenefitCard
