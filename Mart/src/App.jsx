import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import ProductContextProvider from "./contexts/productContext/productContextProvider";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Signin from "./customer/components/Signup/Signin";
import Signup from "./customer/components/Signup/Signup";
import Home from "./Home/Home";
import { AuthProvider } from "./contexts/authContext";
import ProductInfo from "./customer/components/ProductInfo/ProductInfo";
import Dashboard from "./admin/components/Dashboard/Dashboard";

import AddProduct from "./admin/components/pages/AddProduct";
import UpdateProduct from "./admin/components/pages/UpdateProduct";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <Route path="/dashboard" element={<ProtectedRouteAdmin> <Dashboard /> </ProtectedRouteAdmin>} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/addproduct" element={<ProtectedRouteAdmin><AddProduct /></ProtectedRouteAdmin>} />
            <Route path="/updateproduct/:id" element={<ProtectedRouteAdmin><UpdateProduct /></ProtectedRouteAdmin>} />
          </Routes>
          <ToastContainer />
        </Router>
      </ProductContextProvider>
    </AuthProvider>
  );
}

export default App;


// protected routes - user
const ProtectedRouteUser = ({children}) =>{
  const user = localStorage.getItem('user');

  if (user) return children;
  else return <Navigate to ={'/signin'}/>
}

// protected routes - admin
const ProtectedRouteAdmin = ({children}) =>{
  const admin = JSON.parse(localStorage.getItem('user'));

  if (admin.user.email ==='admin@gmail.com') return children;
  else return <Navigate to ={'/signin'}/>
}


