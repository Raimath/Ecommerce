import React from 'react'
import { motion } from 'motion/react'

export const Review = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <section className='section review-section partners-section flex'>
        <div className='container partners-container flex'>
          <motion.h3
            initial={!isMobile ? { y: 100, opacity: 0 } : {}}
            whileInView={!isMobile ? { y: 0, opacity: 1 } : {}}
            viewport={{ once: true }}
            transition={!isMobile ? {
              y: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1, delay: 0.2, },
              ease: 'easeIn'
            } : {}}>Our Happy Customers</motion.h3>
          <motion.div className='reviews flex'
            initial={!isMobile ? { y: 100, opacity: 0 } : {}}
            whileInView={!isMobile ? { y: 0, opacity: 1 } : {}}
            viewport={{ once: true }}
            transition={!isMobile ? {
              y: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1, delay: 0.2, },
              ease: 'easeIn'
            } : {}}>
            <div className='review flex'>
              <div className='client-name'>Sarah K <br></br><span className='handle'>@sarah24</span></div>
              <p className='client-review'>" Super easy to use and great service. The replacement policy worked perfectly when I needed it. I’ll definitely shop again "</p>
            </div>
            <div className='review flex'>
              <div className='client-name'>Rajesh  <br></br><span className='handle'>@rajesh</span></div>
              <p className='client-review'>" Love the discounts and offers and fee items Found my favorite products quickly and got a great deal Highly recommend "</p>
            </div>
            <div className='review flex'>
              <div className='client-name'>Neha G <br></br><span className='handle'>@neha07</span></div>
              <p className='client-review'>" Ordered a custom-printed t-shirt and it was perfect The team guided me well and the quality was amazing Very happy "</p>
            </div>
        </motion.div>
      </div>
    </section >
    </>
  )
}
