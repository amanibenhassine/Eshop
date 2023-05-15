import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import "./Navbar.css"
import panier from "../assets/panier.gif"
import Produits from './Produits';
import Footer from './Footer';

function Navbar() {
  return (
<div className='navbar'>    
        
        <div className='logo'><h3><span>E</span>Shop</h3></div>
        <div> 
         
          <div className='navItem'>
          <div className='navItem-1'>
           <Link to="/Home" style={{ textDecoration: 'none' , color:'black' }}>Home</Link>
           </div>
           <div className='navItem-1'>
           <Link to="/Produits" style={{ textDecoration: 'none' , color:'black' }}>Products</Link>
           </div>
           <div className='navItem-1'>
           <Link to="/About" style={{ textDecoration: 'none' , color:'black' }}>About</Link>
           </div>
           <div className='navItem-1'>
           <Link to="/Footer" style={{ textDecoration: 'none' , color:'black' }}>Contact</Link>
           </div>
           <div className='navItem-1'>
           <img src={panier}/>
           </div>
           </div>
         </div>
   
       </div>
)
}

export default Navbar