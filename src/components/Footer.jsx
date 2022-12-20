import "../styles/footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { IoMapSharp } from "react-icons/io5";
import PT from "../images/PT.png";
import logo from '../images/sage2.png';
import flag from '../images/flag.png';
import Leaves from '../images/leavesOverlay2.png';

export default function Footer() {

  return (

    <div className="main-footer-section">

        <img
            className="footer-leaves-image"
            src= {Leaves} />

      <div className="column-organization"> 

        <div className="company-column">
          <img
            href="#home"
            className="footer-logo-image"
            src= {logo} />
    
          
            <img
            className="footer-flag-image"
            src= {flag} />
          
        </div>

        <div className="about-column">
            <h1 className="subtitle">About</h1>
            <div className="footer-list">
            <a className="about-list-item" href="/">Home</a>
            <a className="about-list-item" href="#about">About</a>
            <a className="about-list-item" href="#therapist">Taylor Bio</a>
            <a className="about-list-item" href="#services">Offerigs</a>
            <a className="about-list-item" href="#contact">Email Us</a>
            </div>
        </div>

        <div className="services-column">
          <h1 className="subtitle">Services</h1>
          <div className="footer-list">
          <a className="service-list-item" href="#services">Individual</a>
          <a className="service-list-item" href="#services">Workshops</a>
          <a className="service-list-item" href="#services">Group Therapy</a>
          <a className="service-list-item" href="#services">Mini Cooper</a>
          <a className="service-list-item" href="#services">Team Building</a>
          </div>
        </div>

        <div className="contact-column">

          

          <div className="main-contact">
              
              <div className="name-pic-pair">
                <IoMapSharp className="left-tag" />
                <p className="info-text">Calgary, Alberta, Canada hello </p>
              </div> 
              <div className="name-pic-pair">
                <FaPhoneAlt className="left-tag" />
                <p className="info-text phone-number">(416) 570 9210</p>
              </div>
              <div className="name-pic-pair name-pic-pair-email">
                <MdEmail className="left-tag" />
                <p className="info-text sage-email">sageandcedar.arttherapy@gmail.com</p>
              </div>
          </div><div className="social-media-tags">
            <a
            href="https://www.instagram.com/sageandcedar.arttherapy/?hl=en"target="_blank"
            className="sm-tag"
            >
              <BsInstagram 
              className="instagram">
                </BsInstagram >
            </a>  
            <a
              href="https://www.facebook.com/sageandcedararttherapy/"target="_blank"
              className="sm-tag"> 
              <BsFacebook 
              className="facebook">
              </BsFacebook>
            </a>
            
            <a
                href="https://www.psychologytoday.com/ca/therapists/tayler-schenkeveld-indigenous-art-therapist-calgary-ab/722108"target="_blank"
                className="sm-tag"
              >
                <img className="psycology-pic" src={PT} />
              </a>
          
          </div>
        </div>
     
      
    </div>
      <h3 className="copywrite"> @Copyright Sage and Cedar Art Therapy – All rights reserved </h3>
    </div>
  );
}
