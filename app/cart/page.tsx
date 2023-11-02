import React from "react";
import NavBar from "@/components/NavBar";
import Cart from "@/components/CartComponents/Cart";
import Checkout from "@/components/CartComponents/Checkout";
import FooterLinks from "@/components/FooterLinks";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center gap-20 mt-20 mb-64 items-center">
        <Cart />
        <Checkout />
      </div>
      <FooterLinks />
    </div>
  );
};

export default page;
