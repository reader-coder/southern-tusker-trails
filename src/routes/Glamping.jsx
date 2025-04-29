import React from "react";
import Banner from "../components/Banner/Banner";
import WhyComponent from "../components/WhyComponent/WhyComponent";

//Exports a Heading component because the heading can have <br/> tags at unpredictable places. So, we can handle it individually and pass it as a component so that we don't have to handle it in the Banner component
const bannerHeading = () => {
  return (
    <h2>
      Glamping -
      <br />
      Coming Soon!!!
    </h2>
  );
};

const Glamping = () => {


  return (
    <>
      <Banner imgPath={"campingBG.png"} Heading={bannerHeading} />
    </>
  );
};

export default Glamping;
