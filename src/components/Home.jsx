
import "../styles/home.css";
import SCtitle from './SCtitle';
import Sage2 from './Sage2';



export default function Home() {
  return (
    <div>
    <div className="home-page" id="home">
      <div className="fade-in-text">
        <p>“I breathe in calmness, I breathe out stress”</p>
      </div>
        <SCtitle />
       
        </div> 
        <Sage2 />
    </div>
  );
}
