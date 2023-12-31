import logo from "public/images/logo.jpg";
import Image from "next/image";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-center h-[96px] items-center text-base flex-row">
      <nav className="w-[1240px] flex flex-row h-[48px] items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            width={160}
            height={22}
            alt="logo"
            className="mr-[40px]"
          ></Image>
        </Link>
        <ul className="flex flex-row text-base mr-[40px] gap-[24px]">
          {/* <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li> */}
          <Link href={"shop"}>Shop</Link>
          <Link href={"product"}>product</Link>
          <Link href={"cart"}>cart</Link>
          <Link href={"category"}>category</Link>
        </ul>

        <div className="w-[545px] flex items-center bg-gray-200 rounded-full mr-[40px] h-[48px]">
          <AiOutlineSearch size={25} className={"ml-3"} />
          <input className=" bg-inherit pl-1 outline-none " type="text" />
        </div>

        <div className="flex flex-row gap-[14px]">
          <Link href={"cart"}>
            <AiOutlineShoppingCart size={25} />
          </Link>
          <Link href={"cart"}>
            <RiAccountCircleLine size={25} />
          </Link>
          {/* <AiOutlineShoppingCart size={25} />

          <RiAccountCircleLine size={25} /> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
