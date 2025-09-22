import React from 'react'


const Cards = (props) => {
  return (
    <>
    <div className="pro-cards">
      {/* <props.icon /> */}
      <img src={props.image} alt="Products" style={{ width: "100%", height: "400px", objectFit: "fill" }} />
      <div style={{ padding: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", color: "#E06330", margin: "0 0 0.5rem 0" }}>{props.title}</h1>
        <p style={{ margin: "0.5rem 0", fontSize:"15px" , color: "#555" }}>{props.description}</p>
      </div>
    </div>
    {/* <div className="skill-cards"> */}
      {/* <props.icon/> */}
      {/* <img src={props.img} alt="html" style={{width:"335px", height:"365px", padding:"25px 35px", borderRadius:"20px", objectFit:"cover"}} /> */}
      {/* <div style={{ padding: "1.5rem" }}></div>
        <h1 style={{ fontSize: "1.5rem", color: "#E06330", margin: "0 0 0.5rem 0" }}>{props.title}</h1>
        <p style={{ margin: "0.5rem 0", color: "#555" }}>{props.description}</p>
        <p style={{textAlign:"center"}}>
          <a href="" className="button">{props.button}</a></p>         */}
    {/* </div> */}
    </>
  )
}

export default Cards