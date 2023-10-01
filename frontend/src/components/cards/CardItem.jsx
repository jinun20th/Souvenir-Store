import React from 'react'
import "./cardItem.css";
import { MdOutlineAddBox } from "react-icons/md";
import StarRating from "./../starRating/StarRating"

function CardItem(props) {
  return (
      <div className='cards__item'>
          <figure className='cards__item__pic-wrap'>
              <img className='cards__item__img' src={props.src} alt="" onClick={props.imgOnClick}/>
              <div className='cards__item__discount'>{props.discount}% off</div>
          </figure>
          <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.label}</h5>
              <h5 className='cards__item__star'><StarRating/></h5>
              <h5 className='cards__item__price'>{props.price}</h5>  
          </div>  
          <button className='cards__item__button'><MdOutlineAddBox/></button>   
      </div>
  )
}

export default CardItem