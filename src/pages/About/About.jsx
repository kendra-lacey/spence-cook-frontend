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
              Spence grew up in Virginia Beach, VA. He spent his young years working with his family in
the flower business. A desire to perform drew him away from Virginia and landed him in
Manhattan. Covering pop songs, Spence performed regularly for years on cabaret stages in
the city including Don’t Tell Mama, The Duplex, and The Slipper Room. Jobs and life
circumstances led him away from the stage and landed him at the Jersey Shore. As he
approached his 50th birthday, he realized that he really needed to start performing again.
Spence went back to vocal coaching to get his voice in shape and began writing his own
songs. In 2022, he released his debut album “Rearview” which is available on all music
streaming platforms. Spence now accompanies himself on keyboard and has been
performing regularly in various venues in Delaware County in the Catskills. He is currently
working on material for a new album project.
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
              <p>Spence grew up in Virginia Beach, VA. He spent his young years working with his family in
the flower business. A desire to perform drew him away from Virginia and landed him in
Manhattan. Covering pop songs, Spence performed regularly for years on cabaret stages in
the city including Don’t Tell Mama, The Duplex, and The Slipper Room..... 
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
                “My album ‘Rearview’ explores midlife. When you face the reality that you’re nearer the end
                than the beginning, you begin to pay more attention and also to question your life. Have I
                made good choices? What did I miss? What lies ahead? Currently, I find myself more and
                more fascinated with who and what moves us, touches us. Why am I drawn to this person?
                What does that song bring tears to my eyes? I’m interested in understanding what touches
                me personally, as well as how we connect with and share feelings with others. Sometimes
                what we feel is more authentic and makes more sense than anything reason can explain.”
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