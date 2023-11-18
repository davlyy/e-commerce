"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const DiscountBar = () => {
  const [discountClosed, setDiscountClosed] = useState(false);
  const onClick = () => {
    setDiscountClosed(true);
  };
  return (
    !discountClosed && (
      <div>
        <div className="h-[2.375rem] bg-black flex justify-center items-center relative">
          <h4 className="flex h-full items-center text-white">
            Sign up and get 20% off to your first order.
            <span className="underline ml-1">Sign Up Now</span>
          </h4>
          <div
            onClick={onClick}
            className="w-[1.25rem] h-[1.25rem] flex text-white items-center absolute right-[200px] cursor-pointer"
          >
            <AiOutlineClose />
          </div>
        </div>
      </div>
    )

    // <div>
    //   <div className=" h-[2.375rem] bg-black inline-flex pt-[9px] pr-[100px] pb-[9px] pl-[544px] justify-end items-start gap-[425px] shrink-0">
    //     <h4 className="text-white">
    //       Sign up and get 20% off to your first order. Sign Up Now
    //     </h4>
    //     <div className="w-[1.25rem] h-[1.25rem] text-white">
    //       <AiOutlineClose />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DiscountBar;
