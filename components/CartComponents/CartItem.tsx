import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from "next/image";
import shirt from "/public/images/shirt.svg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className="flex w-full gap-2">
      <div>
        <Image src={shirt} height={100} width={100} alt="shirt" />
      </div>
      <div className="flex justify-between flex-1">
        <div className="flex flex-col">
          <h3>Name of the Shirt</h3>
          <h6>Size:M</h6>
          <h6>Color: White</h6>
          <h3>Price</h3>
        </div>
        <div className="flex flex-col items-end justify-between">
          <RiDeleteBin5Fill />
          <div className="px-6 py-2 w-fit bg-slate-300 rounded-full flex items-center gap-5 ">
            <div>
              <AiOutlineMinus />
            </div>
            <span>1</span>
            <div>
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
