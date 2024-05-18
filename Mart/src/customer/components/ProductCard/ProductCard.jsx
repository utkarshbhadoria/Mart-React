import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../../../contexts/productContext/productcontext'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductCard() {
    const { mode, product } = useContext(ProductContext)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success("Added to Cart")
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timeout)
    }, [])

    const renderProductCard = (item) => {
        const { title, price, description, imageUrl , category } = item
        return (
            <div key={item.id} className="p-4 md:w-1/2 lg:w-1/3 drop-shadow-lg">
                <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden object-cover" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                    <div className="flex justify-center cursor-pointer">
                        {isLoading ? (
                            <Skeleton height={200} width={200} />
                        ) : (
                            <img className="rounded-2xl w-full h-80 object-cover p-2 hover:scale-110 transition-transform duration-300 ease-in-out" src={imageUrl} alt="product" onLoad={() => setIsLoading(false)} onClick={() => navigate(`productdetail/${item.id}`)} />
                        )}
                    </div>
                    <div className="p-3">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h1>
                        <p className="leading-relaxed mb-3 text-gray-700">{description}</p>
                        <p className="leading-relaxed text-md text-gray-700 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {price}</p>
                        <Link to="cart">
                            <div className="flex justify-center">
                                <button onClick={() => addCart(item)} type="button" className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">Add</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const categoryOneProducts = product.filter(item => item.category === 'category1')
    const categoryTwoProducts = product.filter(item => item.category === 'category2')
    const categoryThreeProducts = product.filter(item => item.category === 'category3')



    return (
        <section className="text-gray-600 body-font">
            <div className="w-full py-8 md:py-16 mx-auto bg-gray-100">
                {/* First Section */}
                <div className="flex flex-wrap md:flex-nowrap mb-12">
                    <div className="md:w-1/2 px-5 md:pr-8 mb-6 md:mb-0">
                        <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Latest Blog Post</h2>
                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, ut, accusamus numquam itaque cum temporibus sapiente, odit animi amet culpa nulla dolorem? Voluptatibus optio commodi hic, quod nam amet dolore ipsum adipisci maxime, voluptatem tempora, facilis vel corporis explicabo provident labore aliquid quas. Architecto asperiores corporis obcaecati quisquam laudantium, delectus nisi saepe, quam rem ratione corrupti iste perferendis reiciendis ab! Facilis commodi iure nam veritatis aut obcaecati aperiam hic molestias, recusandae nemo fuga, ex repellendus adipisci esse ratione accusamus! Inventore beatae molestias voluptatem nam eius provident reprehenderit sunt, itaque corporis magni. Laboriosam repellat quod consequuntur fuga architecto esse similique?</p>
                        
                        <button className="mt-4 text-blue-500 hover:underline focus:outline-none" onClick={()=> navigate(`/products/${"1"}`)}>View more</button>
                          
                    </div>
                    <div className="md:w-1/2 w-full flex flex-wrap">
                        {product && product.slice(0, 2).map(item => renderProductCard(item))}
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="w-full py-8 md:py-16 mx-auto">
                <div className="flex flex-wrap md:flex-nowrap mb-12">
                    <div className="md:w-1/2 w-full md:pl-8 mb-6 md:mb-0 order-2 md:order-1">
                        <div className="flex flex-wrap">
                            {product && product.slice(2, 4).map(item => renderProductCard(item))}
                        </div>
                    </div>
                    <div className="md:w-1/2 px-5 order-1 md:order-2">
                        <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Another Blog Post</h2>
                        <p className="leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quae ducimus, obcaecati quam nulla vel modi voluptatum fugiat similique odit rem vitae nihil quibusdam impedit esse aperiam autem et voluptates consectetur, saepe repellat blanditiis excepturi voluptate architecto! Expedita quasi facere enim. Tempora est beatae facere distinctio magnam eaque quod rerum ipsa ea, placeat error consequuntur adipisci expedita labore, deserunt tempore possimus, magni aperiam debitis voluptatum dignissimos quasi? Officia ut sequi aperiam. Provident illo harum doloribus quas magni quos odit at sint tempore? Debitis blanditiis ullam architecto officia. Impedit explicabo nulla dolores, quos saepe exercitationem amet et voluptates autem ipsum deleniti?</p>
                        
                        <button className="mt-4 text-blue-500 hover:underline focus:outline-none" onClick={()=> navigate(`/products/${"2"}`)}>View more</button>
                            
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className=" w-full py-8 md:py-16 mx-auto bg-gray-100">
                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="md:w-1/2 px-5 md:pr-8 mb-6 md:mb-0">
                        <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Latest Blog Post</h2>
                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo delectus cupiditate unde tempore! Pariatur aspernatur molestiae mollitia fugiat ipsam minus temporibus? Totam enim quibusdam esse dolores repellendus nisi inventore quidem ut amet repudiandae alias deleniti ipsa distinctio neque voluptatibus, doloribus ullam eligendi id facere fugit? Perspiciatis facere, debitis quisquam est exercitationem veniam? Sunt voluptatibus, aspernatur esse repellendus, assumenda porro delectus nesciunt pariatur laudantium quis magnam iste, beatae modi earum! Tempora deserunt iure veniam? Voluptas, similique perferendis. Nobis accusamus ad eligendi, laborum labore id, magnam maiores asperiores rerum accusantium neque iste nostrum minima, commodi delectus? Qui eum nesciunt ea non?</p>
                        
                        <button className="mt-4 text-blue-500 hover:underline focus:outline-none" onClick={()=> navigate(`/products/${"3"}`)}>View more</button>
                           
                    </div>
                    <div className="md:w-1/2 w-full flex flex-wrap">
                        {product && product.slice(4, 6).map(item => renderProductCard(item))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard
