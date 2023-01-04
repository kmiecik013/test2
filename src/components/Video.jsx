
import video from "../video/joe.mp4"
import "../styles/video.css"

export default function Video() {

  return (
    <div>
      <video
type="video/mp4"
defaultMuted autoplay controls
autoPlay="autoplay"
loop muted playsinline
className="video-source">
  <source src={video}
  type="video/mp4"/>
  </video>

    </div>
  )

  }