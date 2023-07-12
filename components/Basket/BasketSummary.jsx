"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import BasketProductList from "./BasketProductList";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from 'react-icons/pi'

const BasketSummary = ({ step, setStep }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const cartProducts = useSelector((state) => state.cart.products);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="w-full">
      <div>
        <div className="bg-white px-6 py-6  my-6">
          <div className="flex items-center">
            {quantity > 0 ? (
              <AiFillShopping size={32} className="mr-3 lg:mr-4 text-neutral-700" />
            ) : (
              <AiOutlineShopping size={32} className="mr-3 lg:mr-4 text-neutral-700" />
            )}
            <h1 className="text-xl md:text-3xl font-extrabold uppercase tracking-wide text-neutral-700">My Bag</h1>
          </div>
          <p className=" text-gray-500 text-base w-11/12 lg:w-12/12 mt-2">
            You have <span className="mr-1.5">{quantity}</span>
            {quantity > 1 ? "items" : "item"} in your cart.
          </p>
        </div>
        {quantity > 0 ? (
          <>
            <BasketProductList products={cartProducts} />
          </>
        ) : (
          <h1 className="text-lg mt-8">
            There are no items in your cart.{" "}
            <span className="font-semibold">Get shopping!</span>
          </h1>
        )}
      </div>
      <div className="bg-white p-8 flex items-start mb-6 gap-8">
        <BsTruck className="text-neutral-400" size={42}/>
        <div className="gap-y-2 flex flex-col">
          <h1 className="uppercase tracking-widest text-xl font-extrabold text-neutral-700">Free Delivery for Orders over £50</h1>
          <p className="text-gray-500 text-sm text-semibold">Faster delivery options available to most countries.</p>
          <span className="text-xs underline cursor-pointer font-light mt-2">More info</span>
        </div>
      </div>
      <div className="bg-white p-8  flex items-start gap-8">
        <PiArrowCounterClockwiseBold className="text-neutral-400" size={42}/>
        <div className="gap-y-2 flex flex-col">
          <h1 className="uppercase tracking-widest text-xl font-extrabold text-neutral-700">Easy Returns</h1>
          <p className="text-gray-500 text-sm text-semibold">Send it back within 28 days of receiving your order</p>
          <span className="text-xs underline cursor-pointer font-light mt-2">More info</span>
        </div>
      </div>
    </div>
  );
};

export default BasketSummary;
