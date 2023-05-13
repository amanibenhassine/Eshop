import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
    <BrowserRouter>
<Navbar />
<Routes>
  <Route path="/Home" element={<Home />}></Route>
  <Route path="/About" element={<About />}></Route>

</Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
