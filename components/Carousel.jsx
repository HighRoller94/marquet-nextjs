"use client";

import React from "react";
import Image from "next/image";

import { Carousel } from "flowbite-react";

const CarouselContent = [
  {
    imageSrc: "/images/sustainable-bg.svg",
    header: "Look good, feel good",
    body: "Shop our sustainable clothing line, only at Marquet",
  },
  {
    imageSrc: "/images/hero-bg.svg",
    header: "Look good, feel good",
    body: "Shop our sustainable clothing line, only at Marquet",
  },
];

const CarouselHolder = () => {
  return (
    <Carousel
      slideInterval={8000}
      leftControl={<></>}
      rightControl={<></>}
      indicators={false}
    >
      {CarouselContent?.map((slide, i) => (
        <div className="w-full h-full relative" key={i}>
          <div style={{backgroundImage: `url(${slide.imageSrc})`}} className="bg-cover bg-no-repeat relative w-full h-[500px] bg-neutral-200 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-neutral-900 after:opacity-20">
          </div>
          <div className="p-2 rounded-lg absolute gap-y-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 flex flex-col items-center justify-center text-center -mt-4">
            <h1 className="font-extrabold text-white text-5xl capitalize leading-tight lg:text-6xl">{slide.header}</h1>
            <p className=" text-white font-medium text-sm w-5/6 lg:text-xl">{slide.body}</p>
            <button className="mt-4 w-fit bg-neutral-950 text-white border-none outline-none font-bold uppercase tracking-widest transition px-6 rounded-md py-3 lg:text-base">Let's Shop</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselHolder;
