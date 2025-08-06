import React from 'react'
import About from './About'
import Projects from './Projects'
import Cards from './Cards'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Home = () => {
  return (
    <>
    <div className="home">
    <div className="details">
      <h1>Hi! My name is <span className="name"> Simran Shrestha</span> <br /> and I am a web developer based in Nepal</h1>
      <button>Learn more</button>
    </div>
    <div className="pic">
      <img src="https://astro-fe-portfolio.netlify.app/_astro/hero.f50e213d_Fme8W.png" alt="" />
    </div>
    {/* <About/> */}
    {/* <Projects/> */}
  </div>
  <div className="about">
            <div className="me">
                <h1><u>About me</u></h1>
            </div>
            <div className="dis">
                <p>I am a Front-End Web Developer !
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

        </div>
        {/* <div className="projects">
                <h1><u>Projects</u></h1>
                <div className="card-container">
                    <Cards
                        image="https://astro-fe-portfolio.netlify.app/_astro/project.d2edbfe1_ZuohRd.png"
                        title="Project 1"
                        description=" Project description."
                        
                    />
                    <Cards
                        image="https://astro-fe-portfolio.netlify.app/_astro/project.d2edbfe1_ZuohRd.png"
                        title="Project 2"
                        description=" Project description."

                    />
                    <Cards
                        image="https://astro-fe-portfolio.netlify.app/_astro/project.d2edbfe1_ZuohRd.png"
                        title="Project 3"
                        description=" Project description."

                    />
                </div>
                <a href="">
            <p>View full private projects archive </p><IoIosArrowRoundForward className='right'/><br /><br /><br />
            </a>
            </div> */}
    </>
  
  )
}

export default Home