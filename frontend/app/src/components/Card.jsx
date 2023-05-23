import React from 'react'
import {useCart} from 'react-use-cart'
import "./Card.css"
import {Link } from "react-router-dom"
import Show from './Show'
import { Rate } from 'antd';


function Card({item}) {
  const {image,title,description,price,rating} =item;
  const {addToCart}=useCart();
 
  return (
 

    <div className='Card'>
      <div className='cardImage'>
        <img src={image} alt={title}/>
        </div>
        <div className='card-content'>
            <h5>{title}</h5>
            <h6>price:${price}</h6>
            <p>{description}</p>
       
          
            <Rate allowHalf defaultValue={rating} />
           <button className="btn" onClick={()=>addToCart(item)} >Add to card</button>
        </div>


    </div>
  )
}

export default Card