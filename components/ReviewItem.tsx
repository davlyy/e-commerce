import React from "react";
import { AiFillStar } from "react-icons/ai";
const ReviewItem = () => {
  return (
    // <div className="flex w-[400px] h-[240px] py-[28px] px-8 border-2 rounded-3xl items-start content-start flex-col ">
    //   <div className="flex flex-row text-green-600 pb-3">
    //     <AiFillStar />
    //     <AiFillStar />
    //     <AiFillStar />
    //     <AiFillStar />
    //     <AiFillStar />
    //   </div>
    //   <div className=" text-black text-xl font-bold leading-snug pb-3 ">
    //     Sarah M.
    //   </div>
    //   <div className="w-[336px] text-black text-opacity-60 text-base font-normal  leading-snug ">
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
    //     expedita sapiente vel iusto maxime quaerat quae quisquam, voluptates rem
    //     unde praesentium quidem a ab consequatur totam nulla similique numquam.
    //     Sed.
    //   </div>
    // </div>

    <div className="flex w-[400px] h-[240px] py-[28px] px-8 border-2 rounded-3xl items-start content-start flex-wrap">
      <div className="w-full flex flex-row gap-1 text-green-600 pb-3">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <div className="w-full text-black text-xl font-bold leading-snug pb-3">
        Sarah M.
      </div>
      <div className="w-full text-black text-opacity-60 text-base font-normal leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        expedita sapiente vel iusto maxime quaerat quae quisquam, voluptates rem
        unde praesentium quidem a ab consequatur totam nulla similique numquam.
        Sed.
      </div>
    </div>
  );
};

export default ReviewItem;
