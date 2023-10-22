import React from "react";
import ReviewItem from "./ReviewItem";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1620px] m-auto mb-44">
      <div className="flex justify-between w-full mb-10">
        <h1 className="font-black text-5xl uppercase">Our Happy Customers</h1>
        <div className="flex items-end gap-4">
          <AiOutlineArrowLeft size={25} />
          <AiOutlineArrowRight size={25} />
        </div>
      </div>

      <div className="flex flex-row gap-8">
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
      </div>
    </div>
  );
};

export default Reviews;
