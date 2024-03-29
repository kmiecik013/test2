import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import { GiLeafSkeleton } from "react-icons/gi";
import Sage2 from "./Sage2";
import { IoLeafOutline } from "react-icons/io5";



const Result = () => {
  return (
    <p className="result-message"> Your message has been successfully sent. I will contact you soon! </p>
  );
};

export default function Contact() {
  const form = useRef();

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3zhrxq",
        "template_yzvaspq",
        form.current,
        "jQJ_duO8lZL-VTV4o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false)
  }, 7000);

  return (
    <div >
      <div className="contact-one">
          <h1 className="contact-main-title" id="contact">Contact</h1> 

        <form className="form-structure" ref={form} onSubmit={sendEmail}>

          <div className="top-layer">
            
           
          <div className="subtitles">
          <h1 className="contact-subtitle1">
            Ready to take the next step? </h1>
            <h1 className="subtitle2">Send us a message!
          </h1>
          </div> 
  
          </div>
          <div className="more-structure">
          
            <div className="contact-methods-left">
              <div className="specific-contact-method left">
                <input
                  type="text"
                  name="fullName"
                  placeholder="First & Last Name"
                  className="input"
                />
              </div>
              <div className="specific-contact-method left">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="specific-contact-method left">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input"
                />
              </div> 
              
              <input type="submit" value="Submit" className="submit-button submit-position1" />
             
            </div>
            <div>
              <textarea
                name="message"
                className="message-box"
                placeholder="Message"
              />
              <div className="result-text result1">{result ? <Result /> : null}</div>
              </div>
              
           
              
            </div>
              <div className="send-and-result"> 

              <input type="submit" value="Submit" className="submit-button submit-position2" />
              <div className="result-text result2">{result ? <Result /> : null}</div>
            
               
                
            </div>
            
        </form>

        <Sage2 
        className="contact-sage">
          </Sage2>
      </div>
    
    </div>
  );
}
