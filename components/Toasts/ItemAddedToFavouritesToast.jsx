import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import ItemAddedToCartToast from "./ItemAddedToCartToast";
import { toast } from "react-hot-toast";
import Link from "next/link";

function ItemAddedToFavouritesToast({ product, onClick, quantity, size }) {
  const dispatch = useDispatch();
  const price = product.price;

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity }));
    removeProductFromFavourites();
    onClick();
    toast((t) => (
      <ItemAddedToCartToast
        product={product}
        onClick={() => toast.dismiss(t.id)}
        size={size}
        quantity={quantity}
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
      }
    });
  };

  return (
    <div className="bg-white b-2 w-[265px] h-[115px]">
      <div className="flex w-full justify-between mb-2">
        <h1 className="text-xs font-bold text-neutral-600 uppercase tracking-wide">
          Added to Favourites
        </h1>
        <p
          onClick={onClick}
          className="text-xs font-bold text-neutral-600 uppercase tracking-widest cursor-pointer"
        >
          x
        </p>
      </div>
      <div className="flex gap-6">
        <div className="relative w-[125px] h-[90px]">
          <Image
            src={product.gallery[0]}
            fill
            loading="lazy"
            className=" object-cover"
            alt={product.name}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col">
            <p className="flex w-full text-base text-neutral-600">
              Total:<span className="ml-2">£{product.price}</span>
            </p>
            <p className="flex justify-between w-full font-semibold text-base mt-1">
              {product.name}
            </p>
          </div>
          <Link href="/favourites">
            <button
              // onClick={handleClick}
              className="font-semibold text-xs w-full bg-neutral-800 text-white p-2 hover:opacity-70 transition rounded"
            >
              View Saved
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemAddedToFavouritesToast;
