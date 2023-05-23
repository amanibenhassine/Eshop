import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import panier from "../assets/panier.gif"
import { useCart } from 'react-use-cart';




function Navbar({cart}) {
  const { cartTotal, totalUniqueItems,updateItemQuantity, removeItem,items } = useCart();

  return (
    <div>
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
          <Link to="/Show" cart={cart}>
            <img src={panier} />
            {totalUniqueItems > 0 && (
          <span className="item-count">{totalUniqueItems}</span>
        )}

            </Link>
           </div>
           </div>
         </div>
   </div>
       


</div>
)
}

export default Navbar