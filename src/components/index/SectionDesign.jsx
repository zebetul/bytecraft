import * as React from "react"

import JSONContent from "../../assets/content/content.json"
import Section from "../ui/Section"
import Heading2 from "../ui/Heading2"
import Paragraph2 from "../ui/Paragraph2"
import Button from "../ui/Button"

function SectionDesign() {
  return (
    <Section>
      <div className="min-h-[600px] lg:min-h-[800px] flex flex-col justify-center items-center lg:items-start bg-primary">
        <div className="max-w-lg mx-auto flex flex-col items-center lg:items-start px-4 text-white">
          <Heading2>{JSONContent.sections.design.title}</Heading2>

          <Paragraph2>{JSONContent.sections.design.description}</Paragraph2>

          <Button
            to="/contact"
            variant="accent"
            size="lg"
            className="lg:mr-auto"
          >
            Request an offer
          </Button>
        </div>
      </div>

      <div className="min-h-[600px] lg:min-h-[800px] h-full w-full grid place-items-center bg-primaryLight">
        <h1 className="image_placeholder bg-white w-[300px] h-[300px]"></h1>
      </div>
    </Section>
  )
}

export default SectionDesign
