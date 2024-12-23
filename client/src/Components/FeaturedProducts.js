import React, { useContext } from 'react'
import { Context } from '../Context/context'
import { Product } from './Product'
import { CardLoading } from './CardLoading'


export const FeaturedProducts = () => {
    const { allProductsInfo ,isLoading} = useContext(Context)
    const allproducts = Array.isArray(allProductsInfo) ? allProductsInfo : [];
    const featuredproducts = allproducts.filter(curElem => curElem.featured)

    // console.log(featuredproducts)



    return (
        <>

            <section className='section product-container-section flex'>
                <div className='container product'>
                    <div className='heading '><h2>Featured Products</h2></div>
                    <div className=' product-card-container flex'>
                        {isLoading?(<CardLoading/>):(featuredproducts.map((curElem, _id) => {
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
                </div>
            </section>
        </>
    )
}
