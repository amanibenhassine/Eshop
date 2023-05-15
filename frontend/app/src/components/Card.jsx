import React from 'react'
import "./Card.css"
import {Link } from "react-router-dom"
import Show from './Show'

function Card({imageItem,title}) {
 
  return (
    <div className='Card'>
      <div className='cardImage'>
        <img src={imageItem} alt='img'/>
        </div>
        <div className='card-content'>
            <h2>{title}</h2>
           <Link to="/Show"><button btn btn-primary >Add to card</button></Link> 
        </div>


    </div>
  )
}

export default Card