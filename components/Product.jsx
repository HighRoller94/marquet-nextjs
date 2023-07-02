"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ItemAddedToFavouriteToast from "./Toasts/ItemAddedToFavouritesToast";
import ProductStyles from "../styles/components/Product.module.scss";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { toast } from "react-hot-toast";

const Product = ({ key, name, price, gallery, type, product, paramQuery }) => {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
  const [saved, setSaved] = useState("");
  const [productsFound, setProductsFound] = useState([]);
  const [clicked, setClicked] = useState(false);

  console.log(paramQuery)
  const item = productsFound.find((product) => product.name === name);

  const saveProductToFavourites = () => {
    const savedProducts = JSON .parse(localStorage.getItem("savedProducts"));
    localStorage.setItem(
      `savedProducts`,
      JSON.stringify([...savedProducts, product])
    );
    setSaved(true);
    setClicked(true);
    toast((t) => (
      <ItemAddedToFavouriteToast product={product} onClick={() => toast.dismiss(t.id)} />
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
        {item ? (
          <div
            className={ProductStyles.iconHolder}
            onClick={removeProductFromFavourites}
          >
            <HiHeart
              className={
                clicked
                  ? `${ProductStyles.favIcon} ${ProductStyles.fill} ${ProductStyles.clicked}`
                  : `${ProductStyles.favIcon} ${ProductStyles.fill} `
              }
            />
          </div>
        ) : (
          <div
            className={ProductStyles.iconHolder}
            onClick={saveProductToFavourites}
          >
            <HiOutlineHeart className={ProductStyles.favIcon} />
          </div>
        )}
      </div>
      <h1 className="item__name">{name}</h1>
      <p className="item__price">£{priceFixed}</p>
    </div>
  );
};

export default Product;
