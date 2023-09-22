import { useState } from "react";

import './Carousel.css'

const Carousel = () => {
  return ( 
    <>
      <div className="carousel">
        <button className="carousel-btn"><img src="./leftArrow.png" alt="" /></button>
        <button className="carousel-btn"><img src="./rightArrow.png" alt="" /></button>
      </div>
    </>
  );
}

export default Carousel;