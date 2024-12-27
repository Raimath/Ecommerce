import React from 'react'
import { motion } from 'motion/react'
export const Partners = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <section className='section  partners-section flex'>
        <div className='container partners-container flex'>
          <motion.h3
            initial={!isMobile?{ y: 100, opacity: 0 }:{}}
            whileInView={!isMobile?{ y: 0, opacity: 1 }:{}}
             viewport={{ once: true }}
            transition={!isMobile?{
              y: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1 },
              ease: 'easeIn'
            }:{}}
          > Our Official Partners</motion.h3>
          <motion.div className='brands flex'
            initial={!isMobile?{ y: 100, opacity: 0 }:{}}
            whileInView={!isMobile?{ y: 0, opacity: 1 }:{}}
             viewport={{ once: true }}
            transition={!isMobile?{
              y: { type: 'spring', stiffness: 60,},
              opacity: { duration: 1 },
              ease: 'easeIn'
            }:{}} >
            <div className='brand flex'>
              <img className='image' src='https://s.yimg.com/fz/api/res/1.2/i155bcyO_F7niI0vCmXN_A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/9adafff1-85af-34ef-95cc-a848ad6b4a4d/t_500x300' alt='flipcart ' />
              <div className='brand-name'>Flipcart</div>
            </div>
            <div className='brand meesho flex'>
              <img className='image' src='https://s.yimg.com/fz/api/res/1.2/AB8SrnauEcB3CPn8CG0blA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/32491f56-b478-3c8c-81d2-137ae62424bf/t_500x300' alt='meesho' />
              <div className='brand-name'>Meesho</div>
            </div>
            <div className='brand flex'>
              <img className='image' src='https://s.yimg.com/fz/api/res/1.2/bwLpWMzIshGmcI0m5FeHcw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/88485e2c-b94e-3589-b5cc-f911bca0be47/t_500x300' alt='Myntra' />
              <div className='brand-name'>Myntra</div>
            </div>
            <div className='brand flex'>
              <img className='image' src='https://s.yimg.com/fz/api/res/1.2/WH4VRK0xtmQVJVtj8tn6Dg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/dfb72e6f-9363-3b96-8ffb-4d5c4a760dcb/t_500x300' alt='Shopify' />
              <div className='brand-name'>Shopify</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
