import * as React from "react"

import CssSvg from "../../assets/icons/tech/css.svg"
import FigmaSvg from "../../assets/icons/tech/figma.svg"
import GatsbySvg from "../../assets/icons/tech/gatsby.svg"
import GithubSvg from "../../assets/icons/tech/github.svg"
import HtmlSvg from "../../assets/icons/tech/html.svg"
import JsSvg from "../../assets/icons/tech/js.svg"
import OpenaiSvg from "../../assets/icons/tech/openai.svg"
import ReactSvg from "../../assets/icons/tech/react.svg"
import VscSvg from "../../assets/icons/tech/vsc.svg"

const icons = [
  <CssSvg className="h-10 w-10 lg:h-12 lg:w-12" />,
  <FigmaSvg className="h-10 w-10 lg:h-12 lg:w-12" />,
  <GatsbySvg className="h-10 w-10 lg:h-12 lg:w-12" />,
  <GithubSvg className="h-10 w-10 lg:h-12 lg:w-12" />,
  <HtmlSvg className="h-10 w-10 lg:h-12 lg:w-12" />,
  <JsSvg className="h-10 w-10 lg:h-12 lg:w-12" />,
  <OpenaiSvg className="h-10 w-10 lg:h-12 lg:w-12" />,
  // <ReactSvg className="h-10 w-10 lg:h-12 lg:w-12" />,
  <VscSvg className="h-10 w-10 lg:h-12 lg:w-12" />,
]

function TechBanner() {
  return (
    <div className="w-full mb-20 border py-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
      <p className="w-full lg:w-2/5 my-auto text-3xl lg:text-4xl lg:pl-32 text-center lg:text-start">
        Best solutions
        <span className="block">for every use case</span>
      </p>

      <article className="tech_list-container relative w-full lg:w-3/4 overflow-x-hidden">
        {/* Transparent gradient overlay */}
        <div className="absolute hidden lg:block top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>

        <div className="flex animate-scroll">
          <ul className="flex items-center gap-10 mr-10">
            {icons.map((icon, index) => (
              <li key={`icon-${index}`} className="p-4 lg:p-6 bg-primaryLight">
                {icon}
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-10 mr-10">
            {icons.map((icon, index) => (
              <li
                key={`icon-duplicate-${index}`}
                className="p-4 lg:p-6 bg-primaryLight"
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  )
}

export default TechBanner
