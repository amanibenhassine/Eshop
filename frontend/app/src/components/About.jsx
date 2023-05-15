import React from 'react'
import img1 from "../assets/ecouter.png"
import "./About.css"

function About() {
  return (
    <div className='container-about'>
    <div className='container-item-about'>
    
    <img src={img1} alt='casque'/>
    <div className='text-item'>
    <h1>Get the best product</h1>
    </div>
  </div>
  </div>
  )
}

export default About