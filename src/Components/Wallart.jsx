import React from 'react'
import Card from './Card.jsx'
import style from './Card.module.css'

const Wallart = () => {
  return (
    <div>
        <section className={style.parent}>
          
          <Card name="Mountain" brand="BOGISICH" picture="https://m.media-amazon.com/images/I/71fUSYnuXKL._AC_UF894,1000_QL80_.jpg" price={35}/>
          <Card name=" Asthetic" brand="BRIKUS" picture="https://m.media-amazon.com/images/I/51o3XYOJ6HL.jpg" price={20}/>
          <Card name=" Colorful " brand="DICKINSON" picture="https://m.media-amazon.com/images/I/81CqOaL-0-L._AC_UF894,1000_QL80_.jpg" price={24}/>
          <Card name="Flower" brand="ROMGUERA" picture="https://kotart.in/cdn/shop/products/Kotart-Modern-Art-Paintings-for-Living-Room-Bedroom-Home-and-Office-Wall-Decor-Nature-Inspired-Canvas-Painting-for-Home-Decor-2.jpg" price={15}/>
          <Card name="Cheris" brand="BRIKUS" picture="https://theprintemporium.com.au/cdn/shop/products/Shop-Light-it-up-Canvas-Print-a-painted-abstract-themed-framed-canvas-wall-art-print-from-The-Print-Emporium-artwork-collection-Buy-Australian-made-fine-art-painting-style-stretched-c_22c5d83a-06ab-4fb0-9409-8c0452970fd8_800x.jpg?v=1668276896" price={34}/>
          <Card name="Glossy" brand="BOGISICH" picture="https://kotart.in/cdn/shop/products/Kotart-Nature-Inspired-Paintings-for-Living-Room-Bedroom-Home-and-Office-Wall-Decor-Beautiful-Canvas-Art-for-Home-Decor.jpg?v=1697554022&width=1445" price={40}/>
          <Card name="Colorful" brand="BRIKUS" picture="https://icmedianew.gumlet.io/pub/media/catalog/product/cache/f2d421546b83b64fb3f7a27d900ed3ed/i/n/india-circus-by-krsnaa-mehta-daisy-bloomington-wall-art-set-of-3-60121013sd00737-2.jpg" price={20}/>
          <Card name="Mandala" brand="ROMGUERA" picture="https://artrooms.in/cdn/shop/files/61K0jxwn_mL._SX679.jpg?v=1700566355" price={20}/>
          <Card name=" Asthetic" brand="DICKINSON" picture="https://m.media-amazon.com/images/I/61DC0p5ATwL.jpg" price={20}/>
        </section>
      
    </div>
  )
}

export default Wallart
