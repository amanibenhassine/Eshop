import React from 'react'
import "./Home.css"
import img from "../assets/ecouter.png"

function Home() {
  return (
    <div className='container'>
      <div className='container-item'>
      
      <h1>Get the best product</h1>
      <img src={img} alt='casque'/>
    </div>
    </div>
  )
}

export default Home