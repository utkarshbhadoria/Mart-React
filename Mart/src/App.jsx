import React, { useContext } from "react";
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
import { AuthProvider } from "./contexts/authContext/index";
import ProductInfo from "./customer/components/ProductInfo/ProductInfo";
import Dashboard from "./admin/components/Dashboard/Dashboard";

import AddProduct from "./admin/components/pages/AddProduct";
import UpdateProduct from "./admin/components/pages/UpdateProduct";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./customer/components/ProductDetails/ProductDetail";
import ProductContext from "./contexts/productContext/productcontext";
import Order from "./customer/components/Order/Order";

function App() {

  return (
    <AuthProvider>
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productDetail" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<ProtectedRouteUser> <Order/> </ProtectedRouteUser>} />
            <Route path="/dashboard" element={<ProtectedRouteAdmin> <Dashboard /> </ProtectedRouteAdmin>} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/addproduct" element={<ProtectedRouteAdmin><AddProduct /></ProtectedRouteAdmin>} />
            <Route path="/updateproduct" element={<ProtectedRouteAdmin><UpdateProduct /></ProtectedRouteAdmin>} />
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
  const context  = useContext(ProductContext);
  const { isUser} = context

  if (user) return children;
  else return <Navigate to ={'/signin'}/>
}

// protected routes - admin
const ProtectedRouteAdmin = ({children}) =>{

  const context  = useContext(ProductContext);
  const { isAdmin} = context
  //const admin = JSON.parse(localStorage.getItem('user'));


  if (isAdmin) return children;
  else return <Navigate to ={'/signin'}/>
}


