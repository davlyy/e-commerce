import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <h2 className="text-3xl font-extrabold">Your Cart</h2>
      <div className="w-[715px] py-5 px-6 flex flex-col items-start gap-6 border rounded-3xl">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
