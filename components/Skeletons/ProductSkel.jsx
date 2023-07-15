"use client";

const ProductSkel = () => {
  return (
    <div
      className="flex flex-col cursor-pointer h-fit mb-5 min-w-[150px] pb-5"
    >
      <div className="w-full mx-auto overflow-hidden relative group pt-[125%] bg-neutral-300 animate-pulse">
      </div>
      <div className="flex flex-col mt-4">
        <h1 className="text-neutral-700 font-bold tracking-widest text-sm  uppercase bg-neutral-300 h-5 w-8/12 animate-pulse">
        </h1>
        <p className="text-gray-500 text-sm font-bold tracking-wide mt-2 bg-neutral-300 h-5 w-6/12 animate-pulse">
        </p>
      </div>
    </div>
  );
};

export default ProductSkel;
