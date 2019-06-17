import React, { useState, useEffect } from "react";
import Product from "./product";
import { Link } from "react-router-dom";

const Store = () => {
  const [cart, setCartItem] = useState([]);
  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(cartStorage);
  }, []);
  const products = [
    {
      name: "televisão",
      price: 3000
    },
    {
      name: "ventilador",
      price: 200
    },
    {
      name: "batedeira",
      price: 80
    }
  ];
  const addToCart = item => {
    setCartItem([...cart, item]);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const renderProducts = () => {
    return products.map(item => {
      return (
        <Product name={item.name} price={item.price} addToCart={addToCart} />
      );
    });
  };
  return (
    <div>
      <Link to="/cart">the cart</Link>
      {cart.length}
      {renderProducts()}
    </div>
  );
};
export default Store;
