import Image from "next/image";
import img from "/public/images/image 9.svg";
const Item = () => {
  return (
    <div>
      <div>
        <Image src={img} width={296} height={50} alt="img"></Image>
      </div>

      <h3>T-Shirt</h3>
      <div>Rating</div>
      <div>Price</div>
    </div>
  );
};

export default Item;
