import "../styles/gif.css";
import gif from "../gifs/sage.gif";

export default function Gif() {
  return (
    <div>
      <img 
        src={gif} alt="loading..."
        className="gif-background" />
    </div>
  )

  }