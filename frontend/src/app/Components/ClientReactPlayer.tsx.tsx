import type React from "react"
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const ReactPlayerComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <ReactPlayer url="https://www.youtube.com/watch?v=xyz123" width="600px" height="340px" controls />
    </div>
  )
}

export default ReactPlayerComponent

