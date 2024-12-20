import React from 'react'

export const Review = () => {
  return (
    <>
    <section className='section  partners-section flex'>
        <div className='container partners-container flex'>
          <h3>Our Happy Customers</h3>
          <div className='reviews flex'>
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
          </div>
        </div>
      </section>
    </>
  )
}
