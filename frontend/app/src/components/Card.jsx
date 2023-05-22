import React from 'react'
import "./Card.css"
import {Link } from "react-router-dom"
import Show from './Show'
import { Rate } from 'antd';


function Card({item}) {
  const {images,title,rating} =item;
 
  return (
 

    <div className='Card'>
      <div className='cardImage'>
        <img src={images} alt='img'/>
        </div>
        <div className='card-content'>
            <h3>{title}</h3>
          
            <Rate allowHalf defaultValue={rating} />
           <Link to="/Show"><button className="btn" >Add to card</button></Link> 
        </div>


    </div>
  )
}

export default Card