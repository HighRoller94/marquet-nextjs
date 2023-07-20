import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ImBin } from "react-icons/im";
import { addCheckoutProduct, removeCheckoutProduct } from "@/redux/cartSlice";
import { removeProduct } from "@/redux/cartSlice";
import ItemAddedToFavouritesToast from "../Toasts/ItemAddedToFavouritesToast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  key,
  name,
  price,
  gallery,
  selectedSize,
  quantity,
  product
}) {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
  const dispatch = useDispatch();

  const removeProductItem = () => {
    dispatch(removeProduct({ ...product, price, quantity }));
  };

  return (
    <motion.div layout key={key} className="flex justify-between w-full">
      <div className="flex mb-5 w-full gap-4 overflow-hidden">
        <div className="w-[100px] h-[100px] min-w-[100px] overflow-hidden relative group bg-neutral-50">
          <Image
            className="w-auto full object-cover"
            src={gallery[0]}
            fill
            loading="lazy"
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-between py-2 w-full truncate">
          <div className="flex flex-col">
            <h1 className="text-neutral-700 font-bold text-lg md:text-xl uppercase truncate w-full ">
              {name}
            </h1>
            <p className="text-gray-500 text-base font-bold tracking-wide ">
              £{priceFixed}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <h1 className="text-neutral-700 font-bold tracking-widest text-sm  uppercase">
                Qty:
              </h1>
              <div className="flex items-center ml-4 gap-3">
                <p className="text-gray-500 text-sm font-bold tracking-wide ">
                  {quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center ml-8 md:ml-12 gap-3">
              <h1 className="text-neutral-700  font-bold tracking-widest text-sm  uppercase">
                Size:
              </h1>
              <p className="text-gray-500 text-sm font-bold tracking-wide">
                {selectedSize}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden sm:flex md:hidden lg:flex bg-neutral-400 text-neutral-100 rounded-full p-2 w-9 h-9 items-center cursor-pointer justify-center transition hover:bg-neutral-300"
        onClick={removeProductItem}
      >
        <ImBin className="transition ml-[1px]" size={20} />
      </div>
    </motion.div>
  );
}

export default CheckoutProduct;
