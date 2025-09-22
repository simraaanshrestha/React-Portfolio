import React from 'react'

const SkillCard = (props) => {
  return (
    <div>
      <div className='skill-card'>
        <img className='image2' src={props.image} alt="Projects" />
           <div style={{padding:"1.5rem"}}>
             <h4 style={{fontSize:"1.5rem", margin:"0 0 0.5rem 0", textAlign:"center", }}>{props.title}</h4>
             {/* <p className='icon1' style={{fontSize:"1.5rem", margin:"0 0 0.5rem 0"}}>{props.icon}</p> */}
             <p className='describe1' style={{fontSize:"1rem", margin:"0 0 0.5rem 0", textAlign:"center"}}>{props.describe}</p>
             <p style={{textAlign:"center"}}>{props.button}</p>
                    
           </div>
        </div>
    </div>
  )
}

export default SkillCard