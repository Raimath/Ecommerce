import React, { useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context/context'
import { Product } from './Product'
// import { Product } from './Product'

export const Cart = () => {
  const { loginInfo, allProductsInfo, setloginInfo } = useContext(Context)
  const [productsInCart, setproductsInCart] = useState([])
  const navigate = useNavigate();

  const getCartDetails = () => {
    if (localStorage.getItem('id')) {
      const carts = Array.isArray(loginInfo.carts) ? loginInfo.carts : [];
      if (carts.length > 0 && Array.isArray(allProductsInfo)) {
        const cartIds = carts.map(id => Number(id))
        const filteredProducts = allProductsInfo.filter(product => cartIds.includes(product._id))
        setproductsInCart(filteredProducts)
      } else {
        setproductsInCart([]) // When cart is empty, reset to an empty array
      }
    } else {
      alert("login first")
      navigate('/login');
    }
  }

  useEffect(() => {
    getCartDetails()
  }, [loginInfo, allProductsInfo])
  // eslint-disable-next-line

  const handleRemove = async (productid) => {

    if (localStorage.getItem('id')) {
      const newItems = [...loginInfo.carts]; // Create a shallow copy of the array
      newItems.splice(productid, 1); // Remove the item at the specified index
      console.log(newItems);
      
      setloginInfo(prevLoginInfo => ({
          ...prevLoginInfo,
          carts: newItems
        }))

      const userid = localStorage.getItem('id')
      const res = await fetch("https://ecommerce-backend-99w3.onrender.com/removecart", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userid, newItems})
      });
      const data = await res.json()
      alert('Product Removed from cart')
    }
    else {
      alert("Login First")
    }

  }

  return (
    <>
      <section className='section product-container-section'>
        <div className='container product-card-container flex'>

          {
            productsInCart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              productsInCart.map((curElem,index) => {
                return (
                  <>
                    <div className='cart'>
                      <Product
                        key={index}
                        id={curElem._id}
                        image={curElem.image}
                        title={curElem.title}
                        price={curElem.price}

                      />
                      <input className='remove-button' type='button' onClick={() => handleRemove(index)} value='Remove Item' />
                    </div>
                  </>
                );
              })
            )}
        </div>
      </section>
    </>
  )
};
