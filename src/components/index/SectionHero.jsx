import * as React from "react"
import JSONContent from "../../assets/content/content.json"
import Section from "../ui/Section"
import Button from "../ui/Button"
import Heading1 from "../ui/Heading1"
import Paragraph from "../ui/Paragraph"

const SectionHero = () => {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center lg:items-start lg:pl-32">
        <div className="max-w-xl flex flex-col">
          <Heading1>{JSONContent.hero.title}</Heading1>

          <Paragraph>{JSONContent.hero.description}</Paragraph>

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

      <div className="h-full w-full grid place-items-center">
        <h1 className="image_placeholder bg-blue-200 w-[300px] h-[300px]"></h1>
      </div>
    </Section>
  )
}

export default SectionHero
