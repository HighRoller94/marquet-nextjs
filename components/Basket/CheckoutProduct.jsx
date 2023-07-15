import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
}) {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);

  return (
    <motion.div layout key={key} className="flex mb-5 w-full gap-4">
      <div className="w-[120px] h-[120px] overflow-hidden relative group bg-neutral-50">
        <Image
          className="w-auto full object-cover"
          src={gallery[0]}
          fill
          loading="lazy"
          alt={name}
        />
      </div>
      <div className="flex flex-col justify-between py-2">
        <div className="flex flex-col">
          <h1 className="text-neutral-700 font-bold text-xl  uppercase">
            {name}
          </h1>
          <p className="text-gray-500 text-base md:text-lg font-bold tracking-wide mt-1">
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
          <div className="flex items-center ml-12 gap-3">
            <h1 className="text-neutral-700 font-bold tracking-widest text-sm  uppercase">
              Size:
            </h1>
            <p className="text-gray-500 text-sm font-bold tracking-wide">
              {selectedSize}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CheckoutProduct;
