import React from 'react'
import "./Card.css"

function Card({imageItem,title}) {
  return (
    <div className='Card'>
      <div className='cardImage'>
        <img src={imageItem} alt='img'/>
        </div>
        <div className='card-content'>
            <h2>{title}</h2>
            <button btn btn-primary>Add to card</button>
        </div>


    </div>
  )
}

export default Card