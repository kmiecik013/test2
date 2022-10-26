
import "../styles/services.css";
import Slider from "react-slick"; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import individual from '../images/individual.jpeg';
import group from '../images/group.jpeg';
import Card from "./Card";
import CardId1 from "./CardsId/CardId1.jsx";
import CardId2 from "./CardsId/CardId2.jsx";
import CardId3 from "./CardsId/CardId3.jsx";
import CardId4 from "./CardsId/CardId4.jsx";
import CardId5 from "./CardsId/CardId5.jsx";
import Fade from 'react-reveal/Fade';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";




const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
      <button onClick={onClick}>
        <IoIosArrowBack />
      </button>
    )
  }
  
  const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
    return (
      <button onClick={onClick}>
        <IoIosArrowForward />
      </button>
    )
  }

export default function Service() {

  
  
  


return (
  <div className="service-part">
  
    <h1 className="service-title" id="services">Offerings</h1>
  
    <div className="slider-part">

 
    <Carousel
   additionalTransfrom={0}
arrows
   autoPlaySpeed={3000}
   centerMode
   className=""
   containerClass="container"
   dotListClass=""
   showDots
   infinite
   focusOnSelect
   itemClass=""
   keyBoardControl
   minimumTouchDrag={80}
   pauseOnHover
   renderArrowsWhenDisabled={false}
   renderButtonGroupOutside={false}
   renderDotsOutside
   responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1900
      },
      items: 2.3,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1025
      },
      items: 2.3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 376
      },
      items: 0.07,
      partialVisibilityGutter: 30
    },
    mobile2: {
      breakpoint: {
        max: 375,
        min: 0
      },
      items: 0.1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 769
      },
      items: 1.3  ,
      partialVisibilityGutter: 10
    },

    tablet: {
      breakpoint: {
        max: 768,
        min: 463
      },
      items: 1.3,
      partialVisibilityGutter: 10
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable
><CardId1 />
  <CardId2 />
    <CardId3 />
      <CardId4 />
        <CardId5 />
        </Carousel>
  </div>

 </div>
)
}

