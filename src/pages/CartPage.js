
import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const changeQuantity = (productId, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (action === "increase") item.quantity += 1;
        if (action === "decrease" && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalPrice = totalPrice * 0.9; // Apply 10% discount

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <div>
                <h2>{item.title}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => changeQuantity(item.id, "increase")}>+</button>
                <button onClick={() => changeQuantity(item.id, "decrease")}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="p-4">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <h3>Discounted Price: ${finalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
      <button onClick={() => navigate("/")}>Back to Products</button>
    </div>
  );
};

export default CartPage;
