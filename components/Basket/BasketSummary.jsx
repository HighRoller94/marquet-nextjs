"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import BasketProductList from "./BasketProductList";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";

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
    scrollToTop()
  }, []);

  return (
    <div className="w-full">
      <div>
        <div>
          <div className="flex items-center my-5">
            {quantity > 0 ? (
              <AiFillShopping size={30} className="mr-3 lg:mr-4" />
            ) : (
              <AiOutlineShopping size={30} className="mr-3 lg:mr-4" />
            )}
            <h1 className="font-bold text-2xl md:text-3xl">Basket Summary</h1>
          </div>
          <p className=" text-gray-500 text-base w-11/12 lg:w-12/12">
            You have <span>{quantity}</span> items in your cart.
          </p>
        </div>
        {quantity > 0 ? (
          <>
            <BasketProductList products={cartProducts} />
          </>
        ) : (
          <h1 className="text-lg mt-8">There are no items in your cart. <span className="font-semibold">Get shopping!</span></h1>
        )}
      </div>
    </div>
  );
};

export default BasketSummary;
