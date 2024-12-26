import React from 'react'
import { ProductContainer } from './ProductContainer';
import { FeaturedProducts } from './FeaturedProducts';
import { Slider } from './Slider';
import {Contact} from './Contact'
import { Partners } from './Partners';
import { Review } from './Review';
import { ServicesSection } from './ServicesSection';
import { Collections } from './Collections';

export const Home = () => {
  

 

  return (
    <>
        <Slider/>
        <Collections/>
        <FeaturedProducts/>
        <Partners/>
        <ProductContainer/>
        <hr></hr>
        <ServicesSection/>
        <Review/>
        <Contact/>

    </>
  )
}
