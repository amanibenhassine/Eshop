import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home'
import About from './About'

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand" >Navbar</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Home" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link  to="/About" className="nav-link" >About</Link>
        </li>
      
        
      </ul>
     
    </div>
  </div>
</nav>  )
}

export default Navbar