import type React from "react"
import { useEffect, useRef } from "react"

const AutoPlayVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play()
        } else {
          videoRef.current?.pause()
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)

    const currentContainer = containerRef.current
    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="flex justify-center items-center py-12 max-w-4xl mx-auto">
      <video ref={videoRef} className="w-full h-auto" loop muted playsInline preload="metadata">
        <source src="./images/modde.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default AutoPlayVideo
