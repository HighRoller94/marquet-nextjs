import React from "react";
import AltProducts from "@/components/AltProducts";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HiHeart } from "react-icons/hi";

const Favourites = () => {
  return (
    <div className="mx-auto w-full flex flex-col max-w-[1250px] px-4 lg:px-6 xl:px-0 mt-6">
      {/* <Breadcrumbs /> */}
      <div className="flex flex-col items-center justify-center mb-8 md:my-6">
        <div className="flex items-center justify-center my-3">
          <HiHeart size={30} className="mr-3 lg:mr-4"/>
          <h1 className="font-bold text-2xl md:text-3xl">Saved Items</h1>
        </div>
        <p className=" text-gray-500 text-base w-11/12 lg:w-12/12 capitalize text-center">When you add an item to your favourites, it'll show here!</p>
      </div>
      <div>
        <AltProducts />
      </div>
    </div>
  );
};

export default Favourites;
