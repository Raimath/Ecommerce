import React from 'react'
import { motion } from 'motion/react';
export const CardLoading = () => {
    
    const isMobile = window.innerWidth <= 768;
    
    const cardCount = 8; // Specify the number of times to render
    return (
        <>
            {Array.from({ length: cardCount }, (_, index) => (
                <div key={index} className='card-loading product-card flex'>
                    <motion.div className='image-loading'
                        initial={!isMobile ? { y: 100, opacity: 0 } : {}}
                        whileInView={!isMobile ? { y: 0, opacity: 1 } : {}}
                        transition={!isMobile ? {
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn'
                        } : {}}></motion.div>
                    <motion.div className='title-loading product-title'
                        initial={!isMobile ? { y: 100, opacity: 0 } : {}}
                        whileInView={!isMobile ? { y: 0, opacity: 1 } : {}}
                        transition={!isMobile ? {
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn'
                        } : {}}></motion.div>
                    <motion.div className='price-loading card-real-price'
                        initial={!isMobile ? { y: 100, opacity: 0 } : {}}
                        whileInView={!isMobile ? { y: 0, opacity: 1 } : {}}
                        transition={!isMobile ? {
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn'
                        } : {}}></motion.div>
                </div>
            ))}

        </>
    )
}
