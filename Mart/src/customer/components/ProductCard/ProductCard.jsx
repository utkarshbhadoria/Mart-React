import React, { useContext , useEffect } from 'react'
import ProductContext from '../../../contexts/productContext/productcontext'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
import { toast } from 'react-toastify'

function ProductCard() {
    const { mode, product } = useContext(ProductContext)

    const dispatch  = useDispatch();
    const cartItems = useSelector((state)=>state.cart)

    const addCart= (product) =>{
        dispatch(addToCart(product))

        toast.success("Added to Cart")
    }
    
    useEffect(() => {
            localStorage.setItem('cart' , JSON.stringify(cartItems))           
      
    }, [cartItems])
    

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-blue-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4" onClick={()=>{Navigate('/productdetail')}}>


                    {product && product.map((item) => {
                        const {title , price, description, imageUrl } = item
                        return (
                            <div key={item.id}  className="p-4 md:w-1/4  drop-shadow-lg " >
                                <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden object-cover" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                    <div className="flex justify-center cursor-pointer" >
                                        <img className=" rounded-2xl w-full h-80 object-cover p-2 hover:scale-110 transition-transform duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                    </div>
                                    <div className="p-3 ">
                                        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h2> */}
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                                        <p className="leading-relaxed mb-3 text-gray-700">{item.description}</p> 
                                        <p className="leading-relaxed text-md text-gray-700 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {price}</p>
                                        <Link to="cart">
                                        <div className=" flex justify-center">
                                        <button onClick={()=>addCart(item)} type="button"  className="focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                        </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        )

                    })}


                </div>

            </div>
        </section >

    )
}

export default ProductCard