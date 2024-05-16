import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../../../contexts/productContext/productcontext';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { toast } from 'react-toastify';

function AddProduct() {
    const context = useContext(ProductContext);
    const { products, setProducts, addProduct } = context;

    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (image) {
            const imageRef = ref(storage, `images/${image.name}`);
            try {
                await uploadBytes(imageRef, image);
                toast.success("Image uploaded successfully");
                const url = await getDownloadURL(imageRef);
                setProducts((prevProducts) => ({ ...prevProducts, imageUrl: url }));
                return url; // Return the URL for use in adding the product
            } catch (error) {
                toast.error("Failed to upload image");
                console.error("Error uploading image: ", error);
            }
        }
        return null;
    };

    const handleAddProduct = async () => {
        const imageUrl = await handleUpload();
        if (imageUrl) {
            addProduct();
        }
    };

    const getImageUrl = async () => {
        const imagesRef = ref(storage, "images");
        const imageUrls = [];
        try {
            const imageList = await listAll(imagesRef);
            for (const imageRef of imageList.items) {
                const url = await getDownloadURL(imageRef);
                imageUrls.push(url);
            }
            imageUrls.forEach((url) => {
                if (url.includes(products.imagetitle)) {
                    setProducts((prevProducts) => ({ ...prevProducts, imageUrl: url }));
                }
            });
        } catch (error) {
            console.error("Error fetching image URLs: ", error);
        }
    };

    useEffect(() => {
        getImageUrl();
    }, [products.imagetitle]);

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                    <div>
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input
                            type="text"
                            name='title'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                            onChange={(e) => setProducts({ ...products, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='price'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                            onChange={(e) => setProducts({ ...products, price: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='imagetitle'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Image Title'
                            onChange={(e) => setProducts({ ...products, imagetitle: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='category'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                            onChange={(e) => setProducts({ ...products, category: e.target.value })}
                        />
                    </div>
                    <div>
                        <textarea
                            cols="30"
                            rows="10"
                            name='description'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'
                            onChange={(e) => setProducts({ ...products, description: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            name='image'
                            id="image"
                            className='hidden'
                            onChange={handleFileChange}
                        />
                        <label htmlFor="image" className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white cursor-pointer text-center'>
                            {image ? image.name : 'Upload Image'}
                        </label>
                    </div>
                    <div className='flex justify-center mb-3'>
                        <button
                            onClick={handleAddProduct}
                            className='bg-blue-500 w-full text-black font-bold px-2 py-2 rounded-lg'
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
