
import video from "../video/Sage.mp4"
import "../styles/video.css"

export default function Video() {

  return (
    <div>
      <video src={video} 
        type="video/mp4"
        autoPlay 
        loop
        muted
        className="video-source"/>
 
    </div>
  )

  }