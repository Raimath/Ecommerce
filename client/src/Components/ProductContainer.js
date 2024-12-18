import React, { useContext } from 'react'
import { Product } from './Product'
import { Context } from '../Context/context'

export const ProductContainer = () => {

    const { allProductsInfo } = useContext(Context)
    const products = Array.isArray(allProductsInfo) ? allProductsInfo : [];
    // console.log(allProductsInfo)

    return (
        <>
            <section className='section product-container-section'>
                <div className='container product-card-container flex'>
                    {products.map((curElem) => {
                        return (
                        <Product 
                        key={curElem._id} 
                        id={curElem._id} 
                        image={curElem.image} 
                        title={curElem.title} 
                        price={curElem.price} 
                        strikeprice={curElem["strike-price"]}
                        discount={curElem.discount}/>);
                    })}
                </div>
            </section>
        </>
    )
}
