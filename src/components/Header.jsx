// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BiPhoneCall } from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {PiArchiveBoxBold} from 'react-icons/pi'
import{VscAccount} from 'react-icons/vsc'
import {CgShoppingCart} from 'react-icons/cg'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Header = () => {
    const location=useLocation()
  return (
   <>
    <header className='header-top-stripe p-1 px-4 shadow-md'>
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-6">
                    <p>The Exciting 50% off</p>
                </div>
                <div className="col-6 d-flex justify-content-between">
                   <div>
                      <a href="tel-+111111">Call us +1111111</a>
                   </div>
                   <div>
                   <Link><BiPhoneCall className='fs-3 mx-4'/>
                  </Link>
                  <Link> <AiOutlineMail className='fs-3 mx-4'/></Link>
                   </div>
                </div>
            </div>
        </div>
    </header>
    <header>
        <div className="header-upper px-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-2 m-auto text-center">
                        <Link to="/">
                            <img src={logo} alt="logo" className='img-fluid logo'/>
                        </Link>
                    </div>
                    <div className="nav-links col-5 d-flex align-items-center justify-content-evenly text-center m-auto">
                        <Link to={'/'} className={location.pathname==='/' ? 'active' : 'inactive'}>Home</Link>
                        <Link to={'/shop'} className={location.pathname==='/shop' ? 'active' : 'inactive'}>Shop</Link>
                        <Link to={'/blog'} className={location.pathname==='/blog' ? 'active' : 'inactive'}>Blog</Link>
                        <Link to={'/about'} className={location.pathname==='/about' ? 'active' : 'inactive'}>About</Link>
                        <Link to={'/contact'} className={location.pathname==='/contact' ? 'active' : 'inactive'}>Contact</Link>
                    </div>
                    <div className="nav-link-nav col-4 d-flex align-items-center justify-content-around">
                       <Link className='d-flex'>
                       <PiArchiveBoxBold className='fs-3 mx-2'/>
                       <span>whishlet</span>
                       </Link >
                       <Link className='d-flex'>
                          <VscAccount className='fs-3 mx-2'/>
                      <span>Account</span>
                       </Link>
                       <Link className='d-flex'>
                            <CgShoppingCart className='fs-3 mx-2'/>
                            <span>Cart</span>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
   </> 
  )
}

export default Header