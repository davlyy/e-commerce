import React from "react";

const Checkout = () => {
  return (
    <div className="p-4 flex flex-col gap-8 w-[505px] rounded-3xl border h-[458px] justify-center">
      <h1 className="font-semibold text-3xl">Order Summary</h1>
      <div className="w-full pb-4 border-b">
        <div className="w-full flex justify-between">
          <h4>Subtotal</h4>
          <span>$565</span>
        </div>
        <div className="w-full flex justify-between">
          <h4>Discount (-20%)</h4>
          <span>-$113</span>
        </div>
        <div className="w-full flex justify-between">
          <h4>Delivery Fee</h4>
          <span>$15</span>
        </div>
      </div>
      <div className="flex justify-between w-full text-3xl">
        <h4>Total</h4>
        <span>$415</span>
      </div>
      <div className="flex w-full gap-4">
        <input
          className="bg-gray-300 w-full px-6 rounded-full outline-none"
          type="text"
        />
        <button className="rounded-full py-3 w-32 bg-black text-white ">
          Apply
        </button>
      </div>
      <div>
        <button className="w-full py-3 rounded-full bg-black text-white ">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
