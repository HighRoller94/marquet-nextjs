import React from "react";
import Image from "next/image";
import { ImBin } from "react-icons/im";
import { removeProduct } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

function ItemAddedToCartToast({ product, onClick }) {
  const dispatch = useDispatch();
  const price = product.price;
  const quantity = 1

  const removeProductItem = () => {
    dispatch(removeProduct({ ...product, price, quantity }));
  };

  return (
    <div className="bg-neutral-50 b-2 w-[265px] h-[100px]">
      <div className="flex w-full justify-between mb-1">
        <h1 className="text-xs font-bold text-neutral-600 mb-1 uppercase tracking-wide">
          Added to Cart
        </h1>
        <p
          onClick={onClick}
          className="text-xs font-bold text-neutral-600 uppercase tracking-widest cursor-pointer"
        >
          x
        </p>
      </div>
      <div className="flex gap-4">
        <div className="relative w-[125px] h-[70px]">
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
            <p className="flex mb-1 text-xs w-full text-neutral-600">
              Total:<span className=" ml-2">£{product.price}</span>
            </p>
            <p className="flex truncate  justify-between w-full font-semibold text-base mb-1">
              {product.name}
            </p>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex justify-between w-full">
              <p className="flex w-full font-bold text-xs text-neutral-600 uppercase tracking-widest">
                Size:<span className="ml-1">S</span>
              </p>
              <p className="flex w-full font-bold text-xs text-neutral-600 uppercase tracking-widest">
                Qty:<span className="ml-1">1</span>
              </p>
            </div>
            <ImBin
              onClick={removeProductItem}
              className="hover:opacity-70 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemAddedToCartToast;
