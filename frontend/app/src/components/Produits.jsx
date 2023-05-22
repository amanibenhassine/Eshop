import React, { useEffect ,useState} from 'react'
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








function Produits() {

  
  const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('/api/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);



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