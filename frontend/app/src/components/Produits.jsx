import React, { useEffect ,useState} from 'react'
import Card from "./Card"
import "./Produits.css"

import Navbar from './Navbar'
import data from "./data"

import { CartProvider, useCart } from "react-use-cart";







function Produits() {

const [cart ,setCart]=useState([]);
 const products =data.products;

 const handlClick =(item)=>{

  setCart([...cart, item]); 
  console.log(item)
 }


  return (
    <div>
    
    <div className='produits'>
      <div className='titleProduits'><h1>Top Products</h1></div>
      <div className='listProduits'>
       
        {
        products.map((item,index)=>
        <Card
        key={index}
        item={item}
        handlClick ={handlClick }

        ></Card>)
        }
       
        </div>
    </div>
    </div>
  )
}

export default Produits