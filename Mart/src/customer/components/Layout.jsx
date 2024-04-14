import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navigation from './Nav'

function Layout({children}) {
  return (
    <>
     <Navigation/>
     <div>
        {children}
     </div>
     <div>
      <Outlet/>
     </div>

     <Footer/>

    </>
  )
}

export default Layout