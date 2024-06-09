import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
function Carousel({children : slides}) {


  return (
   <div>
     <div>
        {slides.map((slide, index) => {
            <img src={slide} alt="carousel"/>
        })}
        </div>
   </div>
  );
}

export default Carousel;
