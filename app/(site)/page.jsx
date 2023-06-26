"use client";

import Head from "next/head";

import SaleBanner from "../../components/SaleBanner";
import Carousel from "../../components/Carousel";
import Divider from "../../components/Divider";
import Options from "../../components/Options";
import Newsletter from "../../components/Newsletter";
import Featured from "../../components/Featured";
import Slider from "../../components/Slider";
import HomeHeader from "../../components/HomeHeader";

export default function Home() {
  return (
    <>
      <HomeHeader
        header="Sale on Now"
        body="Exclusive top brands at the best prices"
      />
      <Carousel />
      <SaleBanner />
      <Options />

      <Divider
        heading="our top exclusives"
        text="latest additions to marquet"
      />
      <Featured />
      {/* <Slider /> */}
      <Newsletter />
    </>
  );
}
