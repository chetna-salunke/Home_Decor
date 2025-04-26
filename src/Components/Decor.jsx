import React from 'react'
import Card from './Card.jsx'
import style from './Card.module.css'

const Decor = () => {
  return (
    <div>
        <section className={style.parent}>
        <Card name="Vases" brand="DICKINSON"  picture="https://assets.grimgs.com/grimgs/rk/images/dp/wcm/202448/0002/hand-painted-decorative-candles-c.jpg" price={15}/>
          <Card name="Mirror" brand="BOGISICH" picture="https://m.media-amazon.com/images/I/815tT178pwL.jpg" price={34}/>
          <Card name="Pillow" brand="BOGISICH"  picture="https://cb.scene7.com/is/image/Crate/cb_dPLP_20240725_FallEdit_Nav_6Pillows?bfc=on&wid=300&qlt=80&op_sharpen=1" price={21}/>
          <Card name="Vases" brand="ROMGUERA" picture="https://www.arhaus.com/cdn/shop/collections/Category_VasesPlanters_302x302_2x_64cc4772-ad8a-4d0e-ad4e-6d954ff54bd3.jpg?v=1726162015&width=1000" price={35}/>
          <Card name="Mirror" brand="BOGISICH"  picture="https://thegalleryhome.ae/cdn/shop/files/IMG_3636.jpg?v=1709557169" price={12}/>
          <Card name="Napkins" brand="BOGISICH"  picture="https://assets.grimgs.com/grimgs/rk/images/dp/wcm/202443/0002/block-print-rose-stripe-tablecloth-c.jpg" price={22}/>
          <Card name="Pillow" brand="ROMGUERA" picture="https://www.arhaus.com/cdn/shop/collections/Category_Pillows_302x302_2x_1304bdeb-7c4c-4eac-a0fd-c55edfccfa3f.jpg?v=1743101007&width=1000" price={24}/>
          <Card name="Table" brand="DICKINSON"  picture="https://assets.grimgs.com/grimgs/rk/images/dp/wcm/202514/0001/georgia-tray-top-side-table-c.jpg" price={14}/>
          <Card name="Decor" brand="BRIKUS" picture="https://cb.scene7.com/is/image/Crate/cb_mPLP_20220729_ColorTrends_Hero?bfc=on&wid=500&qlt=75&op_sharpen=1" price={34}/>
          <Card name="Decor" brand="BOGISICH" picture="https://jungleculture.eco/cdn/shop/articles/how-to-make-coco-shell-candles_400x500.jpg?v=1640088547" price={26}/>
          <Card name="Napkins" brand="DICKINSON"  picture="https://assets.grimgs.com/grimgs/rk/images/dp/wcm/202443/0004/linen-crochet-napkins-6-c.jpg" price={17}/>
          <Card name="Vases" brand="ROMGUERA"  picture="https://assets.grimgs.com/grimgs/rk/images/dp/wcm/202503/0007/seagrass-hand-woven-basket-c.jpg" price={23}/>
          <Card name="Decor" brand="BRIKUS" picture="https://www.arhaus.com/cdn/shop/collections/Category_HomeWallDecor_302x302_2x_99b8b051-006d-4e94-bc7b-0843c357fb82.jpg?v=1743100971&width=1000" price={20}/>
          <Card name="Mirror" brand="ROMGUERA" picture="https://www.arhaus.com/cdn/shop/collections/Category_Mirrors_302x302_2x_953746b2-cb48-4846-85c0-1b13d9d51d7c.jpg?v=1743100989&width=1000" price={34}/>
          <Card name="Candle" brand="BOGISICH"  picture="https://assets.grimgs.com/grimgs/rk/images/dp/wcm/202506/0002/hand-painted-amber-floral-candle-1-c.jpg" price={18}/>
        </section>
      
    </div>
  )
}

export default Decor
