
import './Bookings.css'

const Bookings = () => {
  return ( 
    <main id='book-main'>
      <div id='book-back-container'>
        <div id='book-back-nav'></div>
      </div>
      <div id='book-body-container'>
        <div id="blob-book">
          {/* <p>Do you have questions, want to book a show, or collaborate on a new piece? Reach out, and let's make music happen.</p>
          <img id='book-loc' src="./location.png" alt="" /> */}
        </div>
        <a href="mailto:SPENCE@SPENCESINGS.com"><img id='book-page-btn' src="./bookNowBtn.png" alt="" /></a>
      </div>
    </ main>
  );
}

export default Bookings;