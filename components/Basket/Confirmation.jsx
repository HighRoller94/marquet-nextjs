"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Confirmation({ order }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="my-5"
    >
      <div>
        <h1 className="font-bold text-2xl md:text-3xl">
          Thank you for your order!
        </h1>
        <p className=" text-gray-500 text-base w-11/12 lg:w-12/12 mt-2">
          Please check your inbox as a confirmation email is on the way
        </p>
      </div>
      <div className="mt-10 ">
        <div className="flex gap-x-6 my-3 justify-between w-9/12 items-start text-left">
          <h2 className="text-neutral-700 uppercase tracking-widest font-bold">
            Order ID:
          </h2>
          <div className="text-left flex justify-start">
            <p className="w-[200px] font-medium text-neutral-900">{order.id}</p>
          </div>
        </div>
        <div className="flex gap-x-6 my-3 justify-between w-9/12 items-start text-left">
          <h2 className="text-neutral-700 uppercase tracking-widest font-bold">
            Order Total:
          </h2>
          <div className="text-left flex justify-start">
            <p className="w-[200px] font-medium text-neutral-900">
              £{order.total}
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 my-3 justify-between w-9/12 items-start text-left">
          <h2 className="text-neutral-700 uppercase tracking-widest font-bold">
            Order Reference:
          </h2>
          <div className="text-left flex justify-start">
            <p className="w-[200px] font-medium text-neutral-900">
              {order.orderReference}
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 my-3 justify-between w-9/12 items-start text-left">
          <h2 className="text-neutral-700 uppercase tracking-widest font-bold">
            Estimated Delivery:
          </h2>
          <div className="text-left flex justify-start">
            <p className="w-[200px] font-medium text-neutral-900">
              {order.deliveryDate}
            </p>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="flex bg-neutral-900 text-white mt-12 text-base uppercase font-semibold tracking-widest hover:opacity-90 py-3 px-5 w-[240px] justify-center"
      >
        Continue Shopping
      </Link>
    </motion.div>
  );
}