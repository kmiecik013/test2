import art from "../images/art.jpeg";
import art2 from "../images/newsage.jpg";
import Card from "react-bootstrap/Card";
import art3 from "../images/art3.jpg";
import Sage from "./Sage";
import "../styles/about.css";
import { GiLindenLeaf } from "react-icons/gi";
import { IoLeafOutline } from "react-icons/io5";
import { Parallax } from "react-parallax";

export default function About() {
  return (
    <div className="about-section" id="about">
      <Sage />

      <div className="about-page-structure">
        <div className="title-strcuture">
          <h2 className="art-subtitle">What is Art Therapy?</h2>

          <img className="mobile-pic" src={art3} />

          <div className="text-on-left">
            <p className="art-therapy-description atd1">
              Art Therapy is a therapeutic modality that uses the creative
              process of art making as a vehicle to improvement in ones
              physical, emotional, spiritual, and mental health. The process of
              creating art and reflecting on themes and metaphors with the help
              of the art therapist can bring forth inner thoughts and feelings
              that may otherwise be difficult to articulate in words.{" "}
            </p>
            <p className="art-therapy-description atd2">
              You do not have to be an artist to benefit from art therapy. In
              art therapy the emphasis is based on the process and
              self-expression, not the final product. Art therapy also aligns
              with the belief that everyone is innately creative.
            </p>

            <div className="green-leaves">
              <IoLeafOutline className="single-green-leaf-about"></IoLeafOutline>
              <IoLeafOutline className="single-green-leaf-about"></IoLeafOutline>
              <IoLeafOutline className="single-green-leaf-about"></IoLeafOutline>
            </div>
          </div>
        </div>
        <div>
          <img className="sage-img" src={art} />
          <div>
            <div className="bottom-image">
              <img className="sage-img2" src={art2} />
            </div>
          </div>
        </div>
      </div>

      <Sage />
    </div>
  );
}
