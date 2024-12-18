import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../Context/context'
import { NavLink, useParams } from 'react-router-dom'
import { SuggestedProducts } from './SuggestedProducts'

export const SingleProduct = () => {
  const { id } = useParams({})
  const { loginInfo, setloginInfo } = useContext(Context)
  const [productdata, setproductdata] = useState({
    "_id":"",
    "title": "",
    "description": "",
    "price": "",
    "stike-price":"",
    "discount":"",
    "category":"",
    "featured":"",
    "product-link":"",
    "moreinfo": [],
    "image": [{
      "imagelink": ""
    }]
  })


  const [mainImage, setMainImage] = useState(productdata.image[0].imagelink)

  const getSingleProduct = async () => {

    try {
      const res = await fetch(`https://ecommerce-backend-99w3.onrender.com/singleproduct/?id=${id}`)
      const data = await res.json()
      console.log(data)
      setproductdata({
        "_id":data.singleproduct._id,
        "title": data.singleproduct.title,
        "description": data.singleproduct.description,
        "price": data.singleproduct.price,
        "strike-price":data.singleproduct["strike-price"],
        "discount":data.singleproduct.discount,
        "image": data.singleproduct.imageurl,
        "moreinfo": data.singleproduct.moreinfo,
        "featured":data.singleproduct.featured,
        "category":data.singleproduct.category,
        "product-link":data.singleproduct["product-link"]
      })
      setMainImage(data.singleproduct.imageurl[0].imagelink)
     
    } catch (err) {
      console.log(err)
    }
  }


  const handleCart = async (productid) => {
    if (loginInfo.carts && loginInfo.carts.includes(productid)) {
      alert("This product is already in your cart.");
      return;
    }

    if (localStorage.getItem('id')) {
      console.log(loginInfo.carts)
      const userid = localStorage.getItem('id')
      const res = await fetch("https://ecommerce-backend-99w3.onrender.com/cart", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userid, productid })
      });
      const data = await res.json()
      const data2 = await setloginInfo({ carts: data.carts })
      alert('Product added')
    }
    else {
      alert("Login First")
    }

  }

  useEffect(() => {
    getSingleProduct()
    // eslint-disable-next-line
  }, [id])

  return (
    <>
      <section className="product-section">
        <div className="container  flex" >
          <div className='product-container'>
            <div className='product-images flex'>
              <div className="main-image flex">
                {mainImage ? (
                  <img src={mainImage} alt="Product " />
                ) : (
                  <div>No image available</div> // Optional fallback message or placeholder
                )}
              </div>

              <div className="sub-images flex">
                {productdata.image.map((curElem, id) => {
                  const imageUrl = curElem.imagelink || ""; // Ensure there's no empty string
                  return (
                    imageUrl ? (
                      <img key={id} src={imageUrl} onMouseOver={() => setMainImage(imageUrl)} alt="product thumbnail" />
                    ) : (
                      <div key={id}>No image available</div> // Optional fallback for each thumbnail
                    )
                  );
                })}
              </div>

              <div className='buttons'>
                <input className='cart-button' type='button' value='Add to Cart' onClick={() => handleCart(id)} />
                
                <NavLink to={productdata["product-link"]}> <input className='buy-button' type='button' value='Buy Now' /></NavLink>
              </div>
            </div>
            <div className='product-content flex'>
              <div className='title'>{productdata.title}</div>
              <p className='description'>{productdata.description}</p>
              <div className='price'>
                <div className='spacial'>Spcial Price</div>
                <div className='strike-price'><del>&#8377;{productdata["strike-price"]}</del><span className='spacial'>{productdata.discount}%off</span></div>
                <div className='real-price'>&#8377;{productdata.price}</div>
              </div>
              <div className='details'>
                {Array.isArray(productdata.moreinfo) && productdata.moreinfo.length > 0 && (
                  <div className='more-info'>
                    <h3>Product Details</h3>
                    <table className='table'>
                      <tbody>
                        {productdata.moreinfo.map((item, index) => {
                          const key = Object.keys(item)[0];
                          const value = item[key];
                          return (
                            <tr key={index} className='table-row' >
                              <td className='key'>{key}</td>
                              <td className='value'>{value}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      <SuggestedProducts category={productdata.category} id={productdata._id}/>
      </section>
    </>
  )
}
