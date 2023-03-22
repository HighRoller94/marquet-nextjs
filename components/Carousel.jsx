import React from 'react'
import Image from 'next/image'

import Slider from 'react-slick';

import CarouselStyles from '../styles/components/Carousel.module.scss'

const CarouselHolder = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ],
    };

    return (
        <div className={CarouselStyles.carousel}>
            <Slider {...settings}>
                <div className={CarouselStyles.inner}>
                    <div className={CarouselStyles.imageContainer}>
                        <Image
                            src="/images/vans__bg.svg"
                            fill
                            loading="lazy"
                            alt="Vans Hero"
                        />
                    </div>
                    <div className={CarouselStyles.container}>
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
                            <button className="main__btn">Shop now</button>
                        </div>
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
                    <div className={CarouselStyles.container}>
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
                            <button className="main__btn">Shop now</button>
                        </div>
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
                    <div className={CarouselStyles.container}>
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
                            <button className="main__btn">Shop now</button>
                        </div>
                    </div>

                </div>
            </Slider>
        </div>
    )
}

export default CarouselHolder