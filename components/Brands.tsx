import Image from "next/image";
import versace from "public/images/Group.svg";
import gucci from "public/images/gucci-logo-1 1.svg";
import prada from "public/images/prada-logo-1 1.svg";
import zara from "public/images/Versace.svg";
import kalvin from "public/images/zara-logo-1 1.svg";

const Brands = () => {
  return (
    <div>
      <div className="bg-black w-full h-[123px] flex gap-[150px] justify-center">
        <Image src={versace} width={200} height={200} alt="gucci"></Image>
        <Image src={gucci} width={200} height={200} alt="gucci"></Image>
        <Image src={prada} width={200} height={200} alt="gucci"></Image>
        <Image src={zara} width={200} height={100} alt="gucci"></Image>
        <Image src={kalvin} width={100} height={100} alt="gucci"></Image>
      </div>
    </div>
  );
};

export default Brands;
