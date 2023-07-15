"use client";

import React from "react";
import { motion } from "framer-motion";
import Order from "./Order";
import dayjs from "dayjs";

function PastOrders({ pastOrders }) {
  const dateComparator = (object1, object2) => {
    const timestamp1 = dayjs(object1.orderDate, "DD/MM/YYYY").unix();
    const timestamp2 = dayjs(object2.orderDate, "DD/MM/YYYY").unix();

    return timestamp1 - timestamp2;
  };

  const sortedArray = pastOrders.orders?.sort(dateComparator);

  return (
    <div className="flex flex-col w-full">
      <h1>Past Orders</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full gap-6"
      >
        {sortedArray.reverse().map((order, i) => (
          <Order key={i} order={order} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

export default PastOrders;
