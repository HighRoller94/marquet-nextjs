"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ItemAddedToFavouritesToast from "./Toasts/ItemAddedToFavouritesToast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import productLikedAnimationStyles from "../styles/animations/productLikedAnimation.module.scss";

import applyDiscount from "@/lib/util/applyDiscount";

const Product = ({ key, name, price, gallery, type, product, paramQuery }) => {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
  const [saved, setSaved] = useState("");
  const [productsFound, setProductsFound] = useState([]);
  const [clicked, setClicked] = useState(false);

  const itemExists = productsFound.find((product) => product.name === name);

  console.log(productsFound)
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

  useEffect(() => {
    if (localStorage.getItem("savedProducts") === null) {
      let products = [];
      localStorage.setItem(`savedProducts`, JSON.stringify(products));
    }
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
    setProductsFound(savedProducts);
  }, [saved]);

  return (
    <div
      key={key}
      className="flex flex-col cursor-pointer h-fit mb-5 min-w-[150px] pb-5"
    >
      <div className="w-full mx-auto overflow-hidden relative group bg-neutral-50 pt-[125%]">
        <Link
          href={{
            pathname: `/products/${product.id}`,
          }}
        >
          {product.discount ? (
            <div className="absolute right-0 top-6 w-[80px] h-[30px] z-30 bg-red-600 flex items-center justify-center after:absolute after:-left-[15px] ">
              <div className="left-[0px] absolute -top-1.5 transform -translate-x-1/2 translate-y-1/2 rotate-45 z-20 w-5 h-[21px] bg-red-600"></div>
              <h1 className="uppercase font-semibold text-neutral-50 z-30 text-sm tracking-widest">
                {product.discountValue}% off
              </h1>
            </div>
          ) : (
            ""
          )}
          <Image
            className="h-auto max-w-full object-cover bg-neutral-200"
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
            className="hidden transition duration-200 group-hover:flex object-cover h-auto max-w-full"
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
        <h1 className="text-neutral-700 font-bold tracking-widest text-sm  uppercase">
          {name}
        </h1>
        {product.discount ? (
          <div className="flex items-center gap-x-2">
            <p className="text-gray-500 text-xs font-bold tracking-wide mt-1 relative after:absolute after:w-[104%] after:bg-red-600 after:top-[7px] after:-left-[2px] after:h-[2px] after:rotate-[7deg]">
              £{priceFixed}
            </p>
            <p className="text-red-600 text-sm font-bold tracking-wide mt-1">
              £{applyDiscount(priceFixed, product.discountValue)}
            </p>
          </div>
        ) : (
          <p className="text-gray-500 text-sm font-bold tracking-wide mt-1">
            £{priceFixed}
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;