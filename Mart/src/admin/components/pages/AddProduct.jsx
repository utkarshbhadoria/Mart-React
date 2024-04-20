import React, { useContext } from 'react'
import ProductContext from '../../../contexts/productContext/productcontext'
function AddProduct() {
    const context = useContext(ProductContext);
    const {products, setProducts , addProduct} = context
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                            onChange={(e) => setProducts({...products , title: e.target.value})}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                            onChange={(e) => setProducts({...products , price: e.target.value})}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                            onChange={(e) => setProducts({...products , imageUrl: e.target.value})}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                            onChange={(e) => setProducts({...products , category: e.target.value})}
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'
                            onChange={(e) => setProducts({...products , description: e.target.value})}
                        >
                            

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button onClick={addProduct}
                            className=' bg-blue-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct