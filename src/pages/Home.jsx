import React from 'react'
import About from './About'
import Projects from './Projects'
import Cards from './Cards'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Skill from '../data/Skill'
import Skills from './Skills'
import Footer from '../components/Footer'
import { PiX } from 'react-icons/pi'
// import './Home.css'

const Home = ({ theme }) => {

  return (
    <>
      <div style={{ background: theme === 'dark' ? '#000' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }} className="home">
        <div className="details">
          <h4>Hello ! My name is</h4>
          <h1> <span className="name"> Simran Shrestha</span></h1>
          <h3>I am a Web Developer </h3>
          <button>Download CV</button>
        </div>
        <div className="pic">
          {/* <img src="https://astro-fe-portfolio.netlify.app/_astro/hero.f50e213d_Fme8W.png" alt="" /> */}
          <img src="./public/me.png" alt="" />
        </div>

      </div>
      <About theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme}/>
      <Footer theme={theme}/>
    </>

  )
}

export default Home