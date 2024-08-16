import * as React from "react"
import clsx from "clsx"
import Button from "./Button"

function Section({
  title,
  description,
  svgGraphic: Image,
  buttonText,
  buttonLink,
  bgColor,
  headerTextColor,
  paragraphTextColor,
  headingType: Heading,
  paragraphType: Paragraph,
  imgBgColor = "bg-white",
  reverse = false,
}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className={clsx(
          "min-h-[600px] lg:min-h-[800px] flex flex-col justify-center items-center lg:items-start",
          bgColor,
          reverse ? "lg:order-2" : "lg:order-1"
        )}
      >
        <div className="max-w-lg mx-auto flex flex-col items-center lg:items-start px-4">
          <Heading className={headerTextColor}>{title}</Heading>
          <Paragraph className={paragraphTextColor}>{description}</Paragraph>
          <Button
            to={buttonLink}
            variant="accent"
            size="lg"
            className="lg:mr-auto"
          >
            {buttonText}
          </Button>
        </div>
      </div>

      <div
        className={clsx(
          "min-h-[800px] h-full w-full grid place-items-center overflow-x-hidden",
          imgBgColor,
          reverse ? "lg:order-1" : "lg:order-2"
        )}
      >
        {Image && <Image />}
      </div>
    </section>
  )
}

export default Section
