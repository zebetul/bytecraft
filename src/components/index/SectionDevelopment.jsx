import * as React from "react"
import Section from "../ui/Section"
import JSONContent from "../../assets/content/content.json"
import Heading2 from "../ui/Heading2"
import Paragraph2 from "../ui/Paragraph2"
import Button from "../ui/Button"

function SectionDevelopment() {
  return (
    <Section>
      <div className="min-h-[600px] lg:min-h-[800px] lg:order-2 flex flex-col justify-center items-center lg:items-start">
        <div className="max-w-lg mx-auto flex flex-col items-center lg:items-start px-4">
          <Heading2>{JSONContent.sections.development.title}</Heading2>

          <Paragraph2>
            {JSONContent.sections.development.description}
          </Paragraph2>

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

      <div className="min-h-[600px] lg:min-h-[800px] lg:order-1 h-full w-full grid place-items-center">
        <h1 className="image_placeholder bg-blue-200 w-[300px] h-[300px]"></h1>
      </div>
    </Section>
  )
}

export default SectionDevelopment
