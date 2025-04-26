import React from 'react'
import Card from './Card.jsx'
import style from './Card.module.css'

const Dining = () => {
  return (
    <div>
        <section className={style.parent}>
          
          <Card name="DTable" brand="BOGISICH" picture="https://cb.scene7.com/is/image/Crate/cb_PDP_20240710_Lakin/$web_plp_card_hires$/250406034409/cb_PDP_20240710_Lakin.jpg" price={935}/>
          <Card name="Chair" brand="BRIKUS" picture="https://cb.scene7.com/is/image/Crate/CB_SP25_NA_07_302_Vert_002_X_PDP/$web_plp_card_hires$/250406033919/CB_SP25_NA_07_302_Vert_002_X_PDP.jpg" price={520}/>
          <Card name="DTable" brand="ROMGUERA" picture="https://cb.scene7.com/is/image/Crate/cb_PDP_20240710_Tate/$web_plp_card_hires$/250406034409/cb_PDP_20240710_Tate.jpg" price={734}/>
          <Card name="DTable" brand="BOGISICH" picture="https://cb.scene7.com/is/image/Crate/WestCaneWillyPedestalMastPrimitiveOMC20?$web_pdp_main_carousel_high$" price={345}/>
          <Card name="DTable" brand="ROMGUERA" picture="https://cb.scene7.com/is/image/Crate/cb_PDP_20240710_Virage?$web_pdp_main_carousel_high$" price={235}/>
          <Card name="DTable" brand="BRIKUS" picture="https://cb.scene7.com/is/image/Crate/cb_PDP_20240801_Henrik?$web_pdp_main_carousel_high$" price={315}/>
        
          <Card name=" Chair " brand="DICKINSON" picture="https://cb.scene7.com/is/image/Crate/Basque66inDiningTableFC20/$web_plp_card_hires$/250406033918/Basque66inDiningTableFC20.jpg" price={424}/>
          <Card name="DTable" brand="BRIKUS" picture="https://cb.scene7.com/is/image/Crate/VghnMdGryRgHynIrnPdtElWhTLPEF20_hero?$web_pdp_main_carousel_high$" price={324}/>
          <Card name="DTable" brand="DICKINSON"  picture="https://cb.scene7.com/is/image/Crate/CB_SP25_BR_06_707_Hor_001_Point/$web_plp_card_hires$/250406033919/CB_SP25_BR_06_707_Hor_001_Point.jpg" price={715}/>
         </section>
      
    </div>
  )
}

export default Dining
