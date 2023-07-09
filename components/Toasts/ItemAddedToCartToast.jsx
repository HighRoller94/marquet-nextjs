import { useState } from "react";
import Image from "next/image";
import { ImBin } from "react-icons/im";
import { removeProduct } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

function ItemAddedToCartToast({ product, onClick, quantity }) {
  const [removed, setRemoved] = useState(false);
  const dispatch = useDispatch();
  const price = product.price;

  const removeProductItem = () => {
    dispatch(removeProduct({ ...product, price, quantity }));
    setRemoved(true);
  };

  return (
    <div
      className={`bg-white b-2 transition-all duration-500  ${
        !removed ? "md:w-[265px] md:h-[100px]" : "md:w-[190px] md:h-[60px]"
      } `}
    >
      <div className="flex w-full justify-between mb-1">
        <h1 className="text-xs font-bold text-neutral-600 mb-1 uppercase tracking-wide">
          {!removed ? (
            <span>Added to Cart</span>
          ) : (
            <span>Removed from Cart</span>
          )}
        </h1>
        <p
          onClick={onClick}
          className="text-xs font-bold text-neutral-600 uppercase tracking-widest cursor-pointer"
        >
          x
        </p>
      </div>
      <div className="flex gap-4">
        <div
          className={`${
            !removed ? "w-[125px] h-[70px]" : "w-[100px] h-[40px]"
          } relative`}
        >
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
          <div
            className={`flex justify-between w-full ${
              !removed ? "" : "invisible opacity-0"
            }`}
          >
            <div className="flex justify-between w-full">
              <p className="flex w-full font-bold text-xs text-neutral-600 uppercase tracking-widest">
                Size:<span className="ml-1">S</span>
              </p>
              <p className="flex w-full font-bold text-xs text-neutral-600 uppercase tracking-widest">
                Qty:<span className="ml-1">{quantity}</span>
              </p>
            </div>
            <ImBin
              onClick={removeProductItem}
              className="hover:opacity-70 transition cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          removed ? "" : "invisible opacity-0 "
        } opacity-100 w-full h-12 bg-neutral-50 z-10 absolute top-9 left-0 justify-center flex`}
      >
        <p className="mt-2 font-bold text-sm text-neutral-600 uppercase tracking-widest">
          Item Deleted
        </p>
      </div>
    </div>
  );
}

export default ItemAddedToCartToast;
