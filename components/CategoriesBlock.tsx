import Image from "next/image";
import casual from "public/images/image 11.svg";
import party from "public/images/image 12.svg";
import formal from "public/images/image 13.svg";
import gym from "public/images/image 14.svg";

const CategoriesBlock = () => {
  return (
    <div className="flex justify-center mt-40 mb-20">
      <div className="bg-gray-200 rounded-3xl w-[1239px] h-[866px] flex flex-col items-center ">
        <h1 className="text-center font-black text-6xl pt-16">
          Browse by dress style
        </h1>
        <div className="grid gap-4 grid-cols-3  max-w-[1100px] h-[600px] w-[1100px] mt-[80px] text-3xl font-semibold">
          {/* <div className="w-64 h-48 bg-white rounded-2xl">Casual</div>
          <div className="w-[600px] h-48 bg-white rounded-2xl">Formal</div>
          <div className="w-[600px] h-48 bg-white rounded-2xl">Gym</div>
          <div className="w-64 h-48 bg-white rounded-2xl">Party</div> */}
          <div className="bg-white rounded-2xl bg-casual bg-cover">
            <h3 className="p-3">Casual</h3>
          </div>
          <div className="bg-white rounded-2xl col-span-2 bg-formal bg-cover">
            <h3 className="p-3">Formal</h3>
          </div>
          <div className="bg-white rounded-2xl col-span-2 bg-party bg-cover">
            <h3 className="p-3">Party</h3>
          </div>
          <div className="bg-white rounded-2xl bg-gym bg-cover">
            <h3 className="p-3">Gym</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBlock;
