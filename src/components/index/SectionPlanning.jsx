import * as React from "react"
import Section from "../ui/Section"
import JSONContent from "../../assets/content/content.json"
import Heading1 from "../ui/Heading1"
import Paragraph from "../ui/Paragraph"
import Button from "../ui/Button"

function SectionPlanning() {
  return (
    <Section>
      <div className="lg:order-2 flex flex-col justify-center items-center lg:items-start lg:pl-32">
        <div className="max-w-xl flex flex-col">
          <Heading1>{JSONContent.sections.planning.title}</Heading1>

          <Paragraph>{JSONContent.sections.planning.description}</Paragraph>
        </div>

        <Button to="/contact" variant="accent" size="lg" className="lg:mr-auto">
          Request an offer
        </Button>
      </div>

      <div className="lg:order-1 h-full w-full grid place-items-center">
        <h1 className="image_placeholder bg-blue-200 w-[300px] h-[300px]"></h1>
      </div>
    </Section>
  )
}

export default SectionPlanning
