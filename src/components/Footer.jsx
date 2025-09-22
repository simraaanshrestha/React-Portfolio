import React from 'react'
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";


const Footer = ({theme}) => {
    return (
        <div style = {{background : theme ==='dark' ? '#000' : '#fff', color : theme === 'dark' ? '#000' : '#fff'}}   className="footer">
           
            <div className="hello">
                <div className="say">
                    <button> Say Hello ! </button>
                </div> <hr /> <br />
                <div style = {{background : theme ==='dark' ? '#000' : '#fff', color : theme === 'dark' ? '#000' : '#fff'}} className="icon">
                    
                    <a href="https://github.com/simraaanshrestha"><GrGithub className='icoon'  style={{color: theme === 'dark' ? '#fff' : '#000'}} /></a>
                    <a href="https://www.linkedin.com/"><FaLinkedin  className='icoon'  style={{color: theme === 'dark' ? '#fff' : '#000'}}/></a>
                    <a href="https://web.whatsapp.com/`"><MdWhatsapp  className='icoon' style={{fontSize:"70px" , color: theme === 'dark' ? '#fff' : '#000'}} /></a>
                    <a href="https://www.instagram.com/"><SlSocialInstagram  className='icoon'style={{fontSize:"50px", marginBottom:"5px", color: theme === 'dark' ? '#fff' : '#000'}}/></a>
                </div>  
            </div>
            <span>
            <p>Copyright © 2025. All rights reserved. Made by <span className='simran'> Simran Shrestha</span></p>
            </span>
        </div>
    )
}

export default Footer