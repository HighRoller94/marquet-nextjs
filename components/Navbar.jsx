"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Slider from "react-slick";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Search from "./Search/Search";
import SignInButton from "./SignInButton";

import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";
import CountdownTimer from "./CountdownTimer";

import NavStyles from "../styles/components/Navbar.module.scss";

const settings = {
  autoplay: true,
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // useEffect(() => {
  //   let lastScrollY = window.scrollY;
  //   window.addEventListener("scroll", () => {
  //     if (lastScrollY < window.scrollY) {
  //       setActive(true);
  //     } else {
  //       setActive(false);
  //     }
  //     lastScrollY = window.scrollY;
  //   });
  // }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMobSearchOpen = () => {
    setSearchOpen(true);
    setOverlay(true);
  };

  const handleMobSearchClose = () => {
    setSearchOpen(false);
    setOverlay(false);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOverlay(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOverlay(false);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <nav
        className={
          !active ? NavStyles.navbar : `${NavStyles.navbar} ${NavStyles.active}`
        }
        id="navbar"
      >
        <div className={NavStyles.navSale}>
          <h4>
            Sale Ends in
            <CountdownTimer seconds={31600} />
          </h4>
        </div>
        <div className={NavStyles.container}>
          <div className={NavStyles.nav}>
            <div className={NavStyles.left}>
              <div className={NavStyles.navToggle} id="mobile-menu">
                <BiMenu onClick={handleOpen} className={NavStyles.navIcon} />
              </div>
              <Link href="/" className={NavStyles.navLogo}>
                <Image src="/images/Marquet-Logo.svg" alt="Marquet Logo" fill />
              </Link>
              <div
                className={
                  !open
                    ? NavStyles.sideMenu
                    : `${NavStyles.sideMenu} ${NavStyles.open}`
                }
              >
                <ul className={NavStyles.navMenu}>
                  <li className={NavStyles.navbarItem}>
                    <a href="#">Summer Sales</a>
                  </li>
                  <li className={NavStyles.navbarItem}>
                    <a href="#">Brands</a>
                  </li>
                  <li className={NavStyles.navbarItem}>
                    <a href="#">Sportswear</a>
                  </li>
                  <li className={NavStyles.navbarItem}>
                    <a href="#">Footwear</a>
                  </li>
                  <div className={NavStyles.mobBottom}>
                    <a href="/html/orders.html">
                      <p>My orders</p>
                    </a>
                    <p>Contact us</p>
                  </div>
                </ul>
              </div>
            </div>
            <div className={NavStyles.right}>
              <div>
                <Search
                  handleMobSearchOpen={handleMobSearchOpen}
                  handleMobSearchClose={handleMobSearchClose}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                  overlay={overlay}
                  searchOpen={searchOpen}
                  setSearchOpen={setSearchOpen}
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                />
              </div>
              <ul className={NavStyles.navIcons}>
                <li>
                  <Link href="/basket" className={NavStyles.basket}>
                    {quantity > 0 ? (
                      <p className={NavStyles.basketCount}>{quantity}</p>
                    ) : (
                      ""
                    )}
                    {!quantity > 0 ? (
                      <AiOutlineShopping className={NavStyles.navIcon} />
                    ) : (
                      <AiFillShopping className={NavStyles.navIcon} />
                    )}
                  </Link>
                </li>
                <li>
                  <Link href="/favourites">
                    <HiOutlineHeart className={NavStyles.navIcon} />
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard">
                    <RiAccountCircleLine className={NavStyles.navIcon} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Carousel
            className={NavStyles.navSlider}
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
            <div className={NavStyles.inner}>
              <p className={NavStyles.text}>
                Join the family and get 20% off your next purchase
              </p>
            </div>
            <div className={NavStyles.inner}>
              <p className={NavStyles.text}>
                Free delivery when you spend over £50
              </p>
            </div>
            <div className={NavStyles.inner}>
              <p className={NavStyles.text}>
                Not happy with your order? Send it back and get in touch
              </p>
            </div>
          </Carousel>
        </motion.div>
      </nav>
      <div
        className={
          !overlay
            ? NavStyles.overlay
            : `${NavStyles.overlay} ${NavStyles.show}`
        }
      ></div>
    </>
  );
};

export default Navbar;
