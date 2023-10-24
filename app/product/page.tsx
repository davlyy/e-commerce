import NavBar from "@/components/NavBar";
import ItemCustomer from "@/components/ProductComponents/ItemCustomer";
import ProductItem from "@/components/ProductComponents/ProductItem";
import ItemReviews from "@/components/ProductComponents/ItemReviews";
import Recommendations from "@/components/ProductComponents/Recommendations";
import FooterLinks from "@/components/FooterLinks";

import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <ProductItem />
      <ItemCustomer />
      <ItemReviews />
      <Recommendations />
      <FooterLinks />
    </div>
  );
};

export default page;
