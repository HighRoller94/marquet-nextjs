import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const featuredContent = [
  {
    brand: "Vans",
    imageSrc: "/images/vans-bg.svg"
  },
  {
    brand: "Nike",
    imageSrc: "/images/nike-bg.svg"
  },
  {
    brand: "Converse",
    imageSrc: "/images/converse-bg.svg"
  },

];


const Featured = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
      {featuredContent?.map((box, i) => (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col relative cursor-pointer"
        ref={ref}
        key={i}
      >
        <div className="relative h-52 md:h-72 w-full hover:opacity-90 transition bg-neutral-200  rounded-lg">
          <Image className=" rounded-lg object-cover" src={box.imageSrc} alt="Vans" fill />
        </div>
        <div className="absolute flex top-4 right-4 bg-neutral-50 items-center justify-center p-1 z-10 rounded-full w-9 h-9">
          <AiFillEye size={32} />
        </div>
        <div>
          <h1 className="text-lg mt-3 font-bold">{box.brand}</h1>
        </div>
      </motion.div>
      ))}
    </div>
  );
};

export default Featured;
