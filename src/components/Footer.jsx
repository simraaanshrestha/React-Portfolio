import React from 'react'
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";


const Footer = () => {
    return (
        <div className="footer">
           
            <div className="hello">
                <div className="say">
                    <button> Say hello ! </button>
                </div> <hr /> <br />
                <div className="icon">
                    <a href=""><GrGithub /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaTwitter /></a>
                </div>
            </div>
            <span>
            <p>Copyright © 2025. All rights reserved. Made by <span style={{color:"#E06330"}}> Simran Shrestha</span></p>
            </span>
        </div>
    )
}

export default Footer