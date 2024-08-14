import * as React from "react"
import JSONContent from "../../assets/content/content.json"
import Section from "../ui/Section"
import Button from "../ui/Button"
import Heading1 from "../ui/Heading1"
import Paragraph1 from "../ui/Paragraph1"

const SectionHero = () => {
  return (
    <Section>
      <div className="min-h-[600px] lg:min-h-[800px] flex flex-col justify-center items-center lg:items-start">
        <div className="max-w-lg mx-auto flex flex-col items-center lg:items-start px-4">
          <Heading1>{JSONContent.hero.title}</Heading1>

          <Paragraph1>{JSONContent.hero.description}</Paragraph1>

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

      <div className="min-h-[600px] lg:min-h-[800px] h-full w-full grid place-items-center">
        <h1 className="image_placeholder bg-blue-200 w-[300px] h-[300px]"></h1>
      </div>
    </Section>
  )
}

export default SectionHero
