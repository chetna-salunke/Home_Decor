import React from 'react'
import Card from './Card.jsx'
import style from './Card.module.css'

const Living = () => {
  return (
    <div>
        <section className={style.parent}>
          
          <Card name="Deco Sofa" brand="BOGISICH" picture="https://www.arhaus.com/cdn/shop/files/4.1_HP_Update_Carousel_Living_550x736_71270466-0e65-4662-8739-75bb99ee85ea_404x@2x.jpg?v=1743177403" price={35}/>
          <Card name=" Storage" brand="BRIKUS" picture="https://cb.scene7.com/is/image/Crate/CB_F24_FOF_02_103_Hor_001?$web_pdp_main_carousel_high$" price={20}/>
          <Card name="Chair" brand="ROMGUERA" picture="https://cb.scene7.com/is/image/Crate/CB_F23_WE_09_101_Det_002?$web_pdp_main_carousel_high$" price={34}/>
          <Card name=" Table " brand="DICKINSON" picture="https://cb.scene7.com/is/image/Crate/cb_CoffeeTablePLP_20250218_DualiteTable?$web_pdp_main_carousel_high$" price={24}/>
          <Card name="Storage" brand="BRIKUS" picture="https://m.media-amazon.com/images/I/51ws3t5J-FL._AC_UF1000,1000_QL80_.jpg" price={34}/>
          <Card name="Deco Sofa" brand="BOGISICH" picture="https://cb.scene7.com/is/image/Crate/CB_SP25_IT_14_302_Vert_001_X_PDP?$web_pdp_main_carousel_high$" price={40}/>
          <Card name="Deco Sofa" brand="ROMGUERA"  picture="https://cb.scene7.com/is/image/Crate/CB_F24_WE_16_106_Hor_Ver_001_V1?$web_pdp_main_carousel_high$" price={15}/>
          <Card name="Table" brand="BRIKUS" picture="https://www.ikea.com/in/en/images/products/aengesbyn-storage-table-black-pine-light-brown-stained__1055665_pe848032_s5.jpg" price={34}/>
          <Card name="Storage" brand="BRIKUS" picture="https://m.media-amazon.com/images/I/812DbtDvl9L._AC_UF894,1000_QL80_.jpg" price={34}/>
          <Card name="Chair" brand="BOGISICH" picture="https://cb.scene7.com/is/image/Crate/CB_SP25_BR_04_707_GIF_Frame1_PDP/$web_plp_card_hires$/250406033918/CB_SP25_BR_04_707_GIF_Frame1_PDP.jpg" price={34}/>
          <Card name="Deco Sofa" brand="DICKINSON" picture="https://cb.scene7.com/is/image/Crate/CB_SP25_BR_13_707_Hori_001_PDP/$web_plp_card_hires$/250405063800/CB_SP25_BR_13_707_Hori_001_PDP.jpg" price={34}/>
          <Card name="Table" brand="ROMGUERA" picture="https://ak1.ostkcdn.com/images/products/is/images/direct/e312ad228a20289206dc6b5487b83cb584c184bb/Modern-31.5%22-Round-Nesting-Coffee-Table-with-Storage-Drawer-%26-Metal-Legs%2C-Center-Table-Accent-Table-for-Living-Room%2C-Office.jpg?impolicy=medium" price={34}/>

        </section>
      
    </div>
  )
}

export default Living
