// import React from 'react'
// import { FaHtml5 } from "react-icons/fa";
// import Cards from './Cards';

// const Skills = (props) => {
//   return (
//     <div class="box">
//     <div class="skill-container">
//        <Cards
//         icon= {FaHtml5 }
//         title = "HTML"
//         description ="Every website should be built with two primary goals: Firstly, it needs to work across all
//         devices. Secondly, it needs to be fast as possible."
//         button = "Read More"
//    />
//     <Cards
//         icon= {FaHtml5 }
//         title = "CSS"
//         description ="Every website should be built with two primary goals: Firstly, it needs to work across all
//         devices. Secondly, it needs to be fast as possible."
//         button = "Read More"
//    />
//     <Cards
//         icon= {FaHtml5 }
//         title = "JAVACSRIPT"
//         description ="Every website should be built with two primary goals: Firstly, it needs to work across all
//         devices. Secondly, it needs to be fast as possible."
//         button = "Read More"
//    />
//     <Cards
//         icon= {FaHtml5 }
//         title = "REACT"
//         description ="Every website should be built with two primary goals: Firstly, it needs to work across all
//         devices. Secondly, it needs to be fast as possible."
//         button = "Read More"
//    />
        
//         {/* <h5>HTML </h5>
//         <div class="pra">
//             <p>Every website should be built with two primary goals: Firstly, it needs to work across all
//                 devices. Secondly, it needs to be fast as possible.</p>
//             <p style="text-align: center;">
//                 <a href="" class="button">Read More</a>
//             </p>
//         </div> */}
//     </div>
    
// </div>
//   )
// }

// export default Skills



import React from 'react'
import { FaCogs } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Skill from '../data/Skill';
import Cards from './Cards';
import SkillCard from '../components/SkillCard';

const Skills = ({theme}) => {
  return (
    <div >
      <section id='skills' className='skill'style = {{background : theme ==='dark' ? '#000' : '#fff', color : theme === 'dark' ? '#000' : '#fff'}} >
        <h2 className='skills-title'>
           {/* <FaCogs className='cogs' /> */}
           Skills 
        </h2>
        {/* <ul className='skills-list'>
            <li id='html'>
                <img width={300} height={300} src="https://static.vecteezy.com/system/resources/thumbnails/013/313/458/small_2x/html-icon-3d-rendering-illustration-free-vector.jpg" alt="HTML" />
                <br />
                <a href="https://www.w3schools.com/html/default.asp" className='code'><FaCode />HTML</a>
            </li>
            <li id='css'>
                <img width={300} height={300} src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS" /><br />
                <a href="https://www.w3schools.com/css/default.asp" className='code'><FaCode />CSS</a>
            </li>
            <li id='js'>
                <img width={300} height={300} src="https://skillforge.com/wp-content/uploads/2020/10/javascript-266x300.png" alt="JavaScript" /><br />
                <a href="https://www.w3schools.com/js/default.asp" className='code'><FaCode />JavaScipt</a>
            </li>
            <br /><br />  
            <br />  
            <li id='java'>
                <img width={300} height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmoRHovHXQ5JdGdOdt8fbfwIiHKB-ws3C-A&s" alt="Java" /><br />
                <a href="https://www.w3schools.com/java/default.asp" className='code'><FaCode />Java</a>
            </li>
            <li id='bs'>
                <img width={300} height={300} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Bootstrap" /><br />
                <a href="https://www.w3schools.com/bootstrap5/index.php" className='code'><FaCode />Bootstrap</a>
            </li>
            <li id='react'>
                <img width={300} height={300} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" /><br />
                <a href="https://www.w3schools.com/react/default.asp" className='code'><FaCode />React</a>
            </li>
        </ul> */}
         <div className='skills-container' >
          {Skill.map((item, i) => {
             return <SkillCard
             image={item.image}
             title={item.title}
             describe={item.describe}
             />
          })}
      </div>
      </section>
    </div>
  )
}

export default Skills