import React from 'react'
import Cards from './Cards'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Projects = ({theme}) => {
    return (
        <>
            <div style = {{background : theme === 'dark' ? '#000' : '#fff' , color : theme === 'dark' ? '#000' : '#fff'}}className="projects"  >
                <h1>Projects</h1>
                <div className="card-container">
                    <Cards
                        // image="https://astro-fe-portfolio.netlify.app/_astro/project.d2edbfe1_ZuohRd.png"
                        image="./todo.png"
                        title="Todo List"
                        description=" A simple todo list application built with React and Tailwind CSS. It allows users to add, delete, and mark tasks as completed."
                        
                    />  
                    <Cards
                        image="./travel.png"
                        title="Travel Website"
                        description=" A travel website that showcases various destinations, allowing users to explore and plan their trips. Built with HTML, CSS and JavaScript."

                    />
                    <Cards
                        image="./dating.png"
                        title="Dating App"
                        description=" A dating application that connects users based on their interests and preferences. Built with HTML, CSS and JavaScript."

                    />
                    <Cards
                        image="./emp.png"
                        title="Job Finding Website"
                        description=" A job finding website that helps users search for job opportunities and apply for them. Built with HTML, CSS and JavaScript."

                    />
                    <Cards
                        image="./teditor.png"
                        title="Text Editor"
                        description=" A text editor application that allows users to create and edit text documents. It includes features like syntax highlighting and code formatting."

                    />
                    <Cards
                        image="./cleaning.png"
                        title="Cleaning Service"
                        description=" A cleaning service website that allows users to book cleaning services online. It includes features like service selection, booking, and payment."

                    />
                </div>
                <a href="">
            <p className="view"style={{fontSize:"15px"}}>View full private projects archive <IoIosArrowRoundForward className='right'/></p>
            </a>
            </div>
        </>
    )
}

export default Projects