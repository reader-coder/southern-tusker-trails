import React from "react";
import Banner from "../components/Banner/Banner";
import AdventureCarousel from "../components/AdventureCarousel/AdventureCarousel";
import Guidelines from "../components/Guidelines/Guidelines";

//Exports a Heading component because the heading can have <br/> tags at unpredictable places. So, we can handle it individually and pass it as a component so that we don't have to handle it in the Banner component
const bannerHeading = () => {
  return (
    <h2>
      Thrill Awaits – <br />
      Embrace the Adventure
    </h2>
  );
};

const Adventures = () => {
  return (
    <>
      <Banner imgPath={"adventureBG.webp"} Heading={bannerHeading} />
      <AdventureCarousel />
      <Guidelines />
    </>
  );
};

export default Adventures;
