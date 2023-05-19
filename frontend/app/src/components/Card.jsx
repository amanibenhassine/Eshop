import React from 'react'
import "./Card.css"
import {Link } from "react-router-dom"
import Show from './Show'
import { Rate } from 'antd';


function Card({items}) {
  const {image,title,rating} =items;
 
  return (
 

    <div className='Card'>
      <div className='cardImage'>
        <img src={image} alt='img'/>
        </div>
        <div className='card-content'>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <Rate allowHalf defaultValue={rating} />
           <Link to="/Show"><button className="btn" >Add to card</button></Link> 
        </div>


    </div>
  )
}

export default Card