
import './Bookings.css'

const Bookings = () => {
  return ( 
    <main id='book-main'>
      <div id='book-back-container'>
        {/* <div id='book-back-nav'></div> */}
      </div>
      <div className='booking-divs-container'>
      <div className='book-body-container' id='book-body-container-left'>
        <div className='bookings-div' id='upcoming-show'>
          <h1>UPCOMING SHOW</h1>
          <p>SAT DEC 30th | 8:00 PM | Zada's in Margaretville</p>
          <img className='upcoming-show-image'src='/spencezadas1.jpeg' alt='spence playing at zadas'></img>
        </div>
      </div>
      <div className='book-body-container' id='book-body-container-right'>
        <div className='bookings-div' id="blob-book">
          <p>Do you have questions, want to book a show, or collaborate on a new piece? Reach out, and let's make music happen.</p>
          <div id='loc1' className='loc-container'>
            <img className='loc-icon' src="./locationIcon.svg" alt="" />
            <p className='loc-txt'>
              <a className='loc-link' href="https://maps.app.goo.gl/FQrHDNyRiXCw7arL9">Asbury Park, New Jersey</a>
            </p>
          </div>
          <div id='loc2' className='loc-container'>
            <img className='loc-icon' src="./locationIcon.svg" alt="" />
            <p className='loc-txt'>
              <a className='loc-link' href="https://maps.app.goo.gl/zc1386rqe9rMk6cg6">Roxbury, New York</a>
            </p>
          </div>
        </div>
        <div id='book-btn-container'>
          <a id='book-a' href="mailto:SPENCE@SPENCESINGS.com"><img id='book-page-btn' src="./bookingBtn.svg" alt="" /></a>
        </div>
      </div>
      </div>
    </ main>
  );
}

export default Bookings;