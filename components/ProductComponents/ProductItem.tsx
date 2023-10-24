import React from "react";
import Image from "next/image";
import shirt from "/public/images/shirt.svg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const ProductItem = () => {
  return (
    <div className="flex gap-5 justify-center mt-10  pt-2">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <Image src={shirt} alt="image" width={152} height={167}></Image>
          <Image src={shirt} alt="image" width={152} height={167}></Image>
          <Image src={shirt} alt="image" width={152} height={167}></Image>
        </div>
        <div>
          <Image src={shirt} alt="image" width={470} height={509}></Image>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-6xl">One Life Graphic T-shirt</h1>
        <div>4.5/5</div>
        <div>
          <div className="flex gap-4 items-center">
            <h4>260$</h4>
            <h4 className="line-through opacity-60">300$</h4>
            <h4 className="bg-red-300 text-red-600 rounded-full max-w-fit py-1 px-4">
              -30%
            </h4>
          </div>
          <p className="py-5">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </div>
        <div className="border-t-2 border-b-2 flex flex-col py-4">
          <p className="pb-4">Select Colors</p>
          <div className="flex flex-row gap-4">
            <div className="p-4 bg-red-600 rounded-full "></div>
            <div className="p-4 bg-slate-800 rounded-full "></div>
            <div className="p-4 bg-green-600 rounded-full "></div>
          </div>
        </div>
        <div className="flex border-b-2 py-4 flex-col gap-4">
          <p>Choose Size</p>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-slate-300 rounded-full">
              Small
            </button>
            <button className="px-6 py-2 bg-slate-300 rounded-full">
              Medium
            </button>
            <button className="px-6 py-2 bg-slate-300 rounded-full">Big</button>
            <button className="px-6 py-2 bg-slate-300 rounded-full">
              Extra Big
            </button>
          </div>
        </div>
        <div className="flex pt-6 gap-4">
          <div className="px-10 py-4 bg-slate-300 rounded-full flex items-center gap-5">
            <AiOutlineMinus />
            <span>1</span>
            <AiOutlinePlus />
          </div>
          <button className="bg-black text-white px-32 py-4 rounded-full">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
