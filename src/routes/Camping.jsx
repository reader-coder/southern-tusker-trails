import React from "react";
import Banner from "../components/Banner/Banner";
import CampingDestinations from "../components/CampingDestinations/CampingDestinations";
import PackageCarousel from "../components/PackageCarousel/PackageCarousel";
import CampingIncluded from "../components/CampingIncluded/CampingIncluded";
import CampingWhyChoose from "../components/CampingWhyChoose/CampingWhyChoose";

//Exports a Heading component because the heading can have <br/> tags at unpredictable places. So, we can handle it individually and pass it as a component so that we don't have to handle it in the Banner component
const bannerHeading = () => {
  return (
    <h2>
      Escape the ordinary,
      <br />
      Camp in the wild!
    </h2>
  );
};

const Camping = () => {
  return (
    <>
      <Banner imgPath={"campingBG.png"} Heading={bannerHeading} />
      <CampingDestinations />
      <PackageCarousel />
      <CampingIncluded />
      <CampingWhyChoose />
    </>
  );
};

export default Camping;
