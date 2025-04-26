import React from 'react'
import Navbar from './Navbar.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop.jsx'
import Entryway from './Components/Entryway.jsx'
import About from './Pages/About.jsx'
import Blog from './Pages/Blog.jsx'
import Gallery from './Pages/Gallery.jsx'
import Living from './Components/Living.jsx'
import Lighting from './Components/Lighting.jsx'
import Dining from './Components/Dining.jsx'
import Decor from './Components/Decor.jsx'
import Wallart from './Components/Wallart.jsx'
import OutDoor from './Components/OutDoor.jsx'
import Brikus from './Components/Brikus.jsx'
import Bogisich from './Components/Bogisich.jsx'
import Dickinson from './Components/Dickinson.jsx'
import Contact from './Pages/Contact.jsx';


const App = () => {
  return (
    <div>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path ='/home' element={<Home/>}/>

      <Route path ='/shop' element={<Shop/>}>
      <Route path ='/shop/entryway' element={<Entryway/>}/>
      <Route path ='/shop/outdoor' element={<OutDoor/>}/>
      <Route path ='/shop/living' element={<Living/>}/>
      <Route path ='/shop/lighting' element={<Lighting/>}/>
      <Route path ='/shop/dining' element={<Dining/>}/>
      <Route path ='/shop/decor' element={<Decor/>}/>
      <Route path ='/shop/wallart' element={<Wallart/>}/>
      <Route path ='/shop/brikus' element={<Brikus/>}/>
      <Route path ='/shop/bogisich' element={<Bogisich/>}/>
      <Route path ='/shop/dickinson' element={<Dickinson/>}/>
      </Route>

      <Route path ='/about' element={<About/>}/>
      <Route path ='/blog' element={<Blog/>}/>
      <Route path ='/gallery' element={<Gallery/>}/>
      <Route path ='/contact' element={<Contact/>}/>


    </Routes>
   
   </BrowserRouter>
      
    </div>
  )
}

export default App
