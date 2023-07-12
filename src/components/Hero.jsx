// eslint-disable-next-line no-unused-vars
import React from 'react'
import icon1 from '../assets/images/icons/icon1.png'
import icon2 from '../assets/images/icons/icon2.png'
import icon3 from '../assets/images/icons/icon3.png'
import icon4 from '../assets/images/icons/icon4.png'
import icon5 from '../assets/images/icons/icon5.png'
import icon6 from '../assets/images/icons/icon6.png'

const Hero = () => {
  return (
    <section className='hero p-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="hero-details d-flex justify-content-around text-center mx-2">
              <div className="card p-2">
                <div className="card-details">
                  <img src={icon1} alt="" className='img-fluid m-auto'/>
                <p>First Order</p>
                </div>
              </div>
              <div className="card mx-2">
                <div className="card-details p-2">
                  <img src={icon2} alt="" className='img-fluid m-auto'/>
                <p>Quick Shipping</p>
                </div>
              </div>
              <div className="card mx-2">
               <div className="card-details p-2">
                 <img src={icon3} alt="" className='img-fluid m-auto'/>
                <p>High save</p>
               </div>
              </div>
              <div className="card mx-2">
                <div className="card-details p-2">
                  <img src={icon4} alt="" className='img-fluid m-auto'/>
                <p>First Orders</p>
                </div>
              </div>
              <div className="card mx-2">
               <div className="card-details p-2"> 
               <img src={icon5} alt="" className='img-fluid m-auto'/>
                <p>24/7 support</p></div>
              </div>
              <div className="card mx-2">
                <div className="card-details p-2">
                <img src={icon6} alt="" className='img-fluid m-auto'/>
                <p>Discounts</p>
                </div>

              </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero