import React, { useEffect } from "react"
import { gsap } from "gsap"

import CircleSvg from "../../assets/graphics/hero/circle.svg"
import Ellipse from "../../assets/graphics/hero/ellipse.svg"
import Semi from "../../assets/graphics/design/semicircle.svg"

// SVG path for the circle to follow
const path =
  "M 26 -20 C 27 81 87 107 87 90 C 86 72 27 111 27 191 C 29 280 88 308 87 290 C 86 272 28 297 28 395 C 29 490 88 530 88 504 C 86 478 28 514 26 891"

function DevelopmentSVGAnimation() {
  useEffect(() => {
    // SET INITIAL POSITIONS
    gsap.set(
      [
        ".circle_development",
        ".development_1",
        ".development_2",
        ".development_3",
      ],
      {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
      }
    )

    // 1. CIRCLE ANIMATION
    gsap.to(".circle_development", {
      scrollTrigger: {
        trigger: ".development_animation-container",
        start: "top 70%",
        end: "bottom 0%",
        scrub: 1,
      },
      motionPath: {
        path: path,
        autoRotate: true,
      },
      duration: 3,
    })

    // 2. TOP ELLIPSE ANIMATION TIME LINE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ellipse_development_top",
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    })
    tl.fromTo(
      ".ellipse_development_top",
      { scaleX: 0, scaleY: 0 },
      { scaleX: 1, scaleY: 1, duration: 0.9 },
      0
    ).to(".ellipse_development_top", { scaleX: 0, scaleY: 0, duration: 0.5 }, 2)

    // 3. BOTTOM ELLIPSE ANIMATION TIME LINE
    const tlBottom = gsap.timeline({
      scrollTrigger: {
        trigger: ".ellipse_development_bottom",
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    })
    tlBottom
      .fromTo(
        ".ellipse_development_bottom",
        { scaleX: 0, scaleY: 0 },
        { scaleX: 1, scaleY: 1, duration: 0.9 },
        0
      )
      .to(
        ".ellipse_development_bottom",
        { scaleX: 0, scaleY: 0, duration: 0.5 },
        2
      )

    // 4. PROJECT DEVELOPMENT ANIMATION
    gsap.to(".development_1", {
      scrollTrigger: {
        trigger: ".development_1",
        start: "top 53%",
        endTrigger: ".development_animation-container",
        end: "bottom 80%",
        scrub: 1,
        pin: true,
      },
      duration: 1.5,
    })

    const tlDev2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".development_2",
        start: "top 61%",
        endTrigger: ".development_animation-container",
        end: "bottom 80%",
        scrub: 1,
        pin: true,
      },
    })

    tlDev2.to(".development_2", {
      x: 22,
      rotate: 180,
      duration: 0.2,
    })
    tlDev2.to(".development_2", {
      duration: 1.3,
    })

    const tlDev3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".development_3",
        start: "top 45%",
        endTrigger: ".development_animation-container",
        end: "bottom 80%",
        scrub: 1,
        pin: true,
      },
    })

    tlDev3.to(".development_3", {
      x: 22,
      rotate: 180,
      duration: 0.2,
    })
    tlDev3.to(".development_3", {
      duration: 1.3,
    })
  }, [])

  return (
    <div className="development_animation-container relative w-[400px] mx-auto h-full flex flex-col items-center justify-center overflow-hidden">
      <Ellipse className="ellipse_development_top absolute w-14 h-14 top-0 left-0" />
      <Ellipse className="ellipse_development_bottom absolute w-14 h-14 bottom-0 left-0" />

      <svg className="absolute h-full w-full">
        <path d={path} stroke="black" strokeWidth="1" fill="transparent" />
      </svg>

      <CircleSvg className="circle_development w-10 h-10 absolute top-0 left-0" />

      <Semi className="development_1 w-32 h-32 absolute top-[100px] left-[270px] text-primary" />
      <Semi className="development_2 w-32 h-32 absolute top-[100px] left-[120px] text-primaryLight" />
      <Semi className="development_3 w-32 h-32 absolute top-[300px] left-[120px] text-secondary" />

      <div className="ellipse_mask absolute top-0 h-[26px] w-20 bg-white left-0"></div>
      <div className="ellipse_mask absolute bottom-0 h-[26px] w-20 bg-white left-0"></div>
    </div>
  )
}

export default DevelopmentSVGAnimation
