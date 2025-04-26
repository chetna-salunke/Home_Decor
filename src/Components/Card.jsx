import React from 'react'
import style from './Card.module.css'

const Card = ({name, picture, price,brand}) => {
  return (
    <>
        <article className={style.card}>
            <img src={picture} />
            <h1>{name}</h1>
            <h2>{brand}</h2>
            <h3>${price}.0 USD <button>Add to cart</button></h3>
           
        </article>    
    </>
  ) 
}

export default Card
