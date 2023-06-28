import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import FeaturedStyles from "../styles/components/Featured.module.scss";
import { useInView } from "react-intersection-observer";

const Featured = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

  return (
    <div className={FeaturedStyles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={FeaturedStyles.wrapper}
        ref={ref}
      >
        <div className={FeaturedStyles.imageContainer}>
          <Image src="/images/vans-bg.svg" alt="Vans" fill />
        </div>
        <div className={FeaturedStyles.iconContainer}>
          <AiFillEye className={FeaturedStyles.icon} />
        </div>
        <div>
          <h1 className="text-xl font-medium">Vans</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={FeaturedStyles.wrapper}
      >
        <div className={FeaturedStyles.imageContainer}>
          <Image src="/images/nike-bg.svg" alt="Vans" fill />
        </div>
        <div className={FeaturedStyles.iconContainer}>
          <AiFillEye className={FeaturedStyles.icon} />
        </div>
        <div>
          <h1 className="text-xl font-medium">Nike</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={FeaturedStyles.wrapper}
      >
        <div className={FeaturedStyles.imageContainer}>
          <Image src="/images/converse-bg.svg" alt="Vans" fill />
        </div>
        <div className={FeaturedStyles.iconContainer}>
          <AiFillEye className={FeaturedStyles.icon} />
        </div>
        <div>
          <h1 className="text-xl font-medium">Converse</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Featured;
