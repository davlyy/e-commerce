import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Filters = () => {
  return (
    <div className="w-[295px] max-h-[1070px] rounded-3xl border">
      <div className="px-6 py-5 flex flex-col gap-6">
        <div className="flex justify-between border-b pb-4 items-center">
          <h4 className="text-lg font-semibold">Filters</h4>
          <GiSettingsKnobs className="opacity-60" />
        </div>
        <div className="border-b pb-6 flex flex-col gap-2 opacity-60">
          <h5>T-shirts</h5>
          <h5>Shirts</h5>
          <h5>Shorts</h5>
          <h5>Hoodies</h5>
          <h5>Jeans</h5>
        </div>
        <div className="border-b pb-6">
          <h4 className="text-lg font-semibold">Price</h4>
          <div>Slider</div>
        </div>
        <div className="border-b pb-6">
          <h4 className="text-lg font-semibold pb-4">Colors</h4>
          <div className="grid grid-cols-5 gap-2 max-w-fit">
            <div className="p-4 bg-green-800 rounded-full "></div>
            <div className="p-4 bg-red-600 rounded-full "></div>
            <div className="p-4 bg-blue-600 rounded-full "></div>
            <div className="p-4 bg-white border rounded-full "></div>
            <div className="p-4 bg-blue-400 rounded-full "></div>
            <div className="p-4 bg-orange-600 rounded-full "></div>
            <div className="p-4 bg-pink-600 rounded-full "></div>
            <div className="p-4 bg-yellow-500 rounded-full "></div>
            <div className="p-4 bg-purple-700 rounded-full "></div>
            <div className="p-4 bg-black rounded-full "></div>
          </div>
        </div>
        <div className="border-b pb-6 ">
          <h4 className="text-lg font-semibold pb-4">Size</h4>
          <div className="flex flex-wrap gap-2 opacity-60">
            <button className="px-4 py-2 bg-gray-300 rounded-full">
              XX-Small
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded-full">
              X-Small
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded-full">
              Small
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded-full">
              Medium
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded-full">
              Large
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded-full">
              XX-Large
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded-full">
              3L-Large
            </button>
          </div>
        </div>
        <div className="pb-6">
          <h4 className="font-semibold text-lg pb-2">Dress Style</h4>
          <div className="flex flex-col items-start gap-1 opacity-60 pb-6">
            <button className="flex w-full justify-between items-center">
              Casual <MdOutlineKeyboardArrowRight />
            </button>
            <button className="flex w-full justify-between items-center">
              Formal <MdOutlineKeyboardArrowRight />
            </button>
            <button className="flex w-full justify-between items-center">
              Party <MdOutlineKeyboardArrowRight />
            </button>
            <button className="flex w-full justify-between items-center">
              Gym <MdOutlineKeyboardArrowRight />
            </button>
          </div>
          <button className="w-full py-2 text-white bg-black rounded-full">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
