// npm modules
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// styling

import './NavBar.css'
const linkStyle = {
  color: "black",
};

// const navLink = styled.a`
//   background-color: red;
// `

const NavBar = () => {
  return (
    <nav>
        <ul id='nav-ul'>
          <li className='navlink'>
            <Link to="/" className='link' style={linkStyle}>Home</Link>
          </li>
          <li className='navlink'>
            <Link to="/about" className='link' style={linkStyle}>About</Link>
          </li>
          <li className='navlink'>
            <Link to="/bookings" className='link' style={linkStyle}>Bookings</Link>
          </li>
          <li className='navlink'>
            <Link to="/album" className='link' style={linkStyle}>Album</Link>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar
