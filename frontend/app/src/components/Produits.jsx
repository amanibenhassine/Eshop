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
    title:'ecouterblanch',
    description:"",
    rating: 4,

},
{
    image:Headphones,
    title:'casque2',
    description:"",
    rating: 4,

},
{
    image:HP_PC_Gamer,
    title:'PC HP 15-DW4005NK I5 12È',
    description:"Processeur: Intel Core i5-1235U",
    price:1969,
    rating: 4,

},
{
  image:internet,
  title:'casque3',
  description:"",
  rating: 4,

},
{
  image:iPhone_13,
  title:' IPHONE 13',
  description:" Processeur: Apple A15 Bionic ",
  price:4.299,

  rating: 4,

},
{
  image:kwmobile,
  title:'casque3',
  description:"",
  rating: 4.5,

},{
  image:MSI_PC_Gamer,
  title:'PC GAMER MSI',
  description:"Processeur: i7-11400H",
  price: 2.749,
  rating: 4,

},
{
  image: MSI_PC_Portable_Gamer,
  title:'PC GAMER MSI KATANA I7',
  description:"MSI KATANA B12VGK-416XFR",
  price:5.879,
  rating: 4,

},
{
  image:Ordinateur,
  title:'PC ACER EXTENSA 15 I3 ',
  description:"Processeur : Intel® Core i3-1115G4 ",
  price:1955,
  rating: 4.5,

},
{
  image:phone2,
  title:'IPHONE 14',
  description:"Écran Super Retina XDR 6,1 pouces2",
  price:5.269,
  rating: 4,

},
{
  image:Samsung_Galaxy_Z,
  title:'Galaxy Z Flip4 ',
  description:"processeur:3.18GHz, 2.7GHz, 2GHz",
  price:999,
  rating: 5,

},
{
  image:smartwatch,
  title:'casque3',
  description:"",
  rating: 5,

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
        items={cards}
        ></Card>)
        }
       
        </div>
    </div>
    </div>
  )
}

export default Produits