import React from 'react'
import "./Card.css"
import {Link } from "react-router-dom"
import Show from './Show'
import { Rate } from 'antd';


function Card({item}) {
  const {image,title,price,rating} =item;
 
  return (
 

    <div className='Card'>
      <div className='cardImage'>
        <img src={image} alt='img'/>
        </div>
        <div className='card-content'>
            <h5>{title}</h5>
            <h6>price:${price}</h6>
       
          
            <Rate allowHalf defaultValue={rating} />
           <Link to="/Show"><button className="btn" >Add to card</button></Link> 
        </div>


    </div>
  )
}

export default Card