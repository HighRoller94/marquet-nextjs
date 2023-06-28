"use client";

import { useSelector } from "react-redux";
import { GoArrowRight } from "react-icons/go";
import ProductList from "../ProductList";
import BasketStyles from "../../styles/components/BasketStyles.module.scss";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";

const BasketSummary = ({ step, setStep }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const total = useSelector((state) => state.cart.total);
  const cartProducts = useSelector((state) => state.cart.products);

  const cart = useSelector((state) => state.cart);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <div className={BasketStyles.page}>
      <div className={BasketStyles.cart}>
        <div className={BasketStyles.basketTopHeader}>
          <div className={BasketStyles.basketHeader}>
            {quantity > 0 ? (
              <AiFillShopping className={BasketStyles.icon} />
            ) : (
              <AiOutlineShopping className={BasketStyles.icon} />
            )}
            <h1>Basket Summary</h1>
          </div>
          <p>
            You have <span>{quantity}</span> items in your cart.
          </p>
        </div>
        {quantity > 0 ? (
          <>
            <ProductList products={cartProducts} />
          </>
        ) : (
          <h1 className={BasketStyles.noItems}>
            There are no items in your cart. Get shopping!
          </h1>
        )}
      </div>
    </div>
  );
};

export default BasketSummary;
