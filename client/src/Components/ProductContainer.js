import React, { useContext, useState } from 'react'
import { Product } from './Product'
import { Context } from '../Context/context'
import { CardLoading } from './CardLoading'

export const ProductContainer = () => {

    
    const { allProductsInfo, isLoading, setisLoading } = useContext(Context)
    const products = Array.isArray(allProductsInfo) ? allProductsInfo : [];
    console.log(isLoading)

    return (
        <>
            <section className='section product-container-section'>
                <div className='container product-card-container flex'>
                    {isLoading ? (<CardLoading/>) :
                        (products.map((curElem) => {
                            return (
                                <Product
                                    key={curElem._id}
                                    id={curElem._id}
                                    image={curElem.image}
                                    title={curElem.title}
                                    price={curElem.price}
                                    strikeprice={curElem["strike-price"]}
                                    discount={curElem.discount} />);
                        }))}
                </div>
            </section>
        </>
    )
}
