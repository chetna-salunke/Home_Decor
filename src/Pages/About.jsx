import React from 'react'
import style from './About.module.css'
import Footer from '../Footer'
const About = () => {
  return (
    <>
      <section className={style.about}>
        <img src="https://www.arhaus.com/cdn/shop/files/4.1_LP_HumanNature_Desktop_Dining_1920x905_2625b3e6-a9b0-4f92-a9b1-b6a070428cbe_1440x@2x.jpg?v=1743185952" alt=""  height={650} width={1521}/>
        <h3>the inspiro story</h3>
        <h1> We make a difference</h1>
       </section>
     
       <section className={style.container}>
        <div className={style.text}>
          <h2>How It All Began</h2>
          <h5>Founded in 1986, our journey began with a commitment to creating furniture that harmonizes beauty, durability, and sustainability. We collaborate with talented craftsmen from across the globe, 
          sharing a common goal: to design timeless pieces that not only enhance your space but also embody a legacy of care and quality. Our creations are made to be cherished, serving as the foundation for unforgettable moments in your home for generations to come.</h5>
        </div>

        <div className={style.image}>
            <img src="https://assets-global.website-files.com/629f3db942b81a5f49ac7ba9/62e173378da06e493cb1ed0a_about%20one-p-500.jpeg" alt="Artisan at work" height={500} /> 
            <img src="https://assets-global.website-files.com/629f3db942b81a5f49ac7ba9/62e173374433b74f067b2cf5_about%20two-p-500.jpeg" alt="Artisan at work" height={500} />
        </div> 
       </section>

       <section className={style.gal}>
        <img src="https://cld.accentuate.io/82715246763/1680693759327/Nav_Desktop_DesignServices_631x350.jpg?v=1696273222128&options=w_1262" alt=""  height={500} width={760}/>
        <div>
        <h4>INSPIRO INTERIOR DESIGN</h4>
        <h2>IT STARTS WITH A CONVERSATION</h2>
        <p>Welcome to a truly unmatched, elevated offering. One where every  <br />Interior Designer is passionate, accredited, and committed to creating a  <br />personalized experience, tailored to your project, priorities, and  <br />preferences for working together.</p>
        
        </div>
       </section>

       <div className={style.project}>
         <h1>PROJECT GALLERY</h1>
        <img src="https://www.arhaus.com/cdn/shop/files/Case_Study_1.jpg?v=1738677217&width=4000" alt="" height={700} width={1521} />
       </div>
       <br /><br />
       <img src="https://www.arhaus.com/cdn/shop/files/4.1_LP_HumanNature_Desktop_EndHero_1920x1080_895d6d4e-68c1-46be-9452-b057aa3772c6.jpg?v=1743188108&width=4000" alt="" height={800} width={1521} />
      
      
       

       <Footer/>


    </>
  )
}

export default About
