import React from "react";
import Banner from "../components/Banner/Banner";
import TrekkingDestinations from "../components/TrekkingDestinations/TrekkingDestinations";
import PackageCarousel from "../components/PackageCarousel/PackageCarousel";
import TrekkingIncluded from "../components/TrekkingIncluded/TrekkingIncluded";
import TrekkingWhyChoose from "../components/TrekkingWhyChoose/TrekkingWhyChoose";
import WhyComponent from "../components/WhyComponent/WhyComponent";

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
  const trekkingBenefits = [
    {
      id: 0,
      heading: "Great for your body",
      desc: "Trekking is one of the best natural workouts! Climbing uphill, walking uneven paths, and crossing streams build strength, improve stamina, and keep your heart happy."
    },
    {
      id: 1,
      heading: "Boosts your mental health",
      desc: "Being out in nature, surrounded by greenery and silence, does wonders for stress and anxiety. Trekking clears your mind and lifts your mood."
    },
    {
      id: 2,
      heading: "Teaches patience & resilience",
      desc: "Not every trail is easy. Some are tough or tiring, but finishing them is so rewarding. Trekking teaches you that effort and persistence really pay off."
    },
    {
      id: 3,
      heading: "Connects you with nature",
      desc: "Trekking leads to hidden places — peaceful forests, waterfalls, mountain views, wildlife. These raw and beautiful experiences stay with you forever."
    },
    {
      id: 4,
      heading: "Simple living, big lessons",
      desc: "Trekking reminds you to travel light, respect nature, be mindful, and enjoy the present moment. It’s about the journey just as much as the destination."
    }
  ];
  
  return (
    <>
      <Banner imgPath={"trekkingBG.png"} Heading={bannerHeading} />
      <WhyComponent heading={"Why Trekking is Good for You"} list={trekkingBenefits}/>
      <TrekkingDestinations />
      <PackageCarousel />
      {/* <TrekkingIncluded /> */}
      <TrekkingWhyChoose />
    </>
  );
};

export default Trekking;
