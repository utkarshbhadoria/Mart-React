import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import App from './App'
import Signin from './customer/components/Signup/Signin'
import Signup from './customer/components/Signup/Signup'
import Home from './Home/Home'
//import {Cart} from "./customer/components/Cart"
import ProductContextProvider from './contexts/productContext/productContextProvider'
import Cart from "./customer/components/Cart/Cart"
function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

      <ProductContextProvider>
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </ProductContextProvider>
    </Router>

    
  )
}

export default CustomRouter
