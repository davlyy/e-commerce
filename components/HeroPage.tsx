import { PiStarFourFill } from "react-icons/pi";
import hero1 from "public/images/hero1.jpg";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div>
      <div className={`h-[663px] w-full bg-darkwhite relative overflow-hidden`}>
        <div className="w-[577px] ml-[200px] pt-[103px] pb-[63px]">
          <h1 className="text-[64px] font-black leading-[64px] pb-8 ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <h3 className="text-semigray pb-[47px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </h3>
          <button className="bg-black text-white py-4 px-[54px] rounded-full">
            Shop Now
          </button>
        </div>
        <div className="flex ml-[200px]">
          <ul className="text-[40px] font-bold flex text-left">
            <li className="flex flex-col border-r pr-[32px]">
              200+
              <span className="text-base font-normal text-semigray">
                International Brands
              </span>
            </li>
            <li className="flex flex-col border-r pr-[32px] pl-[32px]">
              2,000+
              <span className="text-base font-normal text-semigray">
                High-Quality Products
              </span>
            </li>
            <li className="flex flex-col pl-[32px]">
              30,000+
              <span className="text-base font-normal text-semigray">
                Happy Customers
              </span>
            </li>
          </ul>
        </div>
        <div className="absolute top-[297px] right-[850px]">
          <PiStarFourFill size={40} />
        </div>
        <div>
          <Image
            src={hero1}
            width={600}
            height={20}
            alt="hero"
            className="absolute top-0 right-[150px]"
          ></Image>
        </div>
        <div className="top-[86px] right-[81px] absolute">
          <PiStarFourFill size={80} />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
