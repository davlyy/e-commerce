import Brands from "@/components/Brands";
import DiscountBar from "@/components/DiscountBar";
import HeroPage from "@/components/HeroPage";
import NavBar from "@/components/NavBar";
import Showcase from "@/components/Showcase";
import CategoriesBlock from "@/components/CategoriesBlock";

export default function Home() {
  return (
    <div>
      <DiscountBar></DiscountBar>
      <NavBar></NavBar>
      <HeroPage></HeroPage>
      <Brands></Brands>
      <Showcase></Showcase>
      <Showcase></Showcase>
      <CategoriesBlock></CategoriesBlock>
    </div>
  );
}
