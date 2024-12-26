import React, { useContext, useState, useEffect, useMemo } from 'react'
import { Context } from '../Context/context'
import { Product } from '../Components/Product'
import { CardLoading } from './CardLoading'

export const Shop = () => {

    const { allProductsInfo,isLoading ,collections} = useContext(Context)
    const [activeFilter, setActiveFilter] = useState(collections||'all'); // Track the active filter

    console.log(activeFilter ,collections)
    const products = useMemo(() => {
        return Array.isArray(allProductsInfo) ? allProductsInfo : [];
    }, [allProductsInfo]);

    const [filters, setFilters] = useState(products);

    useEffect(() => {
        setFilters(products);
        if(collections!=='')
        {
            handleFilter(collections)
        }
        // eslint-disable-next-line
    }, [products]);

    const handleFilter = (productFilter) => {
        setActiveFilter(productFilter);
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
                            <li className={activeFilter === 'all' ? 'active-filter' : ''} onClick={() => handleFilter('all')}>All</li>
                            <li className={activeFilter === 't-shirt' ? 'active-filter' : ''} onClick={() => handleFilter('t-shirt')}>T-Shirt</li>
                            <li className={activeFilter === 'shirt' ? 'active-filter' : ''} onClick={() => handleFilter('shirt')}>Shirt</li>
                            <li className={activeFilter === 'pant' ? 'active-filter' : ''} onClick={() => handleFilter('pant')}>Pant</li>
                            <li className={activeFilter === 'hoodie' ? 'active-filter' : ''} onClick={() => handleFilter('hoodie')}>Hoodies</li>
                            <li className={activeFilter === 'shoes' ? 'active-filter' : ''} onClick={() => handleFilter('shoes')}>Shoes</li>
                            <li className={activeFilter === 'jacket' ? 'active-filter' : ''} onClick={() => handleFilter('jacket')}>Jacket</li>
                            <li className={activeFilter === 'watch' ? 'active-filter' : ''} onClick={() => handleFilter('watch')}>Watches</li>
                        </ul>
                    </div>
                </div>
                <div className='container product-card-container flex'>
                    {isLoading?(<CardLoading/>):(filters.length > 0 ? (
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
                    ))}
                 
                </div>
            </section>
        </>
    )
}
