import React, { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context/context'
import { motion } from 'motion/react'

export const Collections = () => {
    const { setcollections } = useContext(Context)
    useEffect(() => {
        setcollections('')
    }, [])

    return (
        <>
            <section className='section collections-section'>
                <div className='container collections-container flex'>
                    <h2>COLLECTIONS</h2>
                    <div className='collections-box-container flex'>
                        <NavLink to='/shop'>
                            <motion.div className='collections-box flex' onClick={() => { setcollections('t-shirt') }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }} >
                                <img src='https://rukminim2.flixcart.com/image/1000/1000/xif0q/t-shirt/c/o/u/l-metr-sup-501-metronaut-original-imah4d7hg5vwxdav.jpeg?q=70&crop=false' alt='T-shirt' />
                                <p className='collections-para'>T-shirts</p>
                            </motion.div>
                        </NavLink>


                        <NavLink to='/shop'>
                            <motion.div className='collections-box flex' onClick={() => { setcollections('hoodie') }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }}>
                                <img src='https://rukminim2.flixcart.com/image/1000/1000/xif0q/sweatshirt/z/n/m/l-sweatshirt-727-tqh-original-imah7gbvc2wwzhrz.jpeg?q=70&crop=false' alt='T-shirt' />
                                <p className='collections-para'>Hoddies</p>
                            </motion.div>
                        </NavLink>

                        <NavLink to='/shop'>
                            <motion.div className='collections-box flex' onClick={() => { setcollections('pant') }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }}>
                                <img src='https://rukminim2.flixcart.com/image/1000/1000/xif0q/trouser/1/g/n/28-672596-unlimited-original-imagzemvbkvurhzb.jpeg?q=70&crop=false' alt='T-shirt' />
                                <p className='collections-para'>Pants</p>
                            </motion.div>
                        </NavLink>
                        <NavLink to='/shop'>
                            <motion.div className='collections-box flex' onClick={() => { setcollections('shirt') }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }}>
                                <img src='https://rukminim2.flixcart.com/image/1000/1000/xif0q/shirt/o/z/9/l-formal-shirt-metronaut-original-imah2e2d32aqdccb.jpeg?q=70&crop=false' alt='T-shirt' />
                                <p className='collections-para'>shirt</p>
                            </motion.div>
                        </NavLink>

                        <NavLink to='/shop'>
                            <motion.div className='collections-box flex' onClick={() => { setcollections('shoes') }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }}>
                                <img src='https://rukminim2.flixcart.com/image/1000/1000/xif0q/shopsy-shoe/u/u/f/7-spsy-1102-zixer-grey-original-imagqwxtswqrhuzk.jpeg?q=70&crop=false' alt='T-shirt' />
                                <p className='collections-para'>Shoes</p>
                            </motion.div>
                        </NavLink>

                        <NavLink to='/shop'>
                            <motion.div className='collections-box flex' onClick={() => { setcollections('jacket') }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }}>
                                <img src='https://rukminim2.flixcart.com/image/1000/1000/xif0q/jacket/j/c/n/s-no-ny-menjacketp-black-fruba-original-imagwy5fwfesf84z.jpeg?q=70&crop=false' alt='T-shirt' />
                                <p className='collections-para'>Jacket</p>
                            </motion.div>
                        </NavLink>
                    </div>
                </div>

            </section>
        </>
    )
}
