// npm modules
// import { useState } from 'react'
import { Routes, Route, 
  // useNavigate 
} from 'react-router-dom'

// pages
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Bookings from './pages/Bookings/Bookings'
import Album from './pages/Album/Album'

// components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'




// styles
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/album" element={<Album />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
