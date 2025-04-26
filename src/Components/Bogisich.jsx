import React from 'react'
import Card from './Card.jsx'
import style from './Card.module.css'


const Bogisich = () => {
  return (
    <div>
        <section className={style.parent}>
        <Card name="OSofa" brand="BRIKUS" picture="https://cb.scene7.com/is/image/Crate/cb_PDP_20250220_Ipanema?bfc=on&wid=540&qlt=80&op_sharpen=1" price={214}/>
        </section>
      
    </div>
  )
}

export default Bogisich
