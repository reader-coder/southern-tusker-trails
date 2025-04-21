import React from "react";
import Banner from "../components/Banner/Banner";
import NatureEdContainer from "../components/NatureEdContainer/NatureEdContainer";

//Exports a Heading component because the heading can have <br/> tags at unpredictable places. So, we can handle it individually and pass it as a component so that we don't have to handle it in the Banner component
const bannerHeading = () => {
  return (
    <h2>
      Unveil Nature– <br />
      Explore, Educate, Empower
    </h2>
  );
};

const NatureEd = () => {
  return (
    <>
      <Banner imgPath={"NatureEdBG.jpg"} Heading={bannerHeading} />
      <NatureEdContainer/>
    </>
  );
};

export default NatureEd;
