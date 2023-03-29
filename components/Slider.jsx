import React, { Component } from "react";
import Slider from "react-slick";
import Head from "next/head";
import Image from "next/image";

import SliderStyles from '../styles/components/Slider.module.scss'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={SliderStyles.nextArrow}
            onClick={onClick} >
                <FiArrowRight className={SliderStyles.arrow}/>
            </div>
    );
}


function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div 
            className={SliderStyles.prevArrow}
            onClick={onClick}>
                <FiArrowLeft className={SliderStyles.arrow}/>
        </div>
    );
}

export default class MultipleItems extends Component {
    
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return (
            <div>
                <Head>
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <Slider {...settings} className={SliderStyles.slider}>
                    <div className={SliderStyles.container}>
                        <div className={SliderStyles.imageContainer}>
                            <Image
                                src="/images/slider/6.svg"
                                fill
                                alt="SliderImage"
                            />
                        </div>
                    </div>
                    <div className={SliderStyles.container}>
                        <div className={SliderStyles.imageContainer}>
                            <Image
                                src="/images/slider/1.svg"
                                fill
                                alt="SliderImage"
                            />
                        </div>
                    </div>
                    <div className={SliderStyles.container}>
                        <div className={SliderStyles.imageContainer}>
                            <Image
                                src="/images/slider/3.svg"
                                fill
                                alt="SliderImage"
                            />
                        </div>
                    </div>
                    <div className={SliderStyles.container}>
                        <div className={SliderStyles.imageContainer}>
                            <Image
                                src="/images/slider/5.svg"
                                fill
                                alt="SliderImage"
                            />
                        </div>
                    </div>
                    <div className={SliderStyles.container}>
                        <div className={SliderStyles.imageContainer}>
                            <Image
                                src="/images/slider/4.svg"
                                fill
                                alt="SliderImage"
                            />
                        </div>
                    </div>
                    <div className={SliderStyles.container}>
                        <div className={SliderStyles.imageContainer}>
                            <Image
                                src="/images/slider/2.svg"
                                fill
                                alt="SliderImage"
                            />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
