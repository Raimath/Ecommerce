import React, { useContext } from 'react'
import { Context } from '../Context/context'
import { Product } from './Product'

export const SuggestedProducts = (props) => {
    const { category, id } = props
    const { allProductsInfo } = useContext(Context)
    // console.log(category)

    const suggestedProducts = allProductsInfo.filter(curElem => curElem.category === category && curElem._id !== id)
    console.log(suggestedProducts)

    return (
        <>
           
            {suggestedProducts.length > 0 ? (
                
                <section className='section product-container-section flex'>
                     <hr></hr>
                    <div className='container'>
                        <div className='heading '><h2>Similar Products</h2></div>
                        <div className=' product-card-container flex'>
                            {suggestedProducts.map((curElem, _id) => {
                                return (
                                    <Product
                                        key={curElem._id}
                                        id={curElem._id}
                                        image={curElem.image}
                                        title={curElem.title}
                                        price={curElem.price}
                                        strikeprice={curElem["strike-price"]}
                                        discount={curElem.discount} />);
                            })}
                        </div>
                    </div>
                </section>
            ) : ("")}
        </>
    )
}
