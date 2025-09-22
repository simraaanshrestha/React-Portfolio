import React from 'react'

const About = ({theme}) => {
    return (
        <div style = {{background : theme ==='dark' ? '#000' : '#fff', color : theme === 'dark' ? '#000' : '#fff'}}   className="about">
            <div className="me">
                <h1>About me</h1>
                <h3>Web <span className="d">Developer</span></h3>
            </div>
            <div className="dis">
                <p>I am a passionate Frontend Web Developer with a keen eye for design and a strong commitment to creating responsive, accessible, and user-friendly digital experiences. My expertise includes HTML, CSS, JavaScript, and modern frameworks, allowing me to create interactive interfaces that enhance user experience. I combine clean, efficient code with creative design to bring ideas to life, ensuring functionality and aesthetics work hand in hand. Continuously learning and staying updated with industry trends, I aim to deliver high-quality, scalable solutions that help brands and businesses connect effectively with their audiences in the ever-evolving digital world.</p>
            </div>
            <button>Lets Talk</button>

        </div>

    )
}

export default About