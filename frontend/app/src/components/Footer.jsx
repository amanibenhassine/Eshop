import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-column">
        <h4>About Us</h4>
        <p>Welcome to our E-Shop! We are an online store dedicated to providing a convenient and enjoyable shopping experience for our customers. At our E-Shop, we offer a wide range of products from various categories, ensuring that there's something for everyone.</p>
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

