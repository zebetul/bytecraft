import React, { useEffect } from "react"
import { gsap } from "gsap"

import CircleSvg from "../../assets/graphics/hero/circle.svg"
import Ellipse from "../../assets/graphics/hero/ellipse.svg"
import Semi from "../../assets/graphics/design/semicircle.svg"
import Quarter from "../../assets/graphics/design/quartercircle.svg"
import Triangle from "../../assets/graphics/design/triangle.svg"

// SVG path for the circle to follow
const path = "M 30 -30 L 30 930"

function DesignSVGAnimation() {
  useEffect(() => {
    // SET INITIAL POSITIONS
    gsap.set(".circle_design", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
    })

    // 1. CIRCLE ANIMATION
    gsap.to(".circle_design", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 40%",
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
        trigger: ".ellipse_design_top",
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    })
    tl.fromTo(
      ".ellipse_design_top",
      { scaleX: 0, scaleY: 0 },
      { scaleX: 1, scaleY: 1, duration: 0.9 },
      0
    ).to(".ellipse_design_top", { scaleX: 0, scaleY: 0, duration: 0.5 }, 2)

    // 3. BOTTOM ELLIPSE ANIMATION TIME LINE
    const tlBottom = gsap.timeline({
      scrollTrigger: {
        trigger: ".ellipse_design_bottom",
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    })
    tlBottom
      .fromTo(
        ".ellipse_design_bottom",
        { scaleX: 0, scaleY: 0 },
        { scaleX: 1, scaleY: 1, duration: 0.9 },
        0
      )
      .to(".ellipse_design_bottom", { scaleX: 0, scaleY: 0, duration: 0.5 }, 2)

    // 4. PARALAX ANIMATIONS
    gsap.to(".paralax_sm_1", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 50%",
        end: "bottom 80%",
        scrub: 4,
      },
      rotate: 360,
      y: -200,
      duration: 3,
    })
    gsap.to(".paralax_sm_2", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 40%",
        end: "bottom 40%",
        scrub: 4,
      },
      y: -200,
      rotate: 180,
      duration: 3,
    })
    gsap.to(".paralax_sm_3", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 4,
      },
      y: -200,
      rotate: -720,
      duration: 3,
    })
    gsap.to(".paralax_sm_4", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 20%",
        end: "bottom 20%",
        scrub: 4,
      },
      y: -200,
      rotate: 360,
      duration: 3,
    })

    gsap.to(".paralax_md_1", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 50%",
        end: "bottom 80%",
        scrub: 4,
      },
      y: -400,
      rotate: 90,
      duration: 3,
    })
    gsap.to(".paralax_md_2", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 4,
      },
      y: -400,
      rotate: -180,
      duration: 3,
    })
    gsap.to(".paralax_md_3", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 30%",
        end: "bottom 60%",
        scrub: 4,
      },
      y: -400,
      rotate: 180,
      duration: 3,
    })
    gsap.to(".paralax_md_4", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 20%",
        end: "bottom 20%",
        scrub: 4,
      },
      y: -400,
      rotate: -360,
      duration: 3,
    })

    gsap.to(".paralax_lg_1", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 4,
      },
      y: -600,
      rotate: 360,
      duration: 3,
    })
    gsap.to(".paralax_lg_2", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 40%",
        end: "bottom 80%",
        scrub: 4,
      },
      y: -600,
      rotate: -180,
      duration: 3,
    })
    gsap.to(".paralax_lg_3", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 20%",
        end: "bottom 0%",
        scrub: 4,
      },
      y: -600,
      rotate: -180,
      duration: 3,
    })
    gsap.to(".paralax_lg_4", {
      scrollTrigger: {
        trigger: ".design_animation-container",
        start: "top 0%",
        end: "bottom 0%",
        scrub: 4,
        // markers: true,
      },
      y: -600,
      rotate: 360,
      duration: 3,
    })
  }, [])

  return (
    <div className="design_animation-container relative w-[400px] mx-auto h-full flex flex-col items-center justify-center overflow-hidden">
      <Ellipse className="ellipse_design_top absolute w-14 h-14 top-0 left-0" />
      <Ellipse className="ellipse_design_bottom absolute w-14 h-14 bottom-0 left-0" />

      {/* <svg className="absolute h-full w-full">
        <path d={path} stroke="black" strokeWidth="1" fill="transparent" />
      </svg> */}

      <CircleSvg className="circle_design w-10 h-10 absolute top-0 left-0" />

      <div className="absolute top-0 left-0 h-[26px] w-20 bg-primary"></div>
      <div className="absolute bottom-0 left-0 h-[26px] w-20 bg-primary"></div>

      <div className="paralax_sm_3 w-10 h-10 absolute top-20 right-[50px] bg-primaryLight" />
      <Semi className="paralax_sm_1 w-10 h-10 absolute left-[100px] text-tertiary" />
      <Triangle className="paralax_sm_2 w-10 h-10 absolute bottom-40 right-[150px] text-secondary" />
      <div className="paralax_sm_4 w-10 h-10 absolute -bottom-20 left-[150px] bg-primaryLight" />

      <Quarter className="paralax_md_1 w-16 h-16 absolute right-0 text-tertiary" />
      <div className="paralax_md_2 w-16 h-16 absolute top-96 left-[100px] bg-quaternary" />
      <Semi className="paralax_md_3 w-16 h-16 absolute bottom-72 right-[150px] text-secondary" />
      <Semi className="paralax_md_4 w-16 h-16 absolute bottom-40 right-[50px] text-quaternary" />

      <Semi className="paralax_lg_1 w-32 h-32 absolute top-72 text-secondary" />
      <Quarter className="paralax_lg_2 w-32 h-32 absolute bottom-20 right-0 text-primaryLight" />
      <Triangle className="paralax_lg_3 w-32 h-32 absolute bottom-0 left-[100px] text-primaryLight" />
      <Quarter className="paralax_lg_4 w-32 h-32 absolute -bottom-40 right-[50px] text-tertiary" />
    </div>
  )
}

export default DesignSVGAnimation
