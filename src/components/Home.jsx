import "../styles/home.css";
import SCtitle from "./SCtitle";
import Sage2 from "./Sage2";
import Video from "./Video";
import Gif from "./Gif";
import "../styles/video.css";

export default function Home() {
  return (
    <div>
      <h1 className="tranquility-title">Let Art be your Peace </h1>
      <h1 className="tranquility-title2">Let Art be</h1>
      <h1 className="tranquility-title3"> your Peace </h1>
      <div className="home-overlay">
        <div className="home-page" id="home">
          <Video />
          <Gif />
        </div>
      </div>
    </div>
  );
}