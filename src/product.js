import React from "react";

const Cart = ({ name, price, addToCart }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={() => addToCart({ name, price })}>
        adicionar ao carrinho
      </button>
    </div>
  );
};
export default Cart;
