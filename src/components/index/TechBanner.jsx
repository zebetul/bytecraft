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
  <CssSvg className="h-12 w-12" />,
  <FigmaSvg className="h-12 w-12" />,
  <GatsbySvg className="h-12 w-12" />,
  <GithubSvg className="h-12 w-12" />,
  <HtmlSvg className="h-12 w-12" />,
  <JsSvg className="h-12 w-12" />,
  <OpenaiSvg className="h-12 w-12" />,
  // <ReactSvg className="h-12 w-12" />,
  <VscSvg className="h-12 w-12" />,
]

function TechBanner() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between">
      <p className="w-full lg:w-2/5 my-auto text-2xl lg:text-4xl lg:pl-32 text-center lg:text-start">
        The right technology
        <span className="block">for every use case</span>
      </p>

      <article className="tech_list-container relative w-full lg:w-2/3">
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

        <ul className="h-32 flex flex-row items-center justify-center gap-10 overflow-x-hidden">
          {icons.map((icon, index) => (
            <li key={index} className="p-6 bg-primaryLight">
              {icon}
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export default TechBanner
