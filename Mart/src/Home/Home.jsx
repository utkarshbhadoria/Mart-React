import React from 'react'
import Layout from '../customer/components/Layout'
import ProductCard from './../customer/components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../redux/cartSlice';
function Home() {
  // const dispatch = useDispatch();
  // const cartItem = useSelector((state)=> state.cart)
  // console.log(cartItem);

  // function addCart(){
  //   dispatch(addToCart("shirt"))
  // }

  // const deleteCart=() => {
  //   dispatch(deleteFromCart("shirt"))
  // }

  return (
    <div >
     
      <Layout>     
       <ProductCard/>
     </Layout>
    
    
    </div>
  )
}

export default Home