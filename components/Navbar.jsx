import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { RiShoppingCartLine } from 'react-icons/ri'
import { RiAccountCircleFill } from 'react-icons/ri'
import { HiHeart } from 'react-icons/hi'
import { useSelector } from "react-redux";

import Slider from "react-slick";

import Search from './Search/Search'

import NavStyles from '../styles/components/Navbar.module.scss'

const settings = {
    autoplay: true,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Navbar = () => {
    const [results, setResults] = useState([]);
    const quantity = useSelector((state) => state.cart.quantity)
    const [active, setActive] = useState()

    useEffect(() => {
        if (window.scrollY >= 10) {
            setActive(true)
        } else {
            setActive(false)
        }
    })

    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <nav className={!active ? (NavStyles.navbar) : (`${NavStyles.navbar} ${NavStyles.active}`)} id="navbar">
                <div className={NavStyles.navSale}>
                    <h4>Sale Ends in
                        <span id="timer"></span>
                    </h4>
                </div>
                <div className={NavStyles.container}>
                    <div className={NavStyles.nav}>
                        <div className={NavStyles.navToggle} id="mobile-menu">
                            <span className={NavStyles.bar}></span>
                            <span className={NavStyles.bar}></span>
                            <span className={NavStyles.bar}></span>
                        </div>
                        <Link href="/" className={NavStyles.navLogo}>MARQUET</Link>
                        <div className={NavStyles.sideMenu}>
                            <ul className={NavStyles.navMenu}>
                                <div className={NavStyles.mobLogoContainer}>
                                    <svg className={NavStyles.mobLogo} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 340"><rect width="350" height="340" fill="#000000" /><path d="M225.59,240.57h39.46l49.72,138.11q4.74,13.43,9.28,27t9.27,27h1.58q4.73-13.41,8.88-27t8.88-27l48.93-138.11h39.85V499.43H410.66V357q0-17.36,1.58-38.28T415,280.43h-1.58L392.9,339.22,344,473.38h-21.7L273.34,339.22l-20.52-58.79h-1.58q1.19,17.35,2.57,38.27T255.19,357V499.43h-29.6Z" transform="translate(-155 -200)" fill="#fff" /></svg>
                                </div>
                                <li className={NavStyles.navbarItem}>
                                    <a href="#">Mens</a>
                                </li>
                                <li className={NavStyles.navbarItem}>
                                    <a href="#">Womens</a>
                                </li>
                                <li className={NavStyles.navbarItem}>
                                    <a href="#">Footwear</a>
                                </li>
                                <li className={NavStyles.navbarItem}>
                                    <a href="#">Accessories</a>
                                </li>
                                <div className={NavStyles.mobBottom}>
                                    <a href="/html/orders.html">
                                        <p>My orders</p>
                                    </a>
                                    <p>Contact us</p>
                                </div>
                            </ul>
                        </div>
                        <Search />
                        <ul className={NavStyles.navIcons}>
                            <li>
                                <Link href="/basket" className={NavStyles.basket}>
                                    <p className={NavStyles.basketCount}>{quantity}</p>
                                    {quantity > 0 ? (
                                        <RiShoppingCartLine className={NavStyles.navIcon} />
                                    ) : (
                                        <RiShoppingCartLine className={NavStyles.navIcon} />
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link href="/favourites">
                                    <HiHeart className={NavStyles.navIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/login">
                                    <RiAccountCircleFill className={NavStyles.navIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Slider className={NavStyles.navSlider} {...settings}>
                    <div className={NavStyles.inner}>
                        <p className={NavStyles.text}>Join the family and get 20% off your next purchase</p>
                    </div>
                    <div className={NavStyles.inner}>
                        <p className={NavStyles.text}>Free delivery when you spend over £50</p>
                    </div>
                    <div className={NavStyles.inner}>
                        <p className={NavStyles.text}>Not happy with your order? Send it back and get in touch</p>
                    </div>
                </Slider>
            </nav>
        </>

    )
}

export default Navbar