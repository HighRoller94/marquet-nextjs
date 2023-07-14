"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { addCheckoutProduct, removeCheckoutProduct } from "@/redux/cartSlice";
import { removeProduct } from "@/redux/cartSlice";
import ItemAddedToFavouritesToast from "../Toasts/ItemAddedToFavouritesToast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

import productLikedAnimationStyles from "../../styles/animations/productLikedAnimation.module.scss";

const BasketProduct = ({
  key,
  name,
  price,
  gallery,
  type,
  product,
  paramQuery,
  selectedSize,
  quantity,
}) => {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
  const [saved, setSaved] = useState("");
  const [productsFound, setProductsFound] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(selectedSize);
  const dispatch = useDispatch();
  const itemExists = productsFound.find((product) => product.name === name);

  const handleOptionSelect = (event) => {
    const selectedSize = event.target.value;
    setSizeSelected(selectedSize);
  };

  const saveProductToFavourites = () => {
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
    localStorage.setItem(
      `savedProducts`,
      JSON.stringify([...savedProducts, product])
    );
    setSaved(true);
    setClicked(true);
    toast((t) => (
      <ItemAddedToFavouritesToast
        product={product}
        onClick={() => toast.dismiss(t.id)}
      />
    ));
  };

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
    });
  };

  const removeProductItem = () => {
    dispatch(removeProduct({ ...product, price, quantity }));
  };

  const addProduct = () => {
    dispatch(addCheckoutProduct({ ...product, price, quantity }));
  };

  const lowerProduct = () => {
    dispatch(removeCheckoutProduct({ ...product, price, quantity }));
  };

  useEffect(() => {
    if (localStorage.getItem("savedProducts") === null) {
      let products = [];
      localStorage.setItem(`savedProducts`, JSON.stringify(products));
    }
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
    setProductsFound(savedProducts);
  }, [saved]);

  return (
    <motion.div
      layout
      key={key}
      className="flex flex-col cursor-pointer h-fit mb-5 min-w-[150px] pb-5"
    >
      <div className="w-full mx-auto overflow-hidden relative group bg-neutral-50 pt-[125%]">
        <Link
          href={{
            pathname: `/products/${product.id}`,
          }}
        >
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
        {itemExists ? (
          <div
            className="absolute bottom-5 right-5 bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
            onClick={removeProductFromFavourites}
          >
            <AiFillHeart
              size={30}
              className={`${
                clicked && `${productLikedAnimationStyles.clicked} `
              }`}
            />
          </div>
        ) : (
          <div
            className="absolute bottom-5 right-5 bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
            onClick={saveProductToFavourites}
          >
            <AiOutlineHeart className="transition" size={30} />
          </div>
        )}
      </div>
      <div className="flex flex-col mt-4">
        <h1 className="text-neutral-700 font-bold tracking-widest text-base  uppercase">
          {name}
        </h1>
        <p className="text-gray-500 text-sm font-bold tracking-wide mt-1">
          £{priceFixed}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex mt-4 items-center">
          <h1 className="text-neutral-700 font-bold tracking-widest text-xs  uppercase">
            Qty:
          </h1>
          <div className="flex items-center ml-4 gap-3">
            <div onClick={lowerProduct}>-</div>
            <p className="text-gray-400 text-sm font-bold tracking-wide ">
              {quantity}
            </p>
            <div onClick={addProduct}>+</div>
          </div>
        </div>
        <div className="flex mt-2 md:mt-4 items-center lg:ml-8">
          <h1 className="text-neutral-700 font-bold tracking-widest text-xs  uppercase">
            Size:
          </h1>
          <select
              className="ml-1 text-neutral-400 w-[70px] outline-none py-2 px-4 text-xs border-none bg-neutral-50 uppercase font-semibold tracking-widest"
              onChange={handleOptionSelect}
              defaultValue={selectedSize}
            >
              {product.sizes.map((size, i) => (
                <option key={i} value={size}>{size}</option>
              ))}
            </select>
        </div>
      </div>
      <button
        onClick={removeProductItem}
        className="bg-neutral-900 outline-none border-none py-3 px-4 w-full text-base text-neutral-50 font-semibold uppercase tracking-widest my-5 hover:opacity-90 cursor-pointer"
      >
        Remove
      </button>
    </motion.div>
  );
};

export default BasketProduct;
