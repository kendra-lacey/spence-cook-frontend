import { useState } from "react";

import './Carousel.css'

const Carousel = () => {
  const [idx, setIdx] = useState(0)
  const length = 6

  const handlePrev = () => {
    const newIdx = idx -1
    setIdx(newIdx < 0 ? length - 1 : newIdx)
  }

  const handleNext = () => {
    const newIdx = idx +1
    setIdx(newIdx >= length ? 0 : newIdx)
  }

  const spenceImgs = [
    './spence0.png',
    './spence1.png',
    './spence2.png',
    './spence3.png',
    './spence4.png',
    './spence5.png',
  ]


  return ( 
    <>
      <div id="carousel">
        <button id="left-btn" className="carousel-btn" onClick={handlePrev}><img src="./leftArrow.png" alt="" /></button>
        <div id="carousel-img-container">
          <img id="carousel-img" src={spenceImgs[idx]} alt="" />
        </div>
        <button id="right-btn" className="carousel-btn" onClick={handleNext}><img src="./rightArrow.png" alt="" /></button>
      </div>
    </>
  );
}

export default Carousel;