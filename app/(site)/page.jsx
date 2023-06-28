"use client";

import Head from "next/head";

import SaleBanner from "../../components/SaleBanner";
import Carousel from "../../components/Carousel";
import Divider from "../../components/Divider";
import Collection from "@/components/Collection";
import Hero from "@/components/Hero";
import Featured from "../../components/Featured";
import Slider from "../../components/Slider";
import HomeHeader from "../../components/HomeHeader";
import SponsorsComponent from "@/components/Sponsors";
export default function Home() {
  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-[1250px] px-10 xl:px-0">
        {/* <Hero /> */}
        <HomeHeader
          header="Sale on Now"
          body="Exclusive top brands at the best prices"
        />
        <Carousel />
        <SaleBanner />

        <Divider
          heading="our top brands"
        />
        <Featured />
        <Divider
          heading="New Collection"
          text="Check out our latest seasonal collections at Marquet, handpicked by our inhouse designers."
        />
        <Collection />
      </div>
      <SponsorsComponent />
    </>
  );
}
