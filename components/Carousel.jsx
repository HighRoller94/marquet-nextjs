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
        <div className="w-full h-full relative">
          <div className="relative w-full h-[500px]">
            <Image
              fill
              src={slide.imageSrc}
              alt="Slide Image"
              className="object-cover"
            />
          </div>
          <div className="p-2 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 flex flex-col items-center justify-center text-center -mt-4">
            <h1 className="mt-4 font-black text-white text-5xl capitalize leading-tight lg:text-6xl">{slide.header}</h1>
            <p className=" text-white font-medium mt-4 lg:mt-2 text-sm w-5/6 lg:text-lg">{slide.body}</p>
            <button className="w-fit bg-neutral-950 text-white border-none mt-10 outline-none font-bold transition px-6 lg:mt-6 rounded-sm py-2 lg:text-lg">Let's Shop</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselHolder;
