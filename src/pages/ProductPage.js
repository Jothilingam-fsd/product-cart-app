
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../service/api";
import ProductCard from "../components/ProductCard";

const ProductPage = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={isInCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductPage;
