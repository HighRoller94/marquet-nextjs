import React from "react";
import Head from "next/head";

import FavouriteStyles from "../../../styles/pages/Favourites.module.scss";
import AltProducts from "@/components/AltProducts";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HiHeart } from "react-icons/hi";

const Favourites = () => {
  return (
    <>
      {/* <Breadcrumbs /> */}
      <div className={FavouriteStyles.favouritesTopHeader}>
        <div className={FavouriteStyles.favouritesHeader}>
          <HiHeart className={FavouriteStyles.icon} />
          <h1>Saved Items</h1>
        </div>
        <p>When you add an item to your favourites, it'll show here!</p>
      </div>

      <div>
        <AltProducts />
      </div>
    </>
  );
};

export default Favourites;
