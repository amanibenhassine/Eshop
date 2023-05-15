import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Produits from './components/Produits'
import Footer from './components/Footer'
function App() {

  return (
    <div className='app'>
    <BrowserRouter>
<Navbar />
<Routes>
  <Route path="/Home" element={<Home />}>


  </Route>
 <Route path="/About" element={<About />}></Route>
 <Route path="/Produits" element={<Produits />}></Route>
 <Route path="/Footer" element={<Footer />}></Route>

</Routes>
<Produits />
<About />
<Footer />

    </BrowserRouter>
      
    </div>
  )
}

export default App
