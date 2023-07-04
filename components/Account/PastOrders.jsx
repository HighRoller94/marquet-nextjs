import React from "react";
import { motion } from "framer-motion";

function PastOrders() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Past Orders
    </motion.div>
  );
}

export default PastOrders;
