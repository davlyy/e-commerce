import React from "react";
import Item from "../Item";

const Shop = () => {
  return (
    <div>
      <div className="flex justify-between pb-4">
        <h2 className="font-semibold text-xl">Casual</h2>
        <div className="flex">
          <h4>Showing 1-10 of 100 Products</h4>
          <div>Sort By: Price</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-fit border-b pb-4">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className="flex justify-between py-4 items-center">
        <button className="border rounded-lg px-4 py-2">Previous</button>
        <div className="flex items-center ">1,2,3</div>
        <button className="border rounded-lg px-4 py-2">Next</button>
      </div>
    </div>
  );
};

export default Shop;
