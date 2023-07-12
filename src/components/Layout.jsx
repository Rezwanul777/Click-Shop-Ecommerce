// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'


const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout