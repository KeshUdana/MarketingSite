import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export const setupAnimations = (
  sectionElement: HTMLElement,
  bgElement: HTMLDivElement,
  titleElement: HTMLHeadingElement,
  subtitleElement: HTMLParagraphElement,
  featureElements: HTMLDivElement[],
) => {
  gsap.to(bgElement, {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: sectionElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
  // Animate in the title and subtitle
  gsap.from([titleElement, subtitleElement], {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: sectionElement,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
  })

  // Staggered reveal for feature cards
  featureElements.forEach((el, index) => {
    gsap.set(el, { autoAlpha: 0, y: 50 })

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () => {
        gsap.to(el, {
          duration: 0.8,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          delay: index * 0.50,
        })
      },
      onLeaveBack: () => {
        gsap.to(el, {
          duration: 0.8,
          autoAlpha: 0,
          y: 50,
          ease: "power3.in",
        })
      },
    })
    // Floating animation for icons
    const iconElement = el.querySelector(".icon-container")
    if (iconElement) {
      gsap.to(iconElement, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }
  })
}

