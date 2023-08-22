"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { FaBox, FaShoppingCart } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { AiFillEye, AiFillExclamationCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import { toast } from "react-hot-toast";

import ItemAddedToFavouritesToast from "../Toasts/ItemAddedToFavouritesToast";
import ItemAddedToCartToast from "../Toasts/ItemAddedToCartToast";
import AddProductAnimationStyles from "../../styles/animations/addProductAnimation.module.scss";
import applyDiscount from "@/lib/util/applyDiscount";

export default function Product({ product, pastOrders }) {
  const [foundOrder, setFoundOrder] = useState(null);

  const cart = useSelector((state) => state.cart);
  const [sizeSelected, setSizeSelected] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [saved, setSaved] = useState("");
  const priceFixed = (Math.round(product.price * 100) / 100).toFixed(2);
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
        quantity={quantity}
        size={sizeSelected}
      />
    ));
  };

  useEffect(() => {
    function findAndSetFoundOrder(productIdToCheck) {
      const orderWithMatchingProduct = pastOrders.find((order) =>
        order.products.some((product) => product.id === productIdToCheck)
      );

      console.log(orderWithMatchingProduct);
      if (orderWithMatchingProduct) {
        setFoundOrder(orderWithMatchingProduct);
      }
    }

    findAndSetFoundOrder(product.id);
  }, []);

  const popToast = () => {
    toast((t) => (
      <ItemAddedToCartToast
        product={product}
        onClick={() => toast.dismiss(t.id)}
        quantity={quantity}
        size={sizeSelected}
      />
    ));
  };

  const handleOptionSelect = (event) => {
    const selectedSize = event.target.value;
    setSizeSelected(selectedSize);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity, sizeSelected }));
    setAdded(true);
    setTimeout(popToast, 2000);
  };

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
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
      {foundOrder && (
        <div className="bg-neutral-200 w-full h-fit max-w-[1050px] mt-4 lg:mt-6 flex items-start gap-1 ">
          <div className="flex justify-center items-start p-4 gap-x-2 lg:gap-x-4 lg:p-5">
            <AiFillExclamationCircle className="w-6 h-6 lg:w-7 lg:h-7 text-text-neutral-700" />
            <p className="text-base font-medium text-neutral-700 -mt-0.5 lg:mt-[1px] lg:text-lg">
              You purchased this item on {foundOrder?.orderDate}
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-between md:flex-row  max-w-[1050px] gap-4 mt-4 md:mt-8 w-full md:gap-4 lg:gap-8 lg:h-[1000px]">
        <div className="flex flex-col items-start md:sticky md:top-32 w-full lg:h-[650px]">
          <div className="flex flex-col-reverse w-full lg:flex-row md:gap-8 md:min-w-[360px]">
            <div
              id="imageGallery"
              className="grid mt-2 md:mt-0 grid-cols-4 sm:grid-cols-4 w-full lg:grid-cols-1 h-full lg:h-40 md:w-auto gap-2 md:gap-4"
            >
              {product.gallery.slice(0, 4).map((image, i) => (
                <div
                  className="relative group w-full min-h-[70px] max-h-[70px] sm:min-h-[120px] cursor-pointer md:min-h-[70px] md:min-w-[70px] md:h-fit-content"
                  key={i}
                  onClick={() => {
                    setMainImage(image);
                  }}
                >
                  <Image
                    className="object-cover"
                    src={image}
                    fill
                    alt="Item Image"
                  />
                  <div className="items-center min-h-[30px] justify-center hidden group-hover:flex bg-neutral-50 rounded-full w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <AiFillEye size={40} className="p-1" />
                  </div>
                </div>
              ))}
            </div>
            <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] lg:min-h-[620px] md:max-w-[450px]">
              <Image
                id="mainImage"
                src={mainImage}
                fill
                alt={product.name}
                className="object-cover"
              />
              {product.discount ? (
                <div className="absolute right-0 top-8 w-[100px] h-[40px] z-30 bg-red-600 flex items-center justify-center after:absolute after:-left-[15px] ">
                  <div class="left-[0px] absolute -top-[8px] transform -translate-x-1/2 translate-y-1/2 rotate-45 z-20 w-7 h-[28px] bg-red-600"></div>
                  <h1 className="uppercase font-bold text-neutral-50 z-30 text-sm lg:text-base tracking-widest">
                    {product.discountValue}% off
                  </h1>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-5 max-w-[400px] md:max-w-[475px]">
          <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest mt-2">
            {product.brand}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-neutral-700 tracking-widest uppercase ">
            {product.name}
          </h1>
          {product.discount ? (
            <div className="flex items-center my-1.5 gap-x-2">
              <p className="text-gray-500 text-xs  font-bold tracking-wide mt-1 relative after:absolute after:w-[104%] after:bg-red-600 after:top-[7px] after:-left-[2px] after:h-[2px] after:rotate-[7deg]">
                £{priceFixed}
              </p>
              <p className="text-red-600 text-sm lg:text-base font-bold tracking-wide mt-[2px]">
                £{applyDiscount(priceFixed, product.discountValue)}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm font-bold tracking-wide my-2">
              £{priceFixed}
            </p>
          )}
          <div className="mt-5 flex items-center w-[280px]">
            <h4 className="w-12 mr-4 text-xs text-neutral-400 uppercase font-semibold tracking-widest">
              Size:
            </h4>
            <select
              className="text-neutral-400 w-[200px] outline-none py-2 px-4 bg-white border-neutral-200 border-1 text-xs uppercase font-semibold tracking-widest"
              onChange={handleOptionSelect}
            >
              <option value="" className="uppercase text-neutral-400 ">
                Please select
              </option>
              {product.sizes.map((size, i) => (
                <option key={i} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5 flex items-center w-[280px]">
            <h4 className="w-12 mr-4 text-xs text-neutral-400 uppercase font-semibold tracking-widest">
              Qty:
            </h4>
            <div className="flex gap-x-4 items-center w-[120px]">
              <button
                className="bg-neutral-900 text-white text-lg rounded-sm w-8 h-8 flex items-center justify-center"
                onClick={removeItem}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="bg-neutral-900 text-white text-lg rounded-sm w-8 h-8 flex items-center justify-center"
                onClick={addItem}
              >
                +
              </button>
            </div>
          </div>
          <div className={AddProductAnimationStyles.addProductBtn}>
            {sizeSelected ? (
              <button
                onClick={handleClick}
                className={
                  added
                    ? `${AddProductAnimationStyles.cartButton} ${AddProductAnimationStyles.itemAdded}`
                    : `${AddProductAnimationStyles.cartButton}`
                }
              >
                <span className={AddProductAnimationStyles.addToCart}>
                  Add to Cart
                </span>
                <span className={AddProductAnimationStyles.added}>
                  Added to Cart
                </span>
                <FaShoppingCart
                  className={AddProductAnimationStyles.cartIcon}
                />
                <FaBox className={AddProductAnimationStyles.cartItem} />
              </button>
            ) : (
              <button
                disabled
                className="border-none outline-none opacity-60 text-white font-semibold w-full text-sm uppercase tracking-widest bg-neutral-900
              py-3"
              >
                Add to Cart
              </button>
            )}

            {item ? (
              <div className={AddProductAnimationStyles.iconHolder}>
                <HiHeart
                  className={
                    clicked
                      ? `${AddProductAnimationStyles.favIcon} ${AddProductAnimationStyles.fill} ${AddProductAnimationStyles.clicked}`
                      : `${AddProductAnimationStyles.favIcon} ${AddProductAnimationStyles.fill} `
                  }
                  onClick={removeProductFromFavourites}
                />
              </div>
            ) : (
              <div className={AddProductAnimationStyles.iconHolder}>
                <HiOutlineHeart
                  className={AddProductAnimationStyles.favIcon}
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
              <p className="ml-4 text-sm mt-1 text-neutral-500">
                Pay in 3 monthly, interest free payments of{" "}
                <span className="font-bold">£{installmentPrice}</span>
              </p>
            </div>
            <div className="flex mt-4">
              <div className="relative w-10 h-8">
                <Image fill src="/images/deliveryBlack.svg" alt="Klarna Logo" />
              </div>
              <p className="ml-6 mt-1 text-sm text-neutral-500">
                Free delivery on all products when you spend over £50
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full mt-6">
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-2xl">Product Details</h2>
              <MdInfo size={26} />
            </div>
            <p className="mt-6 text-base text-neutral-500">
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
