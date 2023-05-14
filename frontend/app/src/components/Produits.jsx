import React from 'react'
import Card from "./Card"
import casque from '../assets/casque.png'
import "./Produits.css"

const data=[{
    image:casque,
    title:'casque'
},
{
    image:casque,
    title:'casque2'
},
{
    image:casque,
    title:'casque3'
},
{
  image:casque,
  title:'casque3'
},
{
  image:casque,
  title:'casque3'
},
{
  image:casque,
  title:'casque3'
},{
  image:casque,
  title:'casque3'
},{
  image:casque,
  title:'casque3'
},



]

function Produits() {
  return (
    <div className='produits'>
      <div className='titleProduits'><h1>Categorie</h1></div>
      <div className='listProduits'>
        {
        data.map(cards =>
        <Card
         imageItem={cards.image}
         title={cards.title}
        ></Card>)
        }
        </div>
    </div>
  )
}

export default Produits