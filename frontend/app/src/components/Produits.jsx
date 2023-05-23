import React, { useEffect ,useState} from 'react'
import Card from "./Card"
import "./Produits.css"

import Navbar from './Navbar'
import data from "./data"








function Produits() {

  
 const products =data.products;



  return (
    <div>
    
    <div className='produits'>
      <div className='titleProduits'><h1>Top Products</h1></div>
      <div className='listProduits'>
       
        {
        products.map((cards,index)=>
        <Card
        key={index}
        item={cards}
        ></Card>)
        }
       
        </div>
    </div>
    </div>
  )
}

export default Produits