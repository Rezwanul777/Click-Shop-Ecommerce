// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
        <section className='banner'>
          <div className="container-xxl">
            <div className="row">
              <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
                <span className='shadow-lg p-3'>Trade in offers!</span>
                <h1>Super value Deals</h1>
                <h2>Online Products</h2>
                <p className='mb-2'>Save more with OnclikShop</p>
                <Link className='button-link mb-3 mt-3 ms-2'>Shop Now</Link>
              </div>
            </div>
          </div>
        </section>
        <Hero/>
    </>
  )
}

export default Home