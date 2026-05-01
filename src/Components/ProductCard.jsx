import React from "react";
export const ProductCard = ({ product }) => {
  // console.log(product);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition duration-300  flex flex-col " >
 
      <div className=" h-40 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        {/* Image Section */}
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>
      {/*   Content */}
      <div className="mt-4 flex flex-col fflex-grow">
        {/* Product Title  */}
        <h1 className="text-sm font-semibold text-gray-800  line-clamp-2">
          {product.title}
        </h1>
        <p className="text-lg font-bold  text-red-500  mt-2">
          {" "}
          ${product.price}
        </p>
        <button className=" w-full cursor-pointer mt-auto bg-red-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-600  transition duration-300">
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
};
