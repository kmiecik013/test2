import {useEffect, useState} from 'react'
import "../styles/backtotop.css"
import { BiUpArrow } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";



export default function BacktoTop() {

  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 100) {
        setBackToTop(true)  
      } else {
        setBackToTop(false)
      }
    })
  })

  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }


  return (

    <div className="uptotop-button">

    {backToTop && (
      <button className="uptotop-button"
      onClick={scrollUp}><IoIosArrowUp />
        
        </button>
    )}
   
    </div>
  
 )}
    
    
  
