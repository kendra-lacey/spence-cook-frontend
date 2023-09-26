// npm modules
import { Link } from 'react-router-dom'

// styling
import './NavBar.css'


const NavBar = () => {
  return (
    <nav>
        <ul id='nav-ul'>
          <li className='navlink'>
            <Link to="/" className='link'>Home</Link>
          </li>
          <li className='navlink'>
            <Link to="/about" className='link'>About</Link>
          </li>
          <li className='navlink'>
            <Link to="/bookings" className='link'>Bookings</Link>
          </li>
          <li className='navlink'>
            <Link to="/album" className='link'>Album</Link>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar
