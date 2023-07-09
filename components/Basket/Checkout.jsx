"use client";

import { useForm } from "react-hook-form";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

import CheckoutFormStyles from "../../styles/components/CheckoutForm.module.scss";

const Checkout = ({ step, setStep, onChange, submitOrder }) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goBack = () => {
    setStep((step) => step - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      <div className={CheckoutFormStyles.header}>
        <h2 className="font-bold text-2xl md:text-3xl">Confirm Your Order</h2>
      </div>
      <form
        id="deliveryForm"
        className="mt-6"
        onSubmit={handleSubmit(submitOrder)}
      >
        <div className={CheckoutFormStyles.contactRow}>
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              className="block flex-1 border-2 border-neutral-50 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="text"
              {...register("name")}
              name="name"
              onChange={onChange}
              autoComplete="off"
              required
              placeholder="janesmith"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              className="block flex-1 border-2 border-neutral-50 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="text"
              value={session?.user.email}
              name="email"
              onChange={onChange}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className={CheckoutFormStyles.contactRow}>
          <div className={CheckoutFormStyles.contactField}>
            <label htmlFor="name" className="label-name">
              <span className="content-name">Address</span>
            </label>
            <input
              type="text"
              {...register("address")}
              onChange={onChange}
              name="address"
              autoComplete="off"
              required
            />
          </div>
        </div>
      </form>
      <button onClick={goBack}>Go Back</button>
    </motion.div>
  );
};

export default Checkout;
