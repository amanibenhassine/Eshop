import React from 'react'
import "./Home.css"
import img1 from "../assets/casque.png"
import Produits from './Produits'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
import {Link} from "react-router-dom"

function Home() {
  return (
    
    <div>
    <div className='container'>
      <div className='container-item'>
      <div className='text-item'>
      <h1>SHOP COMPUTERS & ACCESSORIES</h1>
    
      <div className="btnItem">
      <Link to="/produits" ><button type="button" className="btn btn-light px-5">Shop Now</button></Link>
     <Link to="#"> <button type="button" className="btn btn-outline-light px-5">Read More</button></Link>
       </div>  
      </div>
      <img src={img1} alt='casque'/>
    </div>
    </div>
    <Produits />
    <About />
    <Footer />
    </div>
  )
}

export default Home