import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import CircleSvg from "../../assets/graphics/hero/circle.svg"
import IconPlan from "../../assets/graphics/planning/icon_planning.svg"
import IconDesign from "../../assets/graphics/planning/icon_design.svg"
import IconDev from "../../assets/graphics/planning/icon_development.svg"
import Ellipse from "../../assets/graphics/hero/ellipse.svg"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

// SVG path for the circle to follow
const path =
  "M 200 -30 C 197 57 197 102 127 141 C 49 177 46 225 200 270 C 374 321 368 352 197 454 C 31 541 22 559 136 610 C 200 646 200 715 200 834"

function PlanningSvgAnimation() {
  // SET INITIAL POSITIONS
  React.useEffect(() => {
    gsap.set(".circle_planning", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
    })
    gsap.set(".icon_plan", {
      x: 30,
      y: 250,
    })
    gsap.set(".icon_design", {
      x: 250,
      y: 440,
    })
    gsap.set(".icon_dev", {
      x: 30,
      y: 620,
    })

    // 1. CIRCLE ANIMATION
    gsap.to(".circle_planning", {
      scrollTrigger: {
        trigger: ".planning_animation-container",
        start: "top 70%",
        end: "bottom 0%",
        // markers: true,
        scrub: 1,
      },
      motionPath: { path: path },
      duration: 3,
      autoRotate: true,
    })

    // 2. TOP ELLIPSE ANIMATION TIME LINE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ellipse_planning_top",
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    })
    tl.fromTo(
      ".ellipse_planning_top",
      { scaleX: 0, scaleY: 0 },
      { scaleX: 1, scaleY: 1, duration: 0.9 },
      0
    ).to(".ellipse_planning_top", { scaleX: 0, scaleY: 0, duration: 0.5 }, 2)

    // 3. ICON ANIMATIONS
    gsap.to(".icon_plan", {
      scrollTrigger: {
        trigger: ".icon_plan",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
      rotate: 360,
      color: "#12405C",
      scale: 1.5,
      duration: 0.5,
    })
    gsap.to(".icon_design", {
      scrollTrigger: {
        trigger: ".icon_design",
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
      },
      rotate: -360,
      color: "#5BC0EB",
      scale: 1.5,
      duration: 0.5,
    })
    gsap.to(".icon_dev", {
      scrollTrigger: {
        trigger: ".icon_dev",
        start: "top 55%",
        end: "top 45%",
        scrub: 1,
      },
      rotate: 360,
      color: "#9BA6DE",
      scale: 1.5,
      duration: 0.5,
    })

    // 4. BOTTOM ELLIPSE ANIMATION TIME LINE
    const tlBottom = gsap.timeline({
      scrollTrigger: {
        trigger: ".ellipse_planning_bottom",
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    })
    tlBottom
      .fromTo(
        ".ellipse_planning_bottom",
        { scaleX: 0, scaleY: 0 },
        { scaleX: 1, scaleY: 1, duration: 0.9 },
        0
      )
      .to(
        ".ellipse_planning_bottom",
        { scaleX: 0, scaleY: 0, duration: 0.5 },
        2
      )
  }, [])

  return (
    <div className="planning_animation-container relative w-[400px] mx-auto h-full flex flex-col items-center justify-center overflow-hidden">
      <Ellipse className="ellipse_planning_top absolute w-14 h-14 top-0" />
      <Ellipse className="ellipse_planning_bottom absolute w-14 h-14 bottom-0" />

      <svg className="absolute h-full w-full">
        <path d={path} stroke="Silver" strokeWidth="1" fill="transparent" />
      </svg>

      <CircleSvg className="circle_planning w-10 h-10 absolute top-0 left-0" />

      <div className="absolute top-0 h-[26px] w-20 bg-white"></div>
      <div className="absolute bottom-0 h-[26px] w-20 bg-white"></div>

      <IconPlan className="w-20 h-20 icon_plan absolute top-0 left-0 text-gray-300" />

      <IconDesign className="icon_design w-20 h-20 absolute top-0 left-0 text-gray-300" />

      <IconDev className="icon_dev w-20 h-20 absolute top-0 left-0 text-gray-300" />
    </div>
  )
}

export default PlanningSvgAnimation
