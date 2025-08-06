import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav>
    <div className="cv">
        <button>Download CV</button>
    </div>
    <div className="nav">
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
                {/* <Link to="/skills">Skills</Link>               */}
            <li> <Link to="/projects">Skills</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li>
            </li>
            

        </ul>
    </div>
</nav>
  )
}

export default Navbar