import React from 'react'
import Image from 'next/image'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

import CarouselStyles from '../styles/components/Carousel.module.scss'

const CarouselHolder = () => {
  return (

        <div className={CarouselStyles.carousel}>
        <Carousel
            className={CarouselStyles.carousel}
            animationHandler="fade"
            autoPlay={true}
            transitionTime="2000"
            interval="10000"
            showArrows={false}
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            swipeable={true}
            showThumbs={false}
            >
            <div className={CarouselStyles.inner}>
                <div className={CarouselStyles.imageContainer}>
                        <Image
                            src="/images/hero__bg.svg"
                            fill
                            loading="lazy"
                            alt="Vans Hero"
                        />
                    </div>
                <div className={CarouselStyles.header}>
                    <h4>2022 Spring Collection</h4>
                    <h1>Huge Sale</h1>
                    <h2>Up to 60% off</h2>
                    <a href="#trending__divider">
                        <button class="main__btn">Shop now</button>
                    </a>
                </div>
            </div>
            <div className={CarouselStyles.inner}>
                <div className={CarouselStyles.imageContainer}>
                    <Image
                        src="/images/vans__bg.svg"
                        fill
                        loading="lazy"
                        alt="Vans Hero"
                    />
                </div>
                <div>
                    <div className={CarouselStyles.logoContainer}>
                        <Image
                            src="/images/vans__logo.svg"
                            fill
                            loading="lazy"
                            alt="Vans Hero"
                        />
                    </div>
                    <div className={CarouselStyles.header}>
                        <h1>Up to 30% off</h1>
                        <button class="main__btn">Shop now</button>
                        <a href="#trending__divider">
                            <button class="main__btn">Students save more!</button>
                        </a>
                    </div>
                </div>

            </div>
        </Carousel>
        </div>
    )
}

export default CarouselHolder