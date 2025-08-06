import React from 'react'
import Cards from './Cards'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Projects = () => {
    return (
        <>
            <div className="projects">
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
            </div>
        </>
    )
}

export default Projects