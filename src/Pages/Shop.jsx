import React from 'react'
import style from './Shop.module.css' 
import {Link, Outlet} from 'react-router-dom'

const Shop = () => {
  return (
    <div> 
      <hr />
      <main className={style.parent}>
        <aside className={style.asidebar}>
          <h3>By Category</h3>
          <ul>
            <Link to="/shop/Outdoor" className={style.link}><li>Outdoor</li></Link>
            <Link to= "/shop/dining"><li>Dining</li></Link>
            <Link  to= "/shop/living"><li>Living</li></Link>
            <Link  to= "/shop/lighting"><li>Lighting</li></Link>
            <Link  to= "/shop/decor"><li>Decor</li></Link>
            <Link  to= "/shop/wallart"><li>Wall Art</li></Link>
          </ul>

          <h3>By Brand</h3>
          <ul>
            <Link to= "/shop/brikus"><li>Brikus</li></Link>
            <Link to= "/shop/bogisich"><li>Bogisich</li></Link>
            <Link to= "/shop/dickinson"><li>Dickinson</li></Link>
          </ul>
          
        </aside>

        <section className={style.mainbar}>
          <Outlet/>
        </section>

      </main>
      
    </div>
  )
}

export default Shop
