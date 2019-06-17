import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const renderProducts = () => {
    return cartStorage.map(item => {
      return (
        <div className="product">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <Link to="/">voltar</Link>
      {renderProducts()}
    </div>
  );
};
export default Cart;
