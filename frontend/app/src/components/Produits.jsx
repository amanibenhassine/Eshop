import React from 'react'
import Card from "./Card"
import casque from '../assets/casque.png'
import "./Produits.css"

const data=[{
    image:'../assets/casque.png',
    title:'casque'
},
{
    image:'../assets/casque.png',
    title:'casque2'
},
{
    image:'../assets/casque.png',
    title:'casque3'
},



]

function Produits() {
  return (
    <div className='produits'>
        {
        data.map(cards =>
        <Card
         imageItem={data.image}
         title={data.title}
        ></Card>)
        }
        
    </div>
  )
}

export default Produits