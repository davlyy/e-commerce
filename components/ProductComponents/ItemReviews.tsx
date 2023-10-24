import React from "react";
import ReviewItem from "@/components/ReviewItem";

const ItemReviews = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex justify-center gap-[600px] items-center w-full">
        <p>
          All Reviews <span>(455)</span>
        </p>
        <div className="flex gap-4">
          <button className="rounded-full bg-slate-300 px-5 py-2">1</button>
          <button className="rounded-full bg-slate-300 px-5 py-2 ">
            Latest
          </button>
          <button className="bg-black text-white px-10 py-2 rounded-full">
            Write a Review
          </button>
        </div>
      </div>
      <div className="max-w-fit grid grid-cols-2 gap-4 mt-10">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>

      <div>
        <button className="mt-6 rounded-full border-slate-300 border-2 px-8 py-2">
          Load more Reviews
        </button>
      </div>
    </div>
  );
};

export default ItemReviews;
