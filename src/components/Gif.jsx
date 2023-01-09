import "../styles/gif.css"
import sage from "../gifs/bigSage.gif"

export default function Gif() {
  return (
    <div>
      <img 
        src={sage} alt="loading..."
        className="gif-background" />
    </div>
  )

  }