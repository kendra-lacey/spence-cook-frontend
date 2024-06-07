import { useState } from 'react';

import Carousel from '../../components/Carousel/Carousel';

//styling:
import './About.css'

const About = () => {
  const [isMoreTop, setIsMoreTop] = useState(false)
  const [isMoreBttm, setIsMoreBttm] = useState(false)


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


  return ( 
    <>
      <main id='about-main'>
        <div id="artist-div" className="gear-text">
          <img id='gear-artist' className='about-gear' src="./aboutGearRight.svg" alt="" />
          <div className='gear-expandable-spacer'></div>
          {isMoreBttm ? 
          (<>
            <div className="expanded" id="expanded-artist">
              <p>
                As a singer, my goal is to master the art of singing with ease; achieving good pitch, maintaining a pleasing tone, employing a range of tones, adding vibrato, and mastering all those technical elements. I have a deep appreciation for music created by artists I consider true, talented singers. Yet, I also aspire to connect deeply with my audience. I want them to at least grasp my perspective as I share my thoughts through song or spoken word. I aim to make you laugh when I convey humor and evoke profound emotions when you listen to my music. Establishing an emotional and organic connection, I believe, is the most genuine and crucial experience we can offer in this all-too-brief existence.
                <p></p>
                My greatest motivation always stems from kindness and fostering connections that reveal our commonalities as people, transcending our differences.
                <span> </span>
                <a onClick={expandBttmTxt} className="moreLess">less</a>
              </p>
              <a href="/album">
                <img id='about-book-btn' src="./aboutBook.svg" alt="" />
              </a>
            </div>
            </>) 
            : 
            (
            <div className="expandable" id="expandable-artist">
              <p>As a singer, my goal is to master the art of singing with ease; achieving good pitch, maintaining a pleasing tone, employing a range of tones, adding vibrato, and mastering all those technical elements.... 
                <span> </span>
                <a onClick={expandBttmTxt} className="moreLess">more</a>
              </p>
              <a href="/album">
                <img id='about-book-btn' src="./aboutBook.svg" alt="" />
              </a>
            </div>
            )}
        </div>
        <div id='carousel-page-container'>
          <Carousel></Carousel>
        </div>
        <div id="music-div" className="gear-text">
          <img id='gear-music' className='about-gear' src="./aboutGearLeft.svg" alt="" />
          <div className='gear-expandable-spacer'></div>
          {isMoreTop ? 
            (<>
            <div className="expanded" id="expanded-music">
              <p>
                I'd say that my primary motivation these days, the force that truly inspires and guides me, could be likened to a sense of a "midlife crisis," although that might sound a bit intense. As we approach midlife, the awareness of being nearer to the end than the beginning becomes more pronounced. It's natural to question the path we've chosen - have our decisions been right? What opportunities still lie ahead? What experiences have we missed, or what might be out of reach now? Is there any way to recapture a sense of youth before it truly slips away?
                <p></p>
                My album "Rearview" delves deep into these contemplations, exploring these very thoughts and feelings. As an artist who continues to evolve and understand himself, I find myself driven by a newfound commitment to paying attention. I'm focused on recognizing the things that genuinely move and touch us. Why am I drawn to this person? Why does that song bring tears to my eyes? Why do we feel attracted to certain people and things, even when there appears to be no logical explanation, yet it feels more authentic than anything reason can explain? I want to explore the full spectrum of emotions and feelings in life. I want to delve into what truly matters and what ultimately holds no significance in our lives.
                <span> </span>
                <a onClick={expandTopTxt} className="moreLess">less</a>
              </p>
              <a href="/album">
                <img id='listen-btn' src="./listenBtn.svg" alt="" />
              </a>
            </div>
            </>) 
            : 
            (
            <div className="expandable" id="expandable-music">
              <p>I'd say that my primary motivation these days, the force that truly inspires and guides me, could be likened to a sense of a "midlife crisis," although that might sound a bit intense.... 
                <span> </span>
                <a onClick={expandTopTxt} className="moreLess">more</a>
              </p>
              <a href="/album">
                <img id='listen-btn' src="./listenBtn.svg" alt="" />
              </a>
            </div>
            )}
        </div>
      </main>
    </>
  );
}

export default About;