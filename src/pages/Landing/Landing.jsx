// css
import './Landing.css'


import ScrollingBanner from '../../components/ScrollingBanner/ScrollingBanner';

const Landing = () => {
  return (
    <main id='landing-main'>
        <ScrollingBanner message="Upcoming Event: Playing Live @  Zada's in Margaretville on August 17th @ 8PM" link="/bookings" />
      <div className='landing-background'>
          <img id='landing-img' src="./landingImg.png" alt="Stylized image of musician Spence Cook"/>
      </div>
      <div id='splashTxt-container'>
        <div>
          <h1 id='splash-title' className='splashTxt'>Spence Cook</h1>
          <p id='splashTxt'>Life's detour led Spence away from his singing dreams, but mid-life served as his GPS back to the stage.</p>
        </div>
        <div id='musicLink-container'>
          <a href="https://open.spotify.com/album/0oynh8lZzhbRoI01aR1hCv">
            <img className='musicLink' src="./Spotify.svg" alt="" />
          </a>
          <a href="https://www.pandora.com/artist/spence-cook/rearview/ALbbbw7dl5n6qqP">
            <img className='musicLink' src="./pandora.svg" alt="" />
          </a>
          <a href="https://www.amazon.com/dp/B0BNL23527/ref=sr_1_4?keywords=spence+cook+rearview&qid=1670773727&sprefix=Spence+Cook+%2Caps%2C69&sr=8-4">
            <img className='musicLink' src="./amazonMusic.svg" alt="" />
          </a>
          <a href="https://www.iheart.com/artist/spence-cook-39264727/">
            <img className='musicLink' src="./iHeart.svg" alt="" />
          </a>
        </div>
        <div>
          <a href="mailto:SPENCE@SPENCESINGS.com">
            <img id='book-btn' src="./bookNowBtn.png" alt="" />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Landing
