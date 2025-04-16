import React from "react";
import Banner from "../components/Banner/Banner";
import TrekkingDestinations from "../components/TrekkingDestinations/TrekkingDestinations";
import PackageCarousel from "../components/PackageCarousel/PackageCarousel";
import TrekkingIncluded from "../components/TrekkingIncluded/TrekkingIncluded";

//Exports a Heading component because the heading can have <br/> tags at unpredictable places. So, we can handle it individually and pass it as a component so that we don't have to handle it in the Banner component
const bannerHeading = () => {
  return (
    <h2>
      Trek beyond limits,
      <br />
      Explore the unseen
    </h2>
  );
};

const Trekking = () => {
  return (
    <>
      <Banner imgPath={"trekkingBG.png"} Heading={bannerHeading} />
      <TrekkingDestinations />
      <PackageCarousel />
      <TrekkingIncluded />
    </>
  );
};

export default Trekking;
