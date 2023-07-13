"use client";

import { useForm } from "react-hook-form";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

const Checkout = ({ step, setStep, onChange, submitOrder }) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goBack = () => {
    setStep((step) => step -   1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <div className="bg-white px-6 py-6 my-6">
        <h2 className=" text-2xl sm:text-3xl  uppercase tracking-wide text-neutral-700 font-extrabold">Confirm Your Order</h2>
        <p className="text-gray-500 text-base w-11/12 lg:w-12/12 mt-2">Take a minute to double check your order</p>
      </div>
      <form
        id="deliveryForm"
        className="mt-6 gap-12 bg-white p-6"
        onSubmit={handleSubmit(submitOrder)}
      >
        <div className="flex items-center flex-col lg:flex-row w-full gap-12 ">
          <div className="sm:col-span-3 lg:flex items-center gap-x-6">
            <label
              htmlFor="name"
              className="w-[50px] block text-xs uppercase tracking-widest font-bold leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              className="block flex-1 border-1 border-neutral-200 bg-transparent b-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="text"
              {...register("name")}
              name="name"
              onChange={onChange}
              autoComplete="off"
              required
              placeholder="janesmith"
            />
          </div>

          <div className="sm:col-span-3 lg:flex items-center gap-x-6 w-full">
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-widest font-bold leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              className="block flex-1 border-1 border-neutral-200 bg-transparent w-full b-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="text"
              value={session?.user.email}
              name="email"
              onChange={onChange}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="flex items-center flex-col lg:flex-row w-full gap-12 ">
          <div className="sm:col-span-3 lg:flex items-center gap-x-6">
            <label htmlFor="name" className="w-[50px] block text-xs uppercase tracking-widest font-bold leading-6 text-gray-900">
              <span className="content-name">Address</span>
            </label>
            <input
              className="block flex-1 border-1 border-neutral-200 bg-transparent b-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
      <button className="text-white py-2 px-4 bg-neutral-900 uppercase font-bold tracking-widest mt-8 hover:opacity-90"onClick={goBack}>Go Back</button>
    </motion.div>
  );
};

export default Checkout;
