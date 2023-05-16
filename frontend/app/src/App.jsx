import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Produits from './components/Produits'
import Footer from './components/Footer'
import Show from './components/Show'
import Register from './components/Register'
import Login from './components/Login'

function App() {

  return (
    <div className='app'>
    <BrowserRouter>
<Navbar />
<Routes>
  <Route path="/Home" element={<Home />}>


  </Route>
 <Route path="/About" element={<About />}></Route>
 <Route path="/Show" element={<Show />}></Route>

 <Route path="/Produits" element={<Produits />}></Route>
 <Route path="/Footer" element={<Footer />}></Route>
 <Route path="/Login" element={<Login />}></Route>
 <Route path="/Register" element={<Register />}></Route>

</Routes>
<Produits />
<About />
<Footer />
<Register />
<Login />

    </BrowserRouter>
      
    </div>
  )
}

export default App
