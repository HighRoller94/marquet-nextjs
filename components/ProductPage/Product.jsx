"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { FaBox, FaShoppingCart } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "@/redux/cartSlice";
import { toast } from "react-hot-toast";

import ItemAddedToFavouritesToast from "../Toasts/ItemAddedToFavouritesToast";
import ItemAddedToCartToast from "../Toasts/ItemAddedToCartToast";
import ProductPageStyles from "../../styles/pages/ProductPage.module.scss";

export default function Product({ product }) {
  const cart = useSelector((state) => state.cart);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [saved, setSaved] = useState("");
  const price = product.price;
  const [added, setAdded] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [productsFound, setProductsFound] = useState([]);
  const item = productsFound.find(
    (savedProduct) => savedProduct.name === product.name
  );
  const [clicked, setClicked] = useState(false);
  const installmentPrice = (product.price / 3).toFixed(2);

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

  const popToast = () => {
    toast((t) => (
      <ItemAddedToCartToast
        product={product}
        onClick={() => toast.dismiss(t.id)}
      />
    ));
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity }));
    setAdded(true);
    setTimeout(popToast, 2000);
  };

  const removeProductItem = () => {
    dispatch(removeProduct({ ...product, price, quantity }));
    setAdded(!added);
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
    setMainImage(product.gallery[0]);
    document.getElementById("submit").value = "";
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
    setProductsFound(savedProducts);
  }, [product, saved, cart]);

  return (
    <div className="pb-16 mb-5 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-between md:flex-row  max-w-[1050px] gap-4 mt-4 md:mt-8 w-full md:gap-4 lg:gap-8">
        <div className="flex flex-col items-start md:md:sticky md:top-40 w-full ">
          <div className="flex flex-col-reverse w-full lg:flex-row md:gap-8">
            <div
              id="imageGallery"
              className="grid grid-cols-4 sm:grid-cols-5 w-full lg:grid-cols-1 h-full lg:h-40 md:w-auto"
            >
              {product.gallery.map((image, i) => (
                <div
                  className="relative group w-full min-h-[100px] cursor-pointer md:min-h-0 md:h-[70px] md:w-[70px] md:h-fit-content"
                  key={i}
                  onClick={() => {
                    setMainImage(image);
                  }}
                >
                  <Image className="image" src={image} fill alt="Item Image" />
                  <div className="items-center min-h-[30px] justify-center hidden group-hover:flex bg-neutral-50 rounded-full w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <AiFillEye size={40} className="p-1" />
                  </div>
                </div>
              ))}
            </div>
            <div className="relative w-full h-full min-h-[300px] md:min-h-[620px] md:max-w-[450px]">
              <Image
                id="mainImage"
                src={mainImage}
                fill
                alt={product.name}
                className=" object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 max-w-[400px] md:max-w-[475px]">
          <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest mt-2">
            {product.brand}
          </span>
          <h1 className="mt-3 text-4xl font-bold">{product.name}</h1>
          <span className="text-xl my-6 font-bold text-neutral-500 uppercase tracking-widest">
            £{price}
          </span>
          <div className="mt-5 flex items-center">
            <h4 className="mr-4 text-xs text-neutral-400 uppercase font-semibold tracking-widest">
              Size:
            </h4>
            <select className="text-neutral-400  outline-none py-2 px-4 bg-white border-neutral-200 border-1 min-w-[200px] text-xs uppercase font-semibold tracking-widest">
              <option className="uppercase text-neutral-400 ">Please select</option>
              {product.sizes.map((size, i) => (
                <option key={i}>{size}</option>
              ))}
            </select>
          </div>
          <div className="mt-5 flex items-center">
            <h4 className="mr-4 text-xs text-neutral-400 uppercase font-semibold tracking-widest">Qty:</h4>
            <input className="text-neutral-400  outline-none py-2 px-4 bg-white border-neutral-200 border-1 w-[80px] text-xs uppercase font-semibold tracking-widest" type="number" min="1" className="item__size" />
          </div>
          <div className={ProductPageStyles.addProductBtn}>
            <button
              onClick={handleClick}
              className={
                added
                  ? `${ProductPageStyles.cartButton} ${ProductPageStyles.itemAdded}`
                  : `${ProductPageStyles.cartButton}`
              }
            >
              <span className={ProductPageStyles.addToCart}>Add to Cart</span>
              <span className={ProductPageStyles.added}>Added to Cart</span>
              <FaShoppingCart className={ProductPageStyles.cartIcon} />
              <FaBox className={ProductPageStyles.cartItem} />
            </button>
            {item ? (
              <div className={ProductPageStyles.iconHolder}>
                <HiHeart
                  className={
                    clicked
                      ? `${ProductPageStyles.favIcon} ${ProductPageStyles.fill} ${ProductPageStyles.clicked}`
                      : `${ProductPageStyles.favIcon} ${ProductPageStyles.fill} `
                  }
                  onClick={removeProductFromFavourites}
                />
              </div>
            ) : (
              <div className={ProductPageStyles.iconHolder}>
                <HiOutlineHeart
                  className={ProductPageStyles.favIcon}
                  onClick={saveProductToFavourites}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mt-6">
              <div className="relative w-12 h-12">
                <Image fill src="/images/klarna.svg" alt="Klarna Logo" />
              </div>
              <p className="ml-4 text-sm mt-3">
                Pay in 3 monthly, interest free payments of{" "}
                <span className="font-bold">£{installmentPrice}</span>
              </p>
            </div>
            <div className="flex mt-4">
              <div className="relative w-10 h-8">
                <Image fill src="/images/deliveryBlack.svg" alt="Klarna Logo" />
              </div>
              <p className="ml-6 text-sm">
                Free delivery on all products when you spend over £50
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full mt-6">
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-2xl">Product Details</h2>
              <MdInfo size={26} />
            </div>
            <p className="mt-6 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
