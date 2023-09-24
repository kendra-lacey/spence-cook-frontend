import { useState } from "react";

import './AlbumCarousel.css'

const AlbumCarousel = () => {
  const [idx, setIdx] = useState(0)
  const length = 4

  const handlePrev = () => {
    const newIdx = idx -1
    setIdx(newIdx < 0 ? length - 1 : newIdx)
  }

  const handleNext = () => {
    const newIdx = idx +1
    setIdx(newIdx >= length ? 0 : newIdx)
  }


  const albumImgs = [
    './album0.png',
    './album1.png',
    './album2.png',
    './album3.png',
  ]

  return ( 
    <>
      <div id="album-carousel">
        <button id="left-btn" className="carousel-btn" onClick={handlePrev}><img src="./leftArrow.png" alt="" /></button>
          <img id="album-carousel-img" src={albumImgs[idx]} alt="" />
        {/* <div id="carousel-img-container">
        </div> */}
        <button id="right-btn" className="carousel-btn" onClick={handleNext}><img src="./rightArrow.png" alt="" /></button>
      </div>
    </>
  );
}

export default AlbumCarousel;