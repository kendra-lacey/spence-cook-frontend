// css
import styles from './Landing.module.css'
import './Landing.css'

const Landing = () => {
  return (
    <main id='landing-main' className={styles.container}>
      <img src="./SpenceCookLanding.png" alt="Stylized image of musician Spence Cook" className={styles.landingImg}/>
      <div id='splashTxt-container'>
        <h1 className='splashTxt'>Spence Cook</h1>
        <p className='splashTxt'>Life's detour led Spence away from his singing dreams, but mid-life served as his GPS back to the stage.</p>
        <div id='musicLink-container'>
          <a href="https://open.spotify.com/album/0oynh8lZzhbRoI01aR1hCv">
            <img className='musicLink' src="./Spotify.png" alt="" />
          </a>
          <a href="https://www.pandora.com/artist/spence-cook/rearview/ALbbbw7dl5n6qqP">
            <img className='musicLink' src="./pandora.png" alt="" />
          </a>
          <a href="https://www.amazon.com/dp/B0BNL23527/ref=sr_1_4?keywords=spence+cook+rearview&qid=1670773727&sprefix=Spence+Cook+%2Caps%2C69&sr=8-4">
            <img className='musicLink' src="./amazonMusic.png" alt="" />
          </a>
          <a href="https://www.iheart.com/artist/spence-cook-39264727/">
            <img className='iHeartLink' src="./iHeart.png" alt="" />
          </a>
        </div>
        <div>
          {/* <button id='bookBtn'>Book Now</button> */}
          <a href="mailto:SPENCE@SPENCESINGS.com"><img id='book-btn' src="./bookNowBtn.png" alt="" /></a>
        </div>
      </div>
    </main>
  )
}

export default Landing
