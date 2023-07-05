"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ItemAddedToFavouriteToast from "./Toasts/ItemAddedToFavouritesToast";
import ProductStyles from "../styles/components/Product.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Product = ({ key, name, price, gallery, type, product, paramQuery }) => {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
  const [saved, setSaved] = useState("");
  const [productsFound, setProductsFound] = useState([]);
  const [clicked, setClicked] = useState(false);

  const itemExists = productsFound.find((product) => product.name === name);

  const saveProductToFavourites = () => {
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
    localStorage.setItem(
      `savedProducts`,
      JSON.stringify([...savedProducts, product])
    );
    setSaved(true);
    setClicked(true);
    toast((t) => (
      <ItemAddedToFavouriteToast
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
    <div key={key} className={ProductStyles.product}>
      <div className={ProductStyles.imageContainer}>
        <Link
          href={{
            pathname: `/products/${product.id}`,
          }}
        >
          <Image src={gallery[0]} fill loading="lazy" alt={name} />
          <Image
            src={gallery[1]}
            fill
            loading="lazy"
            alt={name}
            className={ProductStyles.hoverImage}
          />
        </Link>
        {/* <button className={ProductStyles.lookButton}>
              <AiOutlineEye className={ProductStyles.icon} />
              Shop the Look
            </button> */}
        {itemExists ? (
          <div
            className={ProductStyles.iconHolder}
            onClick={removeProductFromFavourites}
          >
            <AiFillHeart
              className={
                clicked
                  ? `${ProductStyles.favIcon} ${ProductStyles.clicked}`
                  : `${ProductStyles.favIcon} `
              }
            />
          </div>
        ) : (
          <div
            className={ProductStyles.iconHolder}
            onClick={saveProductToFavourites}
          >
            <AiOutlineHeart className="transition" size={30} />
          </div>
        )}
      </div>
      <div className="flex flex-col mt-4">
        <p className="text-gray-500 text-base font-bold tracking-wide">£{priceFixed}</p>
        <h1 className="text-neutral-900 capitalize text-lg mt-1 font-medium">{name}</h1>
      </div>
    </div>
  );
};

export default Product;
