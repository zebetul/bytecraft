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
import TechBanner from "../components/index/TechBanner"
import BenefitCard from "../components/index/BenefitCard"
import Section from "../components/ui/Section"
import Heading2 from "../components/ui/Heading2"
import Paragraph2 from "../components/ui/Paragraph2"
import Heading1 from "../components/ui/Heading1"
import Paragraph1 from "../components/ui/Paragraph1"
import HeroSVGAnimation from "../components/animations/HeroSVGAnimation"
import PlanningSvgAnimation from "../components/animations/PlanningSvgAnimation"

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
    {/* SECTION HERO  */}
    <Section
      title={JSONContent.hero.title}
      description={JSONContent.hero.description}
      svgGraphic={HeroSVGAnimation}
      buttonText="Request an offer"
      buttonLink="/contact"
      headingType={Heading1}
      paragraphType={Paragraph1}
    />

    <TechBanner />

    {/* SECTION PLANNING */}
    <Section
      title={JSONContent.sections.planning.title}
      description={JSONContent.sections.planning.description}
      svgGraphic={PlanningSvgAnimation}
      buttonText="Request an offer"
      buttonLink="/contact"
      headingType={Heading2}
      paragraphType={Paragraph2}
      reverse={true}
    />

    {/* List of benefits for planning */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border">
      {JSONContent.sections.planning.benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          benefit={benefit}
          icon={icons.planning[index]}
        />
      ))}
    </ul>

    {/* SECTION DESIGN */}
    <Section
      title={JSONContent.sections.design.title}
      description={JSONContent.sections.design.description}
      // svgGraphic={true}
      buttonText="Request an offer"
      buttonLink="/contact"
      bgColor="bg-primary"
      headerTextColor="text-white"
      paragraphTextColor="text-gray-200"
      headingType={Heading2}
      paragraphType={Paragraph2}
      imgBgColor="bg-primaryLight"
    />

    {/* List of benefits for design */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border">
      {JSONContent.sections.design.benefits.map((benefit, index) => (
        <BenefitCard key={index} benefit={benefit} icon={icons.design[index]} />
      ))}
    </ul>

    {/* SECTION DEVELOPMENT */}
    <Section
      title={JSONContent.sections.development.title}
      description={JSONContent.sections.development.description}
      // svgGraphic={true}
      buttonText="Request an offer"
      buttonLink="/contact"
      headingType={Heading2}
      paragraphType={Paragraph2}
      reverse={true}
    />

    {/* List of benefits for development */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border">
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
