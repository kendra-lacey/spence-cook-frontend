// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
// import Signup from './pages/Signup/Signup'
// import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
// import Profiles from './pages/Profiles/Profiles'
// import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
// import * as authService from './services/authService'

// styles
import './App.css'

function App() {
  // const [user, setUser] = useState(authService.getUser())
  // const navigate = useNavigate()

  // const handleLogout = () => {
  //   authService.logout()
  //   setUser(null)
  //   navigate('/')
  // }

  // const handleAuthEvt = () => {
  //   setUser(authService.getUser())
  // }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Landing />} />
        <Route path="/bookings" element={<Landing />} />
        <Route path="/album" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
