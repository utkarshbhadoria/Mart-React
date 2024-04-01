import React, { Children } from 'react'
import Footer from './Footer/Footer'
import Navigation from './Nav'

function Layout({children}) {
  return (
    <>
     <Navigation/>
     <div>
        {children}
     </div>

     <Footer/>

    </>
  )
}

export default Layout