import React from 'react'
import img1 from "../assets/casque.png"
import "./About.css"

function About() {
  return (
    <div className='container'>
    <div className='container-item'>
    <div className='text-item'>
    <h1>Get the best product</h1>
    <button type='onSubmit'>Click</button>
    </div>
    <img src={img1} alt='casque'/>
  </div>
  </div>
  )
}

export default About