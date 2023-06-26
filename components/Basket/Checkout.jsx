"use client";

import { useState, useEffect } from "react";
import { reset } from "../../redux/cartSlice";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import CheckoutFormStyles from "../../styles/components/CheckoutForm.module.scss";

const Checkout = ({ step, setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const [deliveryPayment, setDeliveryPayment] = useState("Card");
  const cart = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(false);
  const generateId = Math.floor(1000000 + Math.random() * 9000000);

  const [formData, setFormData] = useState({
    orderNumber: generateId,
    name: "",
    houseNumber: "",
    street: "",
    town: "",
    postCode: "",
    deliveryInstructions: "",
    paymentType: deliveryPayment,
  });

  const order = {
    ...formData,
    ...cart,
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const onOptionChange = (e) => {
    setDeliveryPayment(e.target.value);
  };

  const storeOrder = () => {
    localStorage.setItem("Shack Order", JSON.stringify(order));
  };

  const completeOrder = () => {
    setStep((step) => step + 1);
    scrollToTop();
    dispatch(reset());
  };

  const submitOrder = () => {
    setIsLoading(true);
    storeOrder();
    setTimeout(completeOrder, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={CheckoutFormStyles.checkoutPage}>
        <div className={CheckoutFormStyles.form}>
          <div className={CheckoutFormStyles.header}>
            <h2>Confirm Your Order</h2>
          </div>

          <form className={CheckoutFormStyles.paymentForm}>
            <form className={CheckoutFormStyles.deliveryForm}>
              <div className={CheckoutFormStyles.header}>
                <h2>Payment Information</h2>
              </div>
              <div className={CheckoutFormStyles.contactRow}>
                <div className={CheckoutFormStyles.contactField}>
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Name on Card</span>
                  </label>
                  <input type="text" name="name" autoComplete="off" />
                </div>
                <div className={CheckoutFormStyles.contactField}>
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Postal Code</span>
                  </label>
                  <input type="text" name="email" autoComplete="off" />
                </div>
              </div>
              <div className={CheckoutFormStyles.contactRow}>
                <div className={CheckoutFormStyles.contactField}>
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Card Number</span>
                  </label>
                  <input type="text" name="email" autoComplete="off" />
                </div>
                <div className={CheckoutFormStyles.contactField}>
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">CVV</span>
                  </label>
                  <input type="text" name="name" autoComplete="off" />
                </div>
                <div className={CheckoutFormStyles.contactField}>
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Expiry Date</span>
                  </label>
                  <input type="text" name="email" autoComplete="off" />
                </div>
              </div>
            </form>
          </form>

          <form
            id="deliveryForm"
            className={CheckoutFormStyles.deliveryForm}
            onSubmit={handleSubmit(submitOrder)}
          >
            <div className={CheckoutFormStyles.header}>
              <h2>Delivery Information</h2>
            </div>
            <div className={CheckoutFormStyles.contactRow}>
              <div className={CheckoutFormStyles.contactField}>
                <label htmlFor="name" className="label-name">
                  <span className="content-name">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  onChange={onChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className={CheckoutFormStyles.contactField}>
                <label htmlFor="name" className="label-name">
                  <span className="content-name">Email</span>
                </label>
                <input type="text" name="email" autoComplete="off" />
              </div>
            </div>
            <div className={CheckoutFormStyles.contactRow}>
              <div className={CheckoutFormStyles.contactField}>
                <label htmlFor="name" className="label-name">
                  <span className="content-name">Street</span>
                </label>
                <input
                  type="text"
                  {...register("street")}
                  onChange={onChange}
                  name="street"
                  autoComplete="off"
                  required
                />
              </div>
              <div className={CheckoutFormStyles.contactField}>
                <label htmlFor="name" className="label-name">
                  <span className="content-name">House No.</span>
                </label>
                <input
                  type="text"
                  {...register("houseHumber")}
                  name="houseNumber"
                  onChange={onChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className={CheckoutFormStyles.contactField}>
                <label htmlFor="name" className="label-name">
                  <span className="content-name">Post Code</span>
                </label>
                <input
                  type="text"
                  {...register("postCode")}
                  name="postCode"
                  onChange={onChange}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className={CheckoutFormStyles.contactRow}>
              <div className={CheckoutFormStyles.contactField}>
                <label htmlFor="name" className="label-name">
                  <span className="content-name">Town/City</span>
                </label>
                <input
                  type="text"
                  {...register("town")}
                  onChange={onChange}
                  name="town"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
