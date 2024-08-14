import * as React from "react"

import Planning1 from "../assets/icons/planning/icon-planning-1.svg"
import Planning2 from "../assets/icons/planning/icon-planning-2.svg"
import Planning3 from "../assets/icons/planning/icon-planning-3.svg"
import Planning4 from "../assets/icons/planning/icon-planning-4.svg"
import Design1 from "../assets/icons/design/icon-design-1.svg"
import Design2 from "../assets/icons/design/icon-design-2.svg"
import Design3 from "../assets/icons/design/icon-design-3.svg"
import Design4 from "../assets/icons/design/icon-design-4.svg"
import Development1 from "../assets/icons/development/icon-dev-1.svg"
import Development2 from "../assets/icons/development/icon-dev-2.svg"
import Development3 from "../assets/icons/development/icon-dev-3.svg"
import Development4 from "../assets/icons/development/icon-dev-4.svg"

import Seo from "../components/seo"
import JSONContent from "../assets/content/content.json"
import Layout from "../components/Layout"
import SectionHero from "../components/index/SectionHero"
import TechBanner from "../components/index/TechBanner"
import SectionPlanning from "../components/index/SectionPlanning"
import BenefitCard from "../components/index/BenefitCard"
import SectionDesign from "../components/index/SectionDesign"
import SectionDevelopment from "../components/index/SectionDevelopment"

const icons = {
  planning: [
    <Planning1 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Planning2 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Planning3 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Planning4 className="h-10 w-10 lg:h-12 lg:w-12" />,
  ],

  design: [
    <Design1 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Design2 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Design3 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Design4 className="h-10 w-10 lg:h-12 lg:w-12" />,
  ],

  development: [
    <Development1 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Development2 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Development3 className="h-10 w-10 lg:h-12 lg:w-12" />,
    <Development4 className="h-10 w-10 lg:h-12 lg:w-12" />,
  ],
}

const IndexPage = () => (
  <Layout>
    <SectionHero />

    <TechBanner />

    <SectionPlanning />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {JSONContent.sections.planning.benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          benefit={benefit}
          icon={icons.planning[index]}
        />
      ))}
    </ul>

    <SectionDesign />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {JSONContent.sections.design.benefits.map((benefit, index) => (
        <BenefitCard key={index} benefit={benefit} icon={icons.design[index]} />
      ))}
    </ul>

    <SectionDevelopment />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {JSONContent.sections.development.benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          benefit={benefit}
          icon={icons.development[index]}
        />
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
