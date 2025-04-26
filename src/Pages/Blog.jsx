import React from 'react'
import Footer from '../Footer.jsx'
import style from './Blog.module.css'

const Blog = () => {
  return (
    
    <div>
        <hr />
      <section className={style.blog}>
        <div className={style.text}>
          <p>MARCH 21, 2024</p>
          <h2>Room Makeover with  <br /> Sheldon thomas <br /> Living Well</h2>
          <button> Read More</button>
        </div>

        <div>
          <img src="https://www.arhaus.com/cdn/shop/articles/BlogTile-480x520-Fall2023-2.jpg?v=1694032251&width=4000" alt=""  height={670} width={870}/>
        </div>
      </section>

      <section className={style.art}>
        
        <div>
          <img src="https://www.arhaus.com/cdn/shop/articles/KeiaMcSwain-BlogTile-480x520.jpg?v=1697220760&width=4000" alt="" height={320} width={420}/>
          <p>JULY 19, 2024</p>
          <h3>Home Tour: Elegant and Warm in San Diego</h3>
        </div>
        <div>
          <img src="https://www.arhaus.com/cdn/shop/articles/DaniellaMonet-BlogTile-480x520.jpg?v=1689624959&width=4000" alt="" height={320} width={420}/>
          <p>MAY 29, 2024</p>
          <h3>Everything you need for your living room</h3>
        </div>
        <div>
          <img src="https://www.arhaus.com/cdn/shop/articles/JJYosh-BlogTile-480x520.jpg?v=1696967492&width=4000" alt=""  height={320} width={420}/>
          <p>MAY 29, 2024</p>
          <h3>The World of Wall Art by Vanessa Green</h3>
        </div>
      </section>
      <hr />
      <Footer/>
    </div>
  )
}

export default Blog
