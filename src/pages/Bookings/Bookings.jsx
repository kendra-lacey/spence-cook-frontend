
import './Bookings.css'

const Bookings = () => {
  return ( 
    <main id='book-main'>
      <div id='book-back-container'>
        {/* <div id='book-back-nav'></div> */}
      </div>
      <div id='book-body-container-left'>
        <div className='bookings-div' id='upcoming-show'>
          <h1>UPCOMING SHOW</h1>
          <p>SAT NOV 11th | 5:00 PM | Zada's in Margaretville</p>
          <a href="https://calendar.boomte.ch/single/bmhH9W2rM6lqhA8J7tH9eM6?comp_id=comp-lg9brbi0&instance=B0RWCmHB27ex70hpMVtjjHGZM3hMZWy2qJ6cyx65b60I4zJCoN07xe72BeyJpbnN0YW5jZUlkIjoiZmVkYzA5NTUtN2QxZS00YWI5LWEwOTItNzY3NzAxYjljNzI3IiwiYXBwRGVmSWQiOiIxM2I0YTAyOC0wMGZhLTcxMzMtMjQyZi00NjI4MTA2YjhjOTEiLCJzaWduRGF0ZSI6IjIwMjMtMTAtMTFUMTg6Mzc6MTAuNTg5WiIsInZlbmRvclByb2R1Y3RJZCI6IlByZW1pdW0iLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6IjUxYjk0MDMxLWFhNmQtNGUxYS05YzYyLTlhZTI4YTU3YzUzZCIsInNpdGVPd25lcklkIjoiMTQ5NGZmZDAtZTQwYi00NjBhLTk4MjUtMTQwY2Q3OGZhMWUxIn0&startDate=">Click for More Details</a>
        </div>
      </div>
      <div id='book-body-container-right'>
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
    </ main>
  );
}

export default Bookings;