import React from 'react'
import Card from "./Card"
import "./Produits.css"
import smartwatch from '../assets/smartwatch.jpg'
import Samsung_Galaxy_Z from '../assets/Samsung_Galaxy_Z.png'
import phone2 from '../assets/phone2.png'
import Ordinateur from '../assets/Ordinateur.png'
import MSI_PC_Portable_Gamer from '../assets/MSI_PC_Portable_Gamer.png'
import MSI_PC_Gamer from '../assets/MSI_PC_Gamer.png'
import kwmobile from '../assets/kwmobile.png'
import iPhone_13 from '../assets/iPhone_13.png'
import internet from '../assets/Internet.png'
import HP_PC_Gamer from '../assets/HP_PC_Gamer.png'
import Headphones from '../assets/Headphones.png'
import ecouterblanch from '../assets/ecouterblanch.png'
import Navbar from './Navbar'





const data=[{
    image:ecouterblanch,
    title:'ecouterblanch'
},
{
    image:Headphones,
    title:'casque2'
},
{
    image:HP_PC_Gamer,
    title:'casque3'
},
{
  image:internet,
  title:'casque3'
},
{
  image:iPhone_13,
  title:'casque3'
},
{
  image:kwmobile,
  title:'casque3'
},{
  image:MSI_PC_Gamer,
  title:'casque3'
},
{
  image: MSI_PC_Portable_Gamer,
  title:'casque3'
},
{
  image:Ordinateur,
  title:'casque3'
},
{
  image:phone2,
  title:'casque3'
},
{
  image:Samsung_Galaxy_Z,
  title:'casque3'
},
{
  image:smartwatch,
  title:'casque3'
},



]

function Produits() {
  return (
    <div>
    
    <div className='produits'>
      <div className='titleProduits'><h1>Top Products</h1></div>
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
    </div>
  )
}

export default Produits