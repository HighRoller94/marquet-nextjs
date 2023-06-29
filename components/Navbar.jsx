"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Search from "./Search/Search";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";

import CountdownTimer from "./CountdownTimer";

import NavStyles from "../styles/components/Navbar.module.scss";

const Navbar = () => {
  const total = useSelector((state) => state.cart.total);
  const quantity = useSelector((state) => state.cart.quantity);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [mensDropdown, setMensDropdown] = useState(false);
  const [womensDropdown, setWomensDropdown] = useState(false);

  const handleMenDropdownEnter = () => {
    setMensDropdown(true);
  };

  const handleMenDropdownLeave = () => {
    setMensDropdown(false);
  };

  const handleWomensDropdownEnter = () => {
    setWomensDropdown(true);
  };

  const handleWomensDropdownLeave = () => {
    setWomensDropdown(false);
  };

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
        <div className="hidden justify-center items-center bg-neutral-900 h-6 w-full lg:flex">
          <h4 className="text-white font-medium text-xs tracking-wide flex uppercase">
            Sale Ends in
            <CountdownTimer className="ml-2" seconds={31600} />
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
                    <div
                      class="relative inline-block text-left"
                    >
                      <div
                        onMouseEnter={handleMenDropdownEnter}
                        onMouseLeave={handleMenDropdownLeave}
                      >
                        <button
                          type="button"
                          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          MEN
                          <svg
                            class="-mr-1 h-5 w-5 text-neutral-800"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                        <div
                          onMouseEnter={handleMenDropdownEnter}
                          onMouseLeave={handleMenDropdownLeave}
                          class={`absolute left-0 z-10 pt-3 w-96 p-2 origin-top-right transition-height duration-500 ease-in-out overflow-hidden bg-white ${
                            mensDropdown
                              ? "max-h-72"
                              : "max-h-0 invisible opacity-0 "
                          }`}
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabindex="-1"
                        >
                          <ul class="py-1 flex gap-8" role="none">
                            <div className="flex flex-col">
                              <li className="text-neutral-900 tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                SALE
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Clothing
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Shoes
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Accessories
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Sportswear
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Summer
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Brands
                              </li>
                            </div>
                            <div>
                              <li className="text-neutral-900 tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Bestsellers
                              </li>
                              <li className="w-fit flex-wrap whitespace-nowrap text-neutral-900 tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Popular by Marquet
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                New In: Clothing
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap  tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                New In: Brands
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap  tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                A-Z of brands
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap  tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                The Sports Edit
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap  tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Shop by Product
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={NavStyles.navbarItem}>
                    <div class="relative inline-block text-left">
                      <div
                        onMouseEnter={handleWomensDropdownEnter}
                        onMouseLeave={handleWomensDropdownLeave}
                      >
                        <button
                          type="button"
                          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          WOMEN
                          <svg
                            class="-mr-1 h-5 w-5 text-neutral-800"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                        <div
                          class={`absolute left-0 z-10 pt-3 w-96 p-2 origin-top-right transition-height duration-500 ease-in-out overflow-hidden bg-white ${
                            womensDropdown
                              ? "max-h-72"
                              : "max-h-0 invisible opacity-0 "
                          }`}
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabindex="-1"
                        >
                          <ul class="py-1 flex gap-8" role="none">
                            <div className="flex flex-col">
                              <li className="text-neutral-900 tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                SALE
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Clothing
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Shoes
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Accessories
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Sportswear
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Summer
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Brands
                              </li>
                            </div>
                            <div>
                              <li className="text-neutral-900 tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Bestsellers
                              </li>
                              <li className="w-fit flex-wrap whitespace-nowrap text-neutral-900 tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Popular by Marquet
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                New In: Clothing
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap  tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                New In: Brands
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap  tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                A-Z of brands
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap  tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                The Sports Edit
                              </li>
                              <li className="text-neutral-900 flex-wrap whitespace-nowrap  tracking-widest block px-4 py-2 font-semibold text-sm hover:opacity-50 cursor-pointer">
                                Shop by Product
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
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
              <div className="flex">
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
                <li
                  onClick={toggleMenu}
                  className="relative items-center flex gap-2"
                >
                  {quantity > 0 ? (
                    <p className=" font-bold text-sm">{quantity}</p>
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
                          <p className="font-bold text-xs text-neutral-600 uppercase tracking-widest flex justify-between w-full">
                            Quantity:<span>{quantity} items</span>
                          </p>
                          <p className="font-bold text-xs text-neutral-600 uppercase tracking-widest flex justify-between w-full">
                            Subtotal:<span>£{total.toFixed(2)}</span>
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
          className=" bg-neutral-300 h-6"
        >
          <Carousel leftControl={<></>} rightControl={<></>} indicators={false}>
            <div>
              <p className="text-xs text-center font-medium text-white mt-[2px] hover:text-gray-500 cursor-pointer transition">
                Join the family and get 20% off your next purchase
              </p>
            </div>
            <div>
              <p className="text-xs text-center font-medium text-white mt-[2px] hover:text-gray-500 cursor-pointer transition">
                Free delivery when you spend over £50
              </p>
            </div>
            <div>
              <p className="text-xs text-center font-medium text-white mt-[2px] hover:text-gray-500 cursor-pointer transition">
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
