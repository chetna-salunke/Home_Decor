import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Home.module.css'
import Footer from '../Footer';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faPinterest } from '@fontawesome/free-brands-svg-icons';

const Home = () => {
  
  return (
    <div >
      <section className={style.home}>
        <img src="https://www.arhaus.com/cdn/shop/files/4.1_HP_Update_Desktop_Hero_1920x1080_c0255a0f-fabf-4625-853a-1246c49f9a68_1440x@2x.jpg?v=1743175695" alt="" height={800}  width={1521}/>
       <h1>Spaces, soft & still</h1>
        <button>decorate your space</button>
      </section>


      <section className={style.quote}>
        <img src="https://www.arhaus.com/cdn/shop/files/4.1_HP_Update_Desktop_BG_1920x700_49d0bcc6-8b6a-4f93-9289-8a9a9b4289f0_1440x@2x.jpg?v=1743177027" alt=""  height={470} width={1521}/>
        <h1>In the gentle whispers of summer, we are called to slow down and embrace the outdoors. Reminding us that this is the time to reconnect. With the earth. With our spirit. With one another.
           <br />  <br />This is the essence of <i> HUMAN CONNECTION</i></h1>
      </section>

      <section className={style.outdoor}>
      <img src="https://www.arhaus.com/cdn/shop/files/4.1_HP_Update_Desktop_OutdoorHero_1920x1080_09d440ee-13ef-4840-826b-99128bc00034_1440x@2x.jpg?v=1743177945" alt="" height={800}  width={1521}/>
        <h1>  LIVING FOR SUMMER </h1>
      <button>SHOP OUTDOOR</button>
    </section>


      {/* <div className={style.new}>New & featured</div> */}
      <section className={style.feature}>

      <div className={style.featureitem}>
        <div className={style.textoverlay}>OUTDOOR</div>
        <img src="https://www.arhaus.com/cdn/shop/files/4.1_HP_Update_Carousel_Outdoor_550x736_14dcf99f-e2b6-4787-9e5c-9154ad1617fd_404x@2x.jpg?v=1743177396" alt="Entryway" />
      </div>

      <div className={style.featureitem}>
        <div className={style.textoverlay}>LIVING</div>
        <img src="https://www.arhaus.com/cdn/shop/files/4.1_HP_Update_Carousel_Living_550x736_71270466-0e65-4662-8739-75bb99ee85ea_404x@2x.jpg?v=1743177403" alt="Living" />
      </div>

      <div className={style.featureitem}>
        <div className={style.textoverlay}>DINING</div>
        <img src="https://www.arhaus.com/cdn/shop/files/4.1_HP_Update_Carousel_Dining_550x736_3d434ae3-d017-42f7-9d06-2c7585bb30c1_404x@2x.jpg?v=1743177412" alt="Dining" />
      </div>

      <div className={style.featureitem}>
        <div className={style.textoverlay}>DECOR</div>
        <img src="https://www.arhaus.com/cdn/shop/files/6_3.6_HP_Carousel_Decor_404x@2x.jpg?v=1741200754" alt="Decor" />
      </div>
    </section>

   

    <section className={style.gallery}>
      <img src="https://www.arhaus.com/cdn/shop/files/4.1_HP_Update_Desktop_HumanNature_1920x1080_e36b6b36-f728-4a58-880c-e3be53ec0fd7_1440x@2x.jpg?v=1743178443" alt="" height={800}  width={1521}/>
      <h2>In the embrace of serenity</h2>
      {/* <h2>Remake a room with delightful deatils and <br />ChicHaven's guides to thoughtful living. </h2> */}
    </section>

    <h1 style={{paddingTop:'50px'}}>QUALITY IN ALL THAT WE MAKE</h1>
   <section className={style.art}>
           
           <div>
             <img src="https://www.arhaus.com/cdn/shop/files/Outdoor_Hub_Canyon.jpg?v=1743449391&width=4000" alt="" height={380} width={320}/>
             <p>INTRODUCING THE UNFORGETTABLE </p>
             <h3> Our most sough after silhouettes radiate the best of unmatched quality and incredibie design, olevating the outdoor spaces of your home.</h3>
             <button>SHOP NOW</button>
           </div>
           <div>
             <img src="https://www.arhaus.com/cdn/shop/files/Outdoor_Hub_Carousel_2.jpg?v=1743444281&width=4000" alt="" height={380} width={320}/>
             <p>NATURAL WONDERS </p>
             <h3>Artfully engineered to dety expectations. Our collection of sintered stone & concrete tabletope bring  unique appearance of natural stone.</h3>
             <button>SHOP NOW</button>
           </div>
           <div>
             <img src="https://www.arhaus.com/cdn/shop/files/Outdoor_Hub_Carousel_6_df62ac5a-215c-4ab4-a3ed-3e944617030c.jpg?v=1743517719&width=4000" alt="" height={380} width={320}/>
             <p>FABRICS THAT PERFORM </p>
             <h3> An expansive array of rich tones and textures is just the beginning. Our Inside Out Collection brings indoor sofitness to stain performance. </h3>
             <button>SHOP NOW</button>
           </div>
           <div>
             <img src="https://www.arhaus.com/cdn/shop/files/Outdoor_Hub_Carousel_3_e17309f5-f6dd-44f7-b34e-7b6a6d89ee15.jpg?v=1743613875&width=4000" alt="" height={380} width={320}/>
             <p>CONSTRUCTED TO LAST </p>
             <h3>At Arhaus, our collections are thoughtfully designed and carefully crafted with, heirloom quality and beautiful, lasting matonality.</h3>
             <button>SHOP NOW</button>
           </div>
           

    </section>
   
    <section className={style.move}>
    <h1>QUALITY IN ALL THAT WE MAKE</h1>
    </section>

    <Footer/>
    </div>
  )
}

export default Home
