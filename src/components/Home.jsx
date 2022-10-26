
import "../styles/home.css";
import SCtitle from './SCtitle';
import Sage from './Sage';



export default function Home() {
  return (
    <div className="home-page" id="home">
      <div className="fade-in-text">
        <p>“I breathe in calmness, I breathe out stress”</p>
      </div>
        <SCtitle />
        <Sage />
    </div>
  );
}
