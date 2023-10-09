const CategoriesBlock = () => {
  return (
    <div className="flex justify-center mt-40">
      <div className="bg-gray-200 rounded-3xl w-[1239px] h-[866px] justify-center">
        <h1 className="text-center font-black text-6xl pt-16">
          Browse by dress style
        </h1>
        <div className="grid gap-4 grid-cols-2	justify-items">
          <div className="w-64 h-48 bg-white rounded-2xl">Casual</div>
          <div className="w-[600px] h-48 bg-white rounded-2xl">Formal</div>
          <div className="w-[600px] h-48 bg-white rounded-2xl">Gym</div>
          <div className="w-64 h-48 bg-white rounded-2xl">Party</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBlock;
