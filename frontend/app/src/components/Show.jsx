import React from 'react'
import img1 from "../assets/ecouter.png"
import "./Show.css"

function Show({imageItem,title}) {
 
  return (
    
    <div className='container-show'>
    <div className='container-item-show'>
    
    <img src={imageItem} alt='casque'/>
    <div className='text-item'>
    <h1>{title}</h1>
    </div>
  </div>
  </div>
  
  )
}

export default Show