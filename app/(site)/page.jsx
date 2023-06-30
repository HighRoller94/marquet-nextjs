"use client";

import Carousel from "../../components/Carousel";
import Divider from "../../components/Divider";
import Collection from "@/components/Collection";
import Featured from "../../components/Featured";
import HomeHeader from "../../components/HomeHeader";
import SponsorsComponent from "@/components/Sponsors";
import Newsletter from "@/components/Newsletter";
export default function Home() {
  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-[1250px] px-4 lg:px-10 xl:px-0">
        {/* <Hero /> */}
        <HomeHeader
          header="Sale on Now"
          body="Exclusive top brands at the best prices"
        />
        <Carousel />

        <Divider
          heading="our top brands"
        />
        <Featured />
        <Divider
          heading="New Collection"
          text="Check out our latest seasonal collections at Marquet, handpicked by our inhouse designers."
        />
        <Collection />
        <Newsletter />
      </div>
      <SponsorsComponent />
    </>
  );
}
