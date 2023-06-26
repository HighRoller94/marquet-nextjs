"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BasketSummary from "./BasketSummary";
import Confirmation from "./Confirmation";
import Checkout from "./Checkout";
import Subtotal from "./Subtotal";

import StepFormStyles from "../../styles/components/StepForm.module.scss";

const Form = () => {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const [basketData, setBasketData] = useState(0);
  const cart = useSelector((state) => state.cart);
  const [modalOpen, setModalOpen] = useState(false);

  const generateId = Math.floor(1000000 + Math.random() * 9000000);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const changeActive = () => {
      setActiveStep(step);
    };
    changeActive();
  }, [step]);

  const goBack = () => {
    setStep((step) => step - 1);
  };

  const [formData, setFormData] = useState({
    orderNumber: generateId,
    name: "",
    houseNumber: "",
    street: "",
    town: "",
    postCode: "",
    deliveryInstructions: "",
  });

  const FormDisplay = () => {
    if (step === 0) {
      return (
        <BasketSummary
          step={step}
          setStep={setStep}
          basketData={basketData}
          setBasketData={setBasketData}
        />
      );
    } else if (step === 1) {
      return <Checkout step={step} setStep={setStep} basketData={basketData} />;
    } else {
      return <Confirmation modalOpen={modalOpen} handleModal={handleModal} />;
    }
  };

  return (
    <>
      <div className={StepFormStyles.wrapper}>
        <div className={StepFormStyles.body}>{FormDisplay()}</div>
        <Subtotal formData={formData} />
      </div>
    </>
  );
};

export default Form;
