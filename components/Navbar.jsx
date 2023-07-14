"use client";

import { useState, Fragment, useRef } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Search from "./Search/Search";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping, AiFillHeart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useSession } from "next-auth/react";
import CountdownTimer from "./CountdownTimer";
import { BsBag, BsBagFill } from "react-icons/bs";

const Navbar = () => {
  const { data: session } = useSession();
  // CART STUFF
  const total = useSelector((state) => state.cart.total);
  const quantity = useSelector((state) => state.cart.quantity);

  // DISAPPEARING NAV
  const [active, setActive] = useState("");

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

  // MOBILE MENU
  const [open, setOpen] = useState(false);

  // SEARCH STUFF
  const [searchOpen, setSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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

  // OVERLAY FOR SEARCH
  const [overlay, setOverlay] = useState(false);

  // BASKETMENU DROPDOWN
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // MENU HOVER STATE DROPDOWNS
  const buttonRefs = useRef([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const timeoutDuration = 200;
  let timeouts = [];

  const closePopover = (i) => {
    return buttonRefs.current[i]?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (i) => {
    clearTimeout(timeouts[i]);
    setOpenDropdownIndex(i);
    return buttonRefs.current[i]?.click();
  };

  const onMouseLeave = (i) => {
    timeouts[i] = setTimeout(() => closePopover(i), timeoutDuration);
  };

  const handlePanelMouseEnter = (i) => {
    clearTimeout(timeouts[i]);
  };

  const handlePanelMouseLeave = (i) => {
    timeouts[i] = setTimeout(() => closePopover(i), timeoutDuration);
  };

  // MENU NAVIGATION

  const navigation = {
    categories: [
      {
        id: "women",
        name: "Women",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Basic Tees",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
            imageAlt:
              "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Tops", href: "#" },
              { name: "Dresses", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Denim", href: "#" },
              { name: "Sweaters", href: "#" },
              { name: "T-Shirts", href: "#" },
              { name: "Jackets", href: "#" },
              { name: "Activewear", href: "#" },
              { name: "Browse All", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "VANS", href: "#" },
              { name: "Levis", href: "#" },
              { name: "New Look", href: "#" },
              { name: "Converse", href: "#" },
              { name: "Nike", href: "#" },
              { name: "Dr Martens", href: "#" },
            ],
          },
        ],
      },
      {
        id: "men",
        name: "Men",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
            imageAlt:
              "Drawstring top with elastic loop closure and textured interior padding.",
          },
          {
            name: "Artwork Tees",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
            imageAlt:
              "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Tops", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Sweaters", href: "#" },
              { name: "T-Shirts", href: "#" },
              { name: "Jackets", href: "#" },
              { name: "Activewear", href: "#" },
              { name: "Browse All", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Levis", href: "#" },
              { name: "Barbour", href: "#" },
              { name: "Converse", href: "#" },
              { name: "Nike", href: "#" },
              { name: "Dr Martens", href: "#" },
              { name: "VANS", href: "#" },
            ],
          },
        ],
      },
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <nav
        className="z-50 flex flex-col justify-center bg-white sticky top-0 transition w-full"
        id="navbar"
      >
        <div className="hidden justify-center items-center bg-neutral-900 h-6 w-full lg:flex">
          <h4 className="text-white font-medium text-xs tracking-wide flex uppercase">
            Sale Ends in
            <CountdownTimer className="ml-2" seconds={31600} />
          </h4>
        </div>
        <div className="flex justify-between h-12 md:h-16 mx-auto max-w-[1250px] relative w-full items-center px-3 lg:px-6 xl:px-0">
          <div className="flex items-center">
            {/* TAILWIND NAVBAR */}
            <div className="bg-white">
              {/* Mobile menu */}
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-50 lg:hidden"
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-50 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="-translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-full"
                    >
                      <Dialog.Panel className="z-50 relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                        <div className="flex px-4 pb-2 pt-5">
                          <button
                            type="button"
                            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <MdClose className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>

                        {/* Links */}
                        <Tab.Group as="div">
                          <div className="border-b border-gray-200">
                            <Tab.List className="-mb-px flex space-x-8 px-4">
                              {navigation.categories.map((category) => (
                                <Tab
                                  key={category.name}
                                  className={({ selected }) =>
                                    classNames(
                                      selected
                                        ? "border-neutral-500 text-neutral-500"
                                        : "border-transparent text-gray-900",
                                      "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                                    )
                                  }
                                >
                                  {category.name}
                                </Tab>
                              ))}
                            </Tab.List>
                          </div>
                          <Tab.Panels as={Fragment}>
                            {navigation.categories.map((category) => (
                              <Tab.Panel
                                key={category.name}
                                className="space-y-10 px-4 pb-8 pt-10"
                              >
                                <div className="grid grid-cols-2 gap-x-4">
                                  {category.featured.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative text-sm"
                                    >
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center min-h-[175px] "
                                        />
                                      </div>
                                      <a
                                        href={item.href}
                                        className="mt-6 block font-medium text-gray-900"
                                      >
                                        <span
                                          className="absolute inset-0 z-10"
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${category.id}-${section.id}-heading-mobile`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                      className="mt-6 flex flex-col space-y-6"
                                    >
                                      {section.items.map((item) => (
                                        <li
                                          key={item.name}
                                          className="flow-root"
                                        >
                                          <a
                                            href={item.href}
                                            className="-m-2 block p-2 text-gray-500"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </Tab.Panel>
                            ))}
                          </Tab.Panels>
                        </Tab.Group>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root>

              <header className="relative">
                <nav aria-label="Top" className="">
                  <div>
                    <div className="flex h-10 lg:h-16 items-center">
                      <button
                        type="button"
                        className="rounded-md lg:hidden"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <HiOutlineMenu
                          className="text-neutral-900 lg:hidden"
                          size={32}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Logo */}

                      <Link
                        href="/"
                        className="ml-3.5 md:ml-4 mt-0.5 lg:ml-0 relative w-24 md:w-36 h-10 transition"
                      >
                        <Image
                          src="/images/Marquet-Logo.svg"
                          alt="Marquet Logo"
                          fill
                          className="transition"
                        />
                      </Link>

                      <Link
                        href="/"
                        className="hidden tracking-widest lg:flex rounded bg-neutral-900 text-white ml-8 text-sm uppercase font-semibold hover:opacity-90 py-2 px-4
                        "
                      >
                        <h1>Summer Sales</h1>
                      </Link>

                      {/* Flyout menus */}
                      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                        <div className="flex h-full space-x-8">
                          {navigation.categories.map((category, i) => (
                            <Popover key={category.name} className="flex">
                              {({ open }) => (
                                <>
                                  <div
                                    className="relative flex"
                                    onMouseLeave={() => onMouseLeave(i)}
                                  >
                                    <Popover.Button
                                      ref={(el) => (buttonRefs.current[i] = el)}
                                      onMouseEnter={() => onMouseEnter(i)}
                                      className={classNames(
                                        open
                                          ? "border-neutral-600 text-neutral-600"
                                          : "border-transparent text-neutral-900 hover:text-gray-800",
                                        "relative z-10 -mb-px flex px-0.5 items-center border-b-2 pt-px text-sm uppercase font-semibold transition-colors duration-200 ease-out outline-none"
                                      )}
                                    >
                                      {category.name}
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel
                                      className="absolute inset-x-0 top-full text-sm text-gray-500"
                                      onMouseEnter={() =>
                                        handlePanelMouseEnter(i)
                                      }
                                      onMouseLeave={() =>
                                        handlePanelMouseLeave(i)
                                      }
                                    >
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div
                                        className="absolute inset-0 top-1/2 bg-white shadow"
                                        aria-hidden="true"
                                      />

                                      <div className="min-w-[950px] xl:w-[1250px] relative bg-white">
                                        <div className="mx-auto px-8">
                                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12">
                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                              {category.featured.map((item) => (
                                                <div
                                                  key={item.name}
                                                  className="group relative text-base sm:text-sm"
                                                >
                                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className="object-cover object-center lg:min-h-[255px] xl:h-[280px]"
                                                    />
                                                  </div>
                                                  <a
                                                    href={item.href}
                                                    className="mt-6 block font-medium text-gray-900"
                                                  >
                                                    <span
                                                      className="absolute inset-0 z-10"
                                                      aria-hidden="true"
                                                    />
                                                    {item.name}
                                                  </a>
                                                  <p
                                                    aria-hidden="true"
                                                    className="mt-1"
                                                  >
                                                    Shop now
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                              {category.sections.map(
                                                (section) => (
                                                  <div key={section.name}>
                                                    <p
                                                      id={`${section.name}-heading`}
                                                      className="font-medium text-gray-900"
                                                    >
                                                      {section.name}
                                                    </p>
                                                    <ul
                                                      role="list"
                                                      aria-labelledby={`${section.name}-heading`}
                                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                      {section.items.map(
                                                        (item) => (
                                                          <li
                                                            key={item.name}
                                                            className="flex"
                                                          >
                                                            <a
                                                              href={item.href}
                                                              className="hover:text-gray-800"
                                                            >
                                                              {item.name}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
            {/* END TAILWIND NAVBAR */}
          </div>
          <div className="flex items-center space-between">
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
            <ul className="flex list-none gap-x-4 xl:gap-x-5">
              <li className="relative items-center flex gap-2">
                {quantity > 0 ? (
                  <p
                    className="absolute right-[9px] text-white z-50 font-extrabold text-xs bottom-[4px] lg:bottom-[6px] lg:right-[10px] flex items-center justify-center cursor-pointer w-2"
                    onClick={toggleMenu}
                  >
                    {quantity}
                  </p>
                ) : (
                  ""
                )}
                {!quantity > 0 ? (
                  <BsBag
                    className="cursor-pointer hover:opacity-90 lg:-mt-0.5 lg:w-[28px] lg:h-[28px]"
                    size={25}
                    onClick={toggleMenu}
                  />
                ) : (
                  <BsBagFill
                    className="cursor-pointer hover:opacity-90 lg:-mt-0.5 lg:w-[28px] lg:h-[28px]"
                    size={25}
                    onClick={toggleMenu}
                  />
                )}

                <div
                  className={`${
                    showMenu ? "max-h-32" : "max-h-0 invisible opacity-0 "
                  } w-[200px] absolute top-9 -left-[76px] text-sm text-left transition-all duration-500 ease-in-out overflow-hidden bg-white h-32 z-50 opacity-100`}
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
                        className="bg-neutral-900 outline-none border-none py-3 px-4 w-full text-xs text-neutral-50 font-semibold uppercase tracking-widest hover:opacity-90 cursor-pointer"
                      >
                        See Basket
                      </button>
                    ) : (
                      <Link href="/basket" onClick={toggleMenu}>
                        <button className="bg-neutral-900 outline-none border-none py-3 px-4 w-full text-xs text-neutral-50 font-semibold uppercase tracking-widest hover:opacity-90 cursor-pointer">
                          See Basket
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <Link href="/favourites">
                  <AiFillHeart className="mt-0.5 lg:h-[32px] lg:w-[32px]" size={28} />
                </Link>
              </li>
              <li className="items-center">
                {session?.user?.image ? (
                  <Link href="/dashboard">
                    <div className="relative h-7 w-7 mt-0.5 lg:h-8 lg:w-8">
                      <Image
                        src={session.user.image}
                        alt={session.user.name}
                        className="inline-block rounded-full"
                        fill
                      />
                    </div>
                  </Link>
                ) : (
                  <Link href="/dashboard">
                    <FaUserAlt className=" hover:opacity-60 mt-1" size={24} />
                  </Link>
                )}
              </li>
            </ul>
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
              <p className="text-xs text-center font-medium tracking-widest text-white hover:text-gray-500 cursor-pointer transition">
                Join the family and get 20% off your next purchase
              </p>
            </div>
            <div>
              <p className="text-xs text-center font-medium tracking-widest text-white hover:text-gray-500 cursor-pointer transition">
                Free delivery when you spend over £50
              </p>
            </div>
            <div>
              <p className="text-xs text-center font-medium tracking-widest text-white hover:text-gray-500 cursor-pointer transition">
                Not happy with your order? Send it back
              </p>
            </div>
          </Carousel>
        </motion.div>
      </nav>
      <Transition
        show={overlay}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed w-screen h-screen left-0 bottom-0 right-0 top-0 z-40 bg-neutral-800 opacity-60"></div>
      </Transition>
    </>
  );
};

export default Navbar;
