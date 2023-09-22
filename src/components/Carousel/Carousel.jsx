import { useState } from "react";

import './Carousel.css'

const Carousel = () => {
  const [idx, setIdx] = useState(0)
  const [isMoreTop, setIsMoreTop] = useState(false)
  const [isMoreBttm, setIsMoreBttm] = useState(false)
  const length = 6

  const handlePrev = () => {
    const newIdx = idx -1
    setIdx(newIdx < 0 ? length - 1 : newIdx)
  }

  const handleNext = () => {
    const newIdx = idx +1
    setIdx(newIdx >= length ? 0 : newIdx)
  }

  const expandTopTxt = () => {
    if (isMoreTop) {
      setIsMoreTop(false)
    } else {
      setIsMoreTop(true)
    }
  }
  const expandBttmTxt = () => {
    if (isMoreBttm) {
      setIsMoreBttm(false)
    } else {
      setIsMoreBttm(true)
    }
  }

  const spenceImgs = [
    './spence0.png',
    './spence1.png',
    './spence2.png',
    './spence3.png',
    './spence4.png',
    './spence5.png',
  ]

    console.log(isMoreTop)

  return ( 
    <>
      <div id="carousel">
        <img id='gear-left' className='about-gear' src="./aboutGearLeft.png" alt="" />
        {isMoreTop ? 
        (<>
        <div className="big-blob-div" id="big-blob-left">
          <p>
        My main drive now, my primary inspiration and guiding force, can be best described as a sense of nearing midlife, although that term might be a bit strong. Reaching this stage, you become acutely aware that you're closer to the end than the beginning. You begin to question your life - have I made the right choices? What choices are still open to me? What did I miss, and what am I running out of time for? Is there any aspect of youth I can still grasp, experience, touch, or savor before it truly slips away? My album, "Rearview," quite literally delves into these themes.
        As an artist who continues to evolve and understand himself, I find myself driven by a newfound commitment to paying attention. I'm focused on recognizing the things that genuinely move and touch us. Why am I drawn to this person? Why does that song bring tears to my eyes? Why do we feel attracted to certain people and things, even when there appears to be no logical explanation, yet it feels more authentic than anything reason can explain? I want to explore the full spectrum of emotions and feelings in life. I want to delve into what truly matters and what ultimately holds no significance in our lives. <a onClick={expandTopTxt} className="moreLess">less</a></p>
          <a href="/album"><img id='listen-btn' src="./listenBtn.png" alt="" /></a>
        </div>
        </>) 
        : 
        (
        <div className="blob-div" id="blob-left">
          <p>My main drive now, my primary inspiration and guiding force, can be best described as a sense of nearing midlife, although that term might be a bit strong. Reaching this stage.... <a onClick={expandTopTxt} className="moreLess">more</a></p>
          <a href="/album"><img id='listen-btn' src="./listenBtn.png" alt="" /></a>
        </div>
        )}
        {isMoreBttm ? 
        (<>
          <div className="big-blob-div" id="big-blob-right">
            <p>
              As a singer, my goal is to master the art of singing with ease - achieving good pitch, maintaining a pleasing tone, employing a range of tones, adding vibrato, and mastering all those technical elements. I have a deep appreciation for music created by artists I consider true, talented singers, as opposed to the prevailing trend of "whispery" singing often found among young indie artists today (simply not my preference). Yet, I also aspire to connect deeply with my audience. I want them to at least grasp my perspective as I share my thoughts through song or spoken word. I aim to make you laugh when I convey humor and evoke profound emotions when you listen to my music. Establishing an emotional and organic connection, I believe, is the most genuine and crucial experience we can offer in this all-too-brief existence.
              My greatest motivation always stems from kindness and fostering connections that reveal our commonalities as people, transcending our differences <a onClick={expandBttmTxt} className="moreLess">less</a></p>
          <a href="/album"><img id='listen-btn' src="./listenBtn.png" alt="" /></a>
        </div>
        </>) 
        : 
        (
          <div className="blob-div" id="blob-right">
            <p>
              As a singer, my goal is to master the art of singing with ease - achieving good pitch, maintaining a pleasing tone, employing a range of tones, adding... <a onClick={expandBttmTxt} className="moreLess">more</a>
            </p>
            <a href="mailto:SPENCE@SPENCESINGS.com"><img id='about-book-btn' src="./aboutBook.png" alt="" /></a>
          </div>
        )}
        <img id='gear-right' className='about-gear' src="./aboutGearRight.png" alt="" />
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