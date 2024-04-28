import React from 'react';

const ProductDetail = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div className="h-64 md:h-auto md:w-full flex items-center bg-cover rounded-t" style={{ backgroundImage: `url('path/to/tiered/images/pri/women/clothing/basic/tee.jpg')` }}>
            <h2 className="text-2xl font-bold text-center text-white tracking-wide uppercase">Basic Tee</h2>
          </div>
          <div className="p-8 rounded-b">
            <div className="mb-4">
              <span className="text-gray-700">Rating:</span>
              <span className="text-yellow-500">3.9</span>
              <span className="text-gray-700">(512 reviews)</span>
            </div>
            <div className="mb-4">
              <span className="text-gray-700">Size:</span>
              <span className="text-black font-bold">XXS</span>
            </div>
            <div className="mb-4">
              <span className="text-gray-700">Price:</span>
              <span className="text-black font-bold">$35</span>
            </div>
            <div className="mb-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">Get the code →→</a>
            </div>
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700">The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.</p>
            <p className="text-gray-700 mt-4">Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
            <h2 className="text-2xl font-bold mb-4 mt-8">Fabric & Care</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Only the best materials</li>
              <li>Ethically and locally made</li>
              <li>Pre-washed and pre-shrunk</li>
              <li>Machine wash cold with similar colors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;