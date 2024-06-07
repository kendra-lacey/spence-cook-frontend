
import './Bookings.css'

const Bookings = () => {
  return ( 
    <main id='book-main'>
      <div id='book-back-container'>
        {/* <div id='book-back-nav'></div> */}
      </div>
      <div className='booking-divs-container'>
      {/* <div className='book-body-container' id='book-body-container-left'>
        <div className='bookings-div' id='upcoming-show'>
          <h1>UPCOMING SHOW</h1>
          <p>SAT APRIL 6th | 7:30 PM | Zada's in Margaretville</p>
          <a href="https://www.google.com/maps/dir//850+Main+St,+Margaretville,+NY+12455/@42.1491146,-74.7293745,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89dc61bd0d861083:0xbba0eb47349c275d!2m2!1d-74.6470009!2d42.1491767?entry=ttu">Click for Address</a>
        </div>
      </div> */}
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