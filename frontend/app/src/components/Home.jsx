import React from 'react'
import "./Home.css"
import img1 from "../assets/casque.png"
import Produits from './Produits'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
      
    <div className='container'>
      <div className='container-item'>
      <div className='text-item'>
      <h1>SHOP COMPUTERS & ACCESSORIES</h1>
    
      <div className="btnItem">
      <button type="button" className="btn btn-light px-5">Light</button>
      <button type="button" className="btn btn-outline-light px-5">Warning</button>
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