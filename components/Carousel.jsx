"use client";

import React from "react";
import Image from "next/image";

import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselStyles from "../styles/components/Carousel.module.scss";

const CarouselHolder = () => {
  return (
    <>
      <div className={CarouselStyles.carousel}>
        <Carousel
          axis="horizontal"
          autoPlay={true}
          swipeable={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          animationHandler="fade"
          showThumbs={false}
          transitionTime={1000}
          interval={5000}
          infiniteLoop={true}
        >
          <div className={CarouselStyles.container}>
            <div className={CarouselStyles.imageContainer}>
              <Image
                src="/images/sustainable-bg.svg"
                fill
                loading="lazy"
                alt="Vans Hero"
              />
            </div>
            <div className={CarouselStyles.content}>
              <h1>Look good, feel good</h1>
              <span>Shop our sustainable clothing line, only at Marquet</span>
              <button>Lets Shop</button>
            </div>
          </div>
          <div className={CarouselStyles.container}>
            <div className={CarouselStyles.imageContainer}>
              <Image
                src="/images/hero-bg.svg"
                fill
                loading="lazy"
                alt="Vans Hero"
              />
            </div>
            <div className={CarouselStyles.content}>
              <h1>Look good, feel good</h1>
              <span>Shop our sustainable clothing line, only at Marquet</span>
              <button>Lets Shop</button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselHolder;
