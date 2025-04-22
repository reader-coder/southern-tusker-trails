import React from "react";
import Banner from "../components/Banner/Banner";
import CampingDestinations from "../components/CampingDestinations/CampingDestinations";
import PackageCarousel from "../components/PackageCarousel/PackageCarousel";
import CampingIncluded from "../components/CampingIncluded/CampingIncluded";
import CampingWhyChoose from "../components/CampingWhyChoose/CampingWhyChoose";
import WhyComponent from "../components/WhyComponent/WhyComponent";

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
  const campingBenefits = [
    {
      id: 0,
      heading: "A break from screens & stress",
      desc: "Let’s face it — we all need to unplug once in a while. Camping helps you do just that. No notifications, no rush — just time to relax and recharge."
    },
    {
      id: 1,
      heading: "Fresh air & movement",
      desc: "Being outdoors naturally gets you moving — walking, setting up a tent, exploring around. Plus, breathing in that crisp, clean air feels so good!"
    },
    {
      id: 2,
      heading: "Quality time with people",
      desc: "Whether you’re with family, friends, or even new people, camping brings everyone closer. Cooking together, sharing stories, laughing — these are the moments you remember."
    },
    {
      id: 3,
      heading: "Learn cool skills",
      desc: "Camping teaches you little life skills — like setting up a tent, starting a campfire, or figuring out directions without Google Maps."
    },
    {
      id: 4,
      heading: "Connect with nature",
      desc: "Most importantly, camping reminds us how beautiful and calming nature can be. Watching a sunrise, sitting by a stream, or stargazing — it’s magic."
    }
  ];
  
  return (
    <>
      <Banner imgPath={"campingBG.png"} Heading={bannerHeading} />
      <WhyComponent heading={"Why is Camping Good for You"} list={campingBenefits}/>
      <CampingDestinations />
      <PackageCarousel />
      <CampingIncluded />
      <CampingWhyChoose />
    </>
  );
};

export default Camping;
