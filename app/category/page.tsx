import Filters from "@/components/CategoriesComponents/Filters";
import Shop from "@/components/CategoriesComponents/Shop";
import FooterLinks from "@/components/FooterLinks";
import NavBar from "@/components/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center gap-20 mt-20 mb-36 ">
        <Filters />
        <Shop />
      </div>

      <FooterLinks />
    </div>
  );
};

export default page;
