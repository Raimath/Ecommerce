import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../Context/context'
import { Product } from '../Components/Product'

export const Shop = () => {

    const { allProductsInfo } = useContext(Context)
    const products = Array.isArray(allProductsInfo) ? allProductsInfo : [];

    const [filters, setFilters] = useState(products);

    useEffect(() => {
        setFilters(products);
    }, [products]);

    const handleFilter = (productFilter) => {
        if (productFilter === 'all') {
            setFilters(products); // If 'all', show all products
        } else {
            setFilters(products.filter(curElem => curElem.category === productFilter)); // Filter by category
        }
    }

    return (
        <>
            <section className='section shop product-container-section'>
                <div className='filters flex'>
                    <div className='filter-list flex'>
                        <ul className='flex filter-ul'>
                            <li onClick={() => handleFilter('all')}>All</li>
                            <li onClick={() => handleFilter('t-shirt')}>T-Shirt</li>
                            <li onClick={() => handleFilter('shirt')}>Shirt</li>
                            <li onClick={() => handleFilter('pant')}>Pant</li>
                            <li onClick={() => handleFilter('hoodie')}>Hoodies</li>
                            <li onClick={() => handleFilter('jacket')}>Jacket</li>
                            <li onClick={() => handleFilter('shoes')}>Shoes</li>
                            <li onClick={() => handleFilter('watch')}>Watches</li>
                        </ul>
                    </div>
                </div>
                <div className='container product-card-container flex'>
                    {filters.length > 0 ? (
                        filters.map((curElem) => {
                            return (
                                <Product
                                    key={curElem._id}
                                    id={curElem._id}
                                    image={curElem.image}
                                    title={curElem.title}
                                    price={curElem.price}
                                    strikeprice={curElem["strike-price"]}
                                    discount={curElem.discount}
                                />
                            );
                        })
                    ) : (
                        "No Products Available"
                    )}
                </div>
            </section>
        </>
    )
}
