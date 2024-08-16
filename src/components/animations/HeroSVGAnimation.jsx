import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CircleSvg from "../../assets/graphics/hero/circle.svg"
import Square1Svg from "../../assets/graphics/hero/square-1.svg"
import Square2Svg from "../../assets/graphics/hero/square-2.svg"
import Square3Svg from "../../assets/graphics/hero/square-3.svg"
import Square4Svg from "../../assets/graphics/hero/square-4.svg"
import Ellipse from "../../assets/graphics/hero/ellipse.svg"

gsap.registerPlugin(ScrollTrigger)

function HeroSVGAnimation() {
  React.useEffect(() => {
    // SET INITIAL POSITIONS
    gsap.set(".square_tl", { x: -50, y: -50 })
    gsap.set(".square_bl", { x: -50, y: 50 })
    gsap.set(".square_tr", { x: 50, y: -50 })
    gsap.set(".square_br", { x: 50, y: 50 })

    // 1. TIME LINE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero_animation-container",
        start: "bottom 95%",
        end: "bottom 60%",
        // markers: true,
        scrub: 1,
      },
    })

    // a. The bottom two squares slide aside, one on the left and one on the right and
    tl.to(".square_bl", { x: -100, duration: 0.5 }, 0).to(
      ".square_br",
      { x: 100, duration: 0.5 },
      0
    )

    // b. The circle starts rolling down.
    tl.to(".circle_hero", { y: 450, duration: 1.5, delay: 0.5 }, 0)

    // c. The ellipse "opens" and "closes" as the circle rolls down.
    tl.fromTo(
      ".ellipse_hero",
      { scaleX: 0, scaleY: 0 },
      { scaleX: 1, scaleY: 1, duration: 0.9 },
      0
    ).to(".ellipse_hero", { scaleX: 0, scaleY: 0, duration: 0.5 }, 2)
  }, [])

  return (
    <div className="hero_animation-container relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <Ellipse className="ellipse_hero absolute w-14 h-14 bottom-0" />

      <CircleSvg className="circle_hero absolute w-10 h-10" />

      <div className="absolute bottom-0 h-[26px] w-20 bg-white"></div>

      <Square1Svg className="square_tl absolute w-20 h-20" />

      <Square2Svg className="square_bl absolute w-20 h-20" />

      <Square3Svg className="square_tr absolute w-20 h-20" />

      <Square4Svg className="square_br absolute w-20 h-20" />
    </div>
  )
}

export default HeroSVGAnimation
