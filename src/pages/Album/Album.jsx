
import './Album.css'

const Album = () => {
  return ( 
    <main id='album-main'>
      <div id='embed-div'>
        <h1>Rearview</h1>
        <p>Released in November 2022</p>
        <div></div>
        <div id='media-links'></div>
      </div>
      <div id='about-album-container'>
        <h1>Behind the music...</h1>
        <div id='album-carousel'></div>
        <div id='album-info'>
          <p>In early 2020, Spence resolved to create his debut album. Then the pandemic struck, prompting deep contemplation during quarantine.
          <br />
          "Rearview" delves into midlife, where you ponder the years passed, grasp aging's reality, and cherish the preciousness of time, assessing past, present, and future endeavors.</p>
        </div>
      </div>
    </ main>
  );
}

export default Album;