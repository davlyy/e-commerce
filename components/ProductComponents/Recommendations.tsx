import React from "react";
import Item from "@/components/Item";

const Recommendations = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20 mb-60">
      <div className="font-extrabold text-6xl">You Might Also Like</div>
      <div className="flex gap-4">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Recommendations;
