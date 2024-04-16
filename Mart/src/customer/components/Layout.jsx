import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navigation from "./Nav";
import ProductContextProvider from "./../../contexts/productContext/productContextProvider";

function Layout({ children }) {
  return (
    <>
      <Navigation />
        <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
