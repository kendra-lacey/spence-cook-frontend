
import './Bookings.css'

const Bookings = () => {
  return ( 
    <main id='book-main'>
      <div id='book-back-container'>
        {/* <div id='book-back-nav'></div> */}
      </div>
      <div id='book-body-container'>
        <div id="blob-book">
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
              <a className='loc-link' href="https://maps.app.goo.gl/1tWUF5p49v8maowR9">Roxbury, New Jersey</a>
            </p>
          </div>
        </div>
        <div id='book-btn-container'>
          <a id='book-a' href="mailto:SPENCE@SPENCESINGS.com"><img id='book-page-btn' src="./bookingBtn.svg" alt="" /></a>
        </div>
      </div>
    </ main>
  );
}

export default Bookings;