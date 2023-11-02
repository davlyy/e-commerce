import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <h2 className="text-4xl uppercase font-black">Your Cart</h2>
      <div className="w-[715px] py-5 px-6 flex flex-col items-start  border rounded-3xl divide-y divide-solid">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
