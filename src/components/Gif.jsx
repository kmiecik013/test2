import "../styles/gif.css"
import sage from "../gifs/leaves.gif"

export default function Gif() {
  return (
    <div>
      <img 
        src={sage} alt="loading..."
        className="gif-background" />
    </div>
  )

  }