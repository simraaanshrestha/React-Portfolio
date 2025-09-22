import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'
import { PiSunThin , PiMoon} from "react-icons/pi";
import './Navbar.css'; 

const Navbar = ({theme,setTheme}) => {
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }
    return (
        <div className="nav">
            <nav>
                <div className="cv">
                    {/* <button>Download CV</button> */}
                    <h1> Portfo<span className="lio">lio</span></h1>
                </div>
                <div className="nav">
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/about">About</Link></li>
                        <li> <Link to="/skills">Skills</Link></li>
                        <li> <Link to="/projects">Projects</Link></li>
                        <li> <Link to="/contact">Contact</Link></li>
                        <li>
                            {theme === 'dark' ?
                                <PiSunThin onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "30px", color: "white" }} />
                                :
                                <PiMoon onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "30px", color: "black" }} />
                            }
                        </li>


                    </ul>
                </div>
            </nav>
            <hr style={{ width: "100%" }} />
        </div>
    )
}

export default Navbar