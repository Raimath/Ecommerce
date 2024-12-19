import React from 'react'
import { ProductContainer } from './ProductContainer';
import { FeaturedProducts } from './FeaturedProducts';
import { Slider } from './Slider';
import {Contact} from './Contact'
import { Partners } from './Partners';
import { Review } from './Review';
import { ServicesSection } from './ServicesSection';

export const Home = () => {
  

 

  return (
    <>
        <Slider/>
        <FeaturedProducts/>
        <Partners/>
        <ServicesSection/>
        <ProductContainer/>
        <Review/>
        <Contact/>

    </>
  )
}
