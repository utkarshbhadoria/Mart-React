import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import ProductContextProvider from './contexts/productContext/productContextProvider'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'
import Signin from './customer/components/Signup/Signin'
import Signup from './customer/components/Signup/Signup'
import Home from './Home/Home';
import { AuthProvider } from './contexts/authContext';
import ProductInfo from './customer/components/ProductInfo/ProductInfo';
import Dashboard from './admin/components/Dashboard/Dashboard';

import AddProduct from './admin/components/pages/AddProduct';
import UpdateProduct from './admin/components/pages/UpdateProduct';

function App() {

  return (
    <AuthProvider>
     <ProductContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          

          
        </Routes>
      </Router>
    </ProductContextProvider>
    </AuthProvider>

  )
}

export default App