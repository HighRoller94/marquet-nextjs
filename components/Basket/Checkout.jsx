"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { BiSolidChevronUp, BiSolidChevronDown } from "react-icons/bi";
import CheckoutProductList from "./CheckoutProductList";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Checkout = ({ step, setStep, onChange, submitOrder }) => {
  const [openPayment, setOpenPayment] = useState(false);
  const [openDelivery, setOpenDelivery] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const cartProducts = useSelector((state) => state.cart.products);

  const handleShowProducts = () => {
    setOpenProducts(!openProducts);
  };

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goBack = () => {
    setStep((step) => step - 1);
  };

  const changeAddress = () => {
    console.log("change");
  };

  const PaymentForm = () => {
    const [state, setState] = useState({
      number: "",
      expiry: "",
      cvc: "",
      name: "",
      focus: "",
    });

    const handleInputChange = (evt) => {
      const { name, value } = evt.target;

      setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
      setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    return (
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-start w-full gap-x-14">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form className="flex flex-col w-full mt-8 sm:mt-0 md:mt-8 lg:mt-0">
          <input
            className="rounded-lg block flex-1 border-1 border-neutral-200 bg-transparent w-full b-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            type="tel"
            name="number"
            placeholder="Card Number"
            value={state.number}
            required
            pattern="[\d| ]{16}"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <p className="text-sm my-2 text-neutral-400">
            e.g. 49**, 52**, 23**, 98**
          </p>
          <input
            className="rounded-lg block flex-1 border-1 mt-2 border-neutral-200 bg-transparent w-full b-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            className="rounded-lg block flex-1 border-1 mt-2 border-neutral-200 bg-transparent w-full b-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            pattern="\d\d/\d\d"
            value={state.expiry}
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            className="rounded-lg block flex-1 border-1 mt-2 border-neutral-200 bg-transparent w-full b-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            type="tel"
            name="cvc"
            placeholder="CVC"
            pattern="\d{3,4}"
            value={state.cvc}
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <div className="bg-white px-7 py-6 my-6 text-center md:text-left flex justify-center items-center flex-col md:justify-start md:items-start">
        <h2 className="text-2xl lg:text-3xl font-extrabold uppercase tracking-wide text-neutral-700">
          Your Order
        </h2>
        <p className="text-gray-500 text-base w-11/12 lg:w-12/12 mt-2">
          Lets double check your order
        </p>
      </div>

      <div className="bg-white p-7">
        <div className="flex flex-col w-full gap-10">
          <div className="flex  justify-between">
            <div className="flex flex-col ">
              <h1 className="uppercase tracking-wide text-neutral-700 font-extrabold text-xl ">
                Confirm Products
              </h1>
              <p className="text-gray-500 text-base w-11/12 lg:w-12/12 mt-2">
                {cartProducts.length} items
              </p>
            </div>

            {openProducts ? (
              <BiSolidChevronUp
                size={30}
                className="text-neutral-700 cursor-pointer"
                onClick={handleShowProducts}
              />
            ) : (
              <BiSolidChevronDown
                size={30}
                className="text-neutral-700 cursor-pointer"
                onClick={handleShowProducts}
              />
            )}
          </div>
          <Transition
            show={openProducts}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {cartProducts.length == 0 ? (
              <h1 className="tracking-wide text-neutral-600">
                No products found
              </h1>
            ) : (
              <CheckoutProductList products={cartProducts} />
            )}
          </Transition>
        </div>
      </div>
      <form
        id="deliveryForm"
        className="mt-6 gap-12 bg-white p-7"
        onSubmit={handleSubmit(submitOrder)}
      >
        <div className="flex flex-col w-full gap-8  ">
          <h1 className="uppercase tracking-wide text-neutral-700 font-extrabold text-xl ">
            Delivery Address
          </h1>
          {!openDelivery && (
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex gap-12 md:gap-8 lg:gap-12">
                <h1 className="uppercase tracking-wide text-neutral-700 font-extrabold text-sm">
                  Address
                </h1>
                <ul className=" leading-6">
                  <li>07123456789</li>
                  <li>123 Nowhere Lane</li>
                  <li>Hawkins</li>
                  <li>Ilinois</li>
                  <li>90210</li>
                </ul>
              </div>
              <div
                className="text-white mt-16 w-fit text-sm sm:mt-0 py-2 px-4 bg-neutral-900 uppercase font-bold tracking-widest hover:opacity-90 h-fit cursor-pointer"
                onClick={changeAddress}
              >
                Change
              </div>
            </div>
          )}
        </div>
      </form>

      <div
        id="paymentForm"
        className="mt-6 gap-12 bg-white p-7 pb-8"
        onSubmit={handleSubmit(submitOrder)}
      >
        <div className="flex flex-col w-full gap-12 ">
          <h1 className="uppercase tracking-wide text-neutral-700 font-extrabold text-xl ">
            Payment
          </h1>
          <PaymentForm />
        </div>
      </div>

      <div className="mt-8 lg:mt-12 flex items-center text-neutral-900  hover:opacity-90 gap-4">
        <BsFillArrowLeftCircleFill size={28} />
        <button className="font-bold text-lg lg:text-base " onClick={goBack}>
          Go Back
        </button>
      </div>
    </motion.div>
  );
};

export default Checkout;
