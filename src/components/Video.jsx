
import video from "../video/joe.mp4"
import "../styles/video.css"

export default function Video() {

  return (
    <div>
      <video
        type="video/mp4"
        autoPlay={true} 
        loop={true}
        muted={true}
        playsincline={true}
        className="video-source">
          <source src={video}/>
          </video>
 
    </div>
  )

  }