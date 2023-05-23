import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-column">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum nunc at elit lacinia, in faucibus risus consectetur.</p>
      </div>
      <div className="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>Phone: 216.15897623</li>
          <li>Email: info@Eshop.com</li>
          <li>Address: Rue 2 mars, Nabeul, Tunis</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Categories</h4>
        <ul>
          <li><a href="#">Pc Gamer</a></li>
          <li><a href="#">Smart Watch</a></li>
          <li><a href="#">HeadPhone</a></li>
          <li><a href="#">Phone</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Your E-Shop. All rights reserved.</p>
    </div>
  </footer>
  
  )
}

export default Footer

