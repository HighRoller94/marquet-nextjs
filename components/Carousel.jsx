import React from 'react'
import Image from 'next/image'

import CarouselStyles from '../styles/components/Carousel.module.scss'

const Carousel = () => {
  return (
    <div className={CarouselStyles.carousel}>
        <div className={CarouselStyles.inner}>
            <div className={CarouselStyles.imageContainer}>
                <Image
                    src="/images/hero__bg.svg"
                    fill
                    alt="HeroBG"
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
        {/* <div class="carousel__div">
        <div class="main__header">
            <div class="vans__head">
            <img src="../assets//logos/vans__logo.svg" alt="Vans Logo" />
            <h2>Up to 30% off</h2>
            <a href="#latest__divider">
                <button class="main__btn">Shop now</button>
            </a>
            </div>
            <button class="secondary__btn">Students save more!</button>
        </div>
        </div> */}
    </div>
    )
}

export default Carousel