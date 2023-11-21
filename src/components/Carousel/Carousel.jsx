import { useState } from "react";

import './Carousel.css'

const Carousel = () => {
  const [idx, setIdx] = useState(0)
  // const [isMoreTop, setIsMoreTop] = useState(false)
  // const [isMoreBttm, setIsMoreBttm] = useState(false)
  const length = 7

  const handlePrev = () => {
    const newIdx = idx -1
    setIdx(newIdx < 0 ? length - 1 : newIdx)
  }

  const handleNext = () => {
    const newIdx = idx +1
    setIdx(newIdx >= length ? 0 : newIdx)
  }

  // const expandTopTxt = () => {
  //   if (isMoreTop) {
  //     setIsMoreTop(false)
  //   } else {
  //     setIsMoreTop(true)
  //   }
  // }
  // const expandBttmTxt = () => {
  //   if (isMoreBttm) {
  //     setIsMoreBttm(false)
  //   } else {
  //     setIsMoreBttm(true)
  //   }
  // }

  const spenceImgs = [
    './spence0.png',
    './spence1.jpeg',
    './spence2.jpeg',
    './spence3.png',
    './spence4.jpeg',
    './spence5.png',
    './spence6.png',
  ]


  return ( 
    <>
      <div id="carousel">
        <div className="btn-container">
          <button id="left-btn" className="carousel-btn" onClick={handlePrev}>
            <img src="./leftArrow.svg" alt="" /></button>
        </div>
        <div id="carousel-img-container">
          <img id="carousel-img" src={spenceImgs[idx]} alt="" />
        </div>
        <div className="btn-container">
          <button id="right-btn" className="carousel-btn" onClick={handleNext}>
            <img src="./rightArrow.svg" alt="" /></button>
        </div>
      </div>
    </>
  );
}

export default Carousel;