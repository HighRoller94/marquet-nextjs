import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

const AltProduct = ({
  name,
  price,
  gallery,
  type,
  product,
  setCount,
  count,
}) => {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
  const [saved, setSaved] = useState("");
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const removeProductFromFavourites = () => {
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
    savedProducts.forEach((savedProduct) => {
      if (savedProduct._id === product._id) {
        const index = savedProducts.indexOf(savedProduct);
        if (index > -1) {
          savedProducts.splice(index, 1);
          localStorage.setItem(`savedProducts`, JSON.stringify(savedProducts));
        }
        setSaved(false);
      }
      setCount(count + 1);
    });
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity }));
    removeProductFromFavourites();
  };

  return (
    <motion.div
      className="flex flex-col cursor-pointer h-fit mb-5 min-w-[150px] pb-5 "
      layout
    >
      <div className="w-full mx-auto overflow-hidden relative group pt-[125%] bg-neutral-200">
        <Link href={`/products/${product.id}`}>
          <Image
            className="h-auto max-w-full object-cover"
            src={gallery[0]}
            fill
            loading="lazy"
            alt={name}
          />
          <Image
            src={gallery[1]}
            fill
            loading="lazy"
            alt={name}
            className="hidden transition group-hover:flex object-cover h-auto max-w-full"
          />
        </Link>
        <div
          className="absolute top-5 right-5 bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
          onClick={removeProductFromFavourites}
        >
          <ImBin className="transition" size={20} />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h1 className="text-neutral-700 font-bold tracking-widest text-sm uppercase">
          {name}
        </h1>
        <p className="text-gray-500 text-sm font-bold tracking-wide mt-1">
          £{priceFixed}
        </p>
      </div>

      <button
        className="bg-neutral-900 outline-none border-none py-3 px-4 w-full text-xs text-neutral-50 font-semibold uppercase tracking-widest my-5 hover:opacity-90 cursor-pointer"
        onClick={handleClick}
      >
        Move to Cart
      </button>
    </motion.div>
  );
};

export default AltProduct;
