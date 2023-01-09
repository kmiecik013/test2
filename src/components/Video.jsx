
import video from "../video/joe.mp4"
import "../styles/video.css"

export default function Video() {

  return (
    <div>
      <video
        type="video/mp4"
        autoPlay={true} 
        loop={true}
        muted defaultmuted playsinline
        className="video-source">
          <source src={video}
          type="video/mp4"/>
          </video> 
    </div>
  )
  }