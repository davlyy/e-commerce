import Item from "./Item";
const Showcase = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[663px] w-[1500px] flex justify-center items-center flex-col border-b-2 mt-16">
        <h1 className="font-bold text-5xl mb-16">New Arrivals</h1>
        <div className="flex gap-8 mb-10">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
        <button className="px-16 py-4 rounded-full border-2 mt-4 mb-16">
          View All
        </button>
      </div>
    </div>
  );
};

export default Showcase;
