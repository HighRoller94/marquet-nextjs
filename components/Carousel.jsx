import React from 'react'
import Image from 'next/image'
import Head from 'next/head';

import Slider from 'react-slick';

import CarouselStyles from '../styles/components/Carousel.module.scss'


const CarouselHolder = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <div className={CarouselStyles.carousel}>
            <Slider {...settings}>
                <div className={CarouselStyles.container}>
                    <div className={CarouselStyles.imageContainer}>
                        <Image
                            src="/images/vans__bg.svg"
                            fill
                            loading="lazy"
                            alt="Vans Hero"
                        />
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
                </div>
                <div className={CarouselStyles.container}>
                    <div className={CarouselStyles.imageContainer}>
                        <Image
                            src="/images/sustainable-bg.svg"
                            fill
                            loading="lazy"
                            alt="Vans Hero"
                        />
                    </div>
                </div>
            </Slider>
        </div>
        </>
    )
}

export default CarouselHolder