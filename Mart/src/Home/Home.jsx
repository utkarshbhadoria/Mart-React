import React from 'react'
import Layout from '../customer/components/Layout'
import ProductCard from './../customer/components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../redux/cartSlice';
function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)
  console.log(cartItem);

  function addCart(){
    dispatch(addToCart("shirt"))
  }

  const deleteCart=() => {
    dispatch(deleteFromCart("shirt"))
  }

  return (
    <div >
     
      <Layout>
        <div className="flex">
          <button className='bg-gray-300 p-5 m-2' onClick={()=>addCart()}>add</button><br />
          <button className='bg-gray-300 p-5 m-2' onClick={()=>deleteCart()}>delete</button>
        </div>
       <ProductCard/>
     </Layout>
    
    
    </div>
  )
}

export default Home