"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Search from "./Search/Search";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";

import CountdownTimer from "./CountdownTimer";

import NavStyles from "../styles/components/Navbar.module.scss";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // let lastScrollY = window.scrollY;
    // window.addEventListener("scroll", () => {
    //   if (lastScrollY < window.scrollY) {
    //     setActive(true);
    //   } else {
    //     setActive(false);
    //   }
    //   lastScrollY = window.scrollY;
    // });
  }, []);

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
                <li onClick={toggleMenu} className="relative items-center flex">
                  {quantity > 0 ? (
                    <p className={NavStyles.basketCount}>{quantity}</p>
                  ) : (
                    ""
                  )}
                  {!quantity > 0 ? (
                    <AiOutlineShopping size={32} />
                  ) : (
                    <AiFillShopping size={32} />
                  )}

                  <div
                    className={`${
                      showMenu ? "max-h-32" : "max-h-0 invisible opacity-0 "
                    } w-[200px] absolute top-12 right-0 text-sm text-left transition-all duration-500 ease-in-out overflow-hidden bg-neutral-50 b-2 h-32 z-50 opacity-100`}
                  >
                    <div className="m-4 flex flex-col justify-between h-24">
                      {!quantity > 0 ? (
                        <>
                          <p className="flex justify-between w-full">
                            There's nothing here. Get shopping!
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="flex justify-between w-full">
                            Quantity:<span>{quantity} items</span>
                          </p>
                          <p className=" flex justify-between w-full">
                            Total:<span>{quantity}</span>
                          </p>
                        </>
                      )}
                      {!quantity > 0 ? (
                        <button
                          disabled
                          className="font-semibold text-sm bg-neutral-400 text-white w-full p-2 transition rounded "
                        >
                          See Basket
                        </button>
                      ) : (
                        <Link href="/basket">
                          <button className="font-semibold text-sm bg-neutral-800 text-white w-full p-2 hover:opacity-70 transition rounded ">
                            See Basket
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="/favourites">
                    <HiHeart size={32} />
                  </Link>
                </li>
                <li className="hover:opacity-60">
                  <Link href="/dashboard">
                    <FaUserAlt size={26} />
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
          className="backdrop-blur-lg bg-neutral-300"
        >
          <Carousel
            className={NavStyles.navSlider}
            axis="horizontal"
            autoPlay={true}
            swipeable={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            transitionTime={1000}
            interval={5000}
            infiniteLoop={true}
          >
            <div className={NavStyles.inner}>
              <p className="text-xs font-medium text-white mt-[2px] hover:text-gray-500 cursor-pointer transition">
                Join the family and get 20% off your next purchase
              </p>
            </div>
            <div className={NavStyles.inner}>
              <p className="text-xs font-medium text-white mt-[2px] hover:text-gray-500 cursor-pointer transition">
                Free delivery when you spend over £50
              </p>
            </div>
            <div className={NavStyles.inner}>
              <p className="text-xs font-medium text-white mt-[2px] hover:text-gray-500 cursor-pointer transition">
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
