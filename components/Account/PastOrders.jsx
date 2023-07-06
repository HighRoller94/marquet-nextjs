"use client";

import React from "react";
import { motion } from "framer-motion";
import Order from "./Order";

function PastOrders({ pastOrders }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="w-full gap-6"
    >
      {pastOrders.orders?.map((order, i) => (
        <Order key={i} order={order} index={i} />
      ))}
    </motion.div>
  );
}

export default PastOrders;
