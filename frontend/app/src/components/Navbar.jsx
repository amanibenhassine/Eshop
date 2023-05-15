import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import "./Navbar.css"

function Navbar() {
  return (
<div className='navbar'>    
        
        <div className='logo'><h3>Amen<span>!</span></h3></div>
        <div> 
         
          <div className='navItem'>
          <div className='navItem-1'>
           <Link to="/Home">Home</Link>
           </div>
           <div className='navItem-1'>
           <Link to="/About">About</Link>
           </div>
           </div>
         </div>
   
       </div>
)
}

export default Navbar