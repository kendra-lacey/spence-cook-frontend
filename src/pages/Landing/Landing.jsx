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
          <img className='musicLink' src="./Spotify.png" alt="" />
          <img className='musicLink' src="./pandora.png" alt="" />
          <img className='musicLink' src="./amazonMusic.png" alt="" />
          <img className='iHeartLink' src="./iHeart.png" alt="" />
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
