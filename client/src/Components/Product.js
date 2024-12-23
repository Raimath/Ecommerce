import React from 'react'
import { NavLink } from 'react-router-dom'


export const Product = (props) => {
  const { id, image, title, price ,discount,strikeprice} = props;


  return (
    <>
    
      <NavLink to={`/singleProduct/${id}`}>
        <div className='product-card flex'>
          <img src={image} alt="product-image" />
          <div className='card-details flex'>
            <div className='product-title'>{title.length > 20 ? `${title.slice(0, 30)}...` : title}</div>
            <div className='product-price'>
              <div className='card-strike-price'><del>&#8377;{strikeprice}</del><span className='spacial'>{discount}%off</span></div>
              <div className='card-real-price'>&#8377;{price}</div>
            </div>
          </div>
        </div>

      </NavLink>
      

    </>
  )
}
