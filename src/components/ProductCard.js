
import React from "react";

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
      <button
        className={`mt-2 p-2 bg-blue-500 text-white rounded ${
          isInCart ? "bg-red-500" : "bg-blue-500"
        }`}
        onClick={() => (isInCart ? removeFromCart(product.id) : addToCart(product))}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
