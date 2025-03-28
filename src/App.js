import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
