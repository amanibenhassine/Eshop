import React, { useEffect ,useState} from 'react'
import Card from "./Card"
import "./Produits.css"
import "./Show"

import Navbar from './Navbar'
import data from "./data"

import {  useCart } from "react-use-cart";







function Produits() {

const [cart ,setCart]=useState([]);
 const products =data.products;

 /*const handlClick =(item,index)=>{
;
  setCart([...cart, item,index]) 
  console.log(item)
 }
 const {addItem} = useCart();
 const handleAddToCart = ({item}) => {
  
  addItem (item) 
  console.log(item);

 };*/


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
        ></Card>)
        }
       
        </div>
    </div>
    </div>
  )
}

export default Produits