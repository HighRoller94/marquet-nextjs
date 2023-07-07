"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/redux/cartSlice";
import { useSession } from "next-auth/react";
import dayjs from "dayjs";
import BasketSummary from "./BasketSummary";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";

import Subtotal from "./Subtotal";

const Form = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [order, setOrder] = useState()
  const [activeStep, setActiveStep] = useState(-1);
  const [basketData, setBasketData] = useState(0);
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const orderReference = generateRandomString();
  const currentDate = dayjs();
  const futureDate = currentDate.add(3, 'day').format('DD/MM/YYYY');

  function generateRandomString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "";

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  useEffect(() => {
    const changeActive = () => {
      setActiveStep(step);
    };
    changeActive();
  }, [step]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [formData, setFormData] = useState({
    orderReference: orderReference,
    name: "",
    email: session?.user?.email,
    address: "",
    deliveryDate: futureDate,
    total: `${total.toFixed(2)}`,
    orderDate: `${currentDate.format('DD/MM/YYYY')}`,
    products: cart.products,
  });

  const storeOrder = async () => {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return result;
  };

  const completeOrder = () => {
    setStep((step) => step + 1);
    dispatch(reset());
  };

  const submitOrder = async () => {
    setIsLoading(true);
    const res = await storeOrder();
    setOrder(res.order)
    setTimeout(completeOrder, 2000);
  };

  const FormDisplay = () => {
    if (step === 0) {
      return (
        <BasketSummary basketData={basketData} setBasketData={setBasketData} />
      );
    } else if (step === 1) {
      return (
        <Checkout
          onChange={onChange}
          basketData={basketData}
          submitOrder={submitOrder}
        />
      );
    } else {
      return <Confirmation order={order} />;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-full justify-between py-10 pb-16">
        <div className="w-full">{FormDisplay()}</div>
        <Subtotal
          isLoading={isLoading}
          formData={formData}
          step={step}
          setStep={setStep}
          order={order}
        />
      </div>
    </>
  );
};

export default Form;
