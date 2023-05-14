import React from 'react'
import img1 from "../assets/Microsoft.png"
import "./About.css"

function About() {
  return (
    <div className='container-about'>
    <div className='container-item-about'>
    <div className='text-item'>
   
    <img src={img1} alt='casque'/>
     <h1>Get the best product</h1>
    </div>
  </div>
  </div>
  )
}

export default About