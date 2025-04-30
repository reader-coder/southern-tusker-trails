import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Timeline from "../components/Timeline/Timeline";
import UpcomingPackages from "../components/UpcomingPackages/UpcomingPackages";
import PopularActivities from "../components/PopularActivities/PopularActivities";
import ThingsToEnjoy from "../components/ThingsToEnjoy/ThingsToEnjoy";
import Highlights from "../components/Highlights/Highlights";
import Reviews from "../components/Reviews/Reviews";
import Booking from "../components/Booking/Booking";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  const UPCOMING_OPTIONS = { loop: true };
  const UPCOMING_SLIDES = [
    {
      img: "https://ik.imagekit.io/gzqqjuhn9/kolukumalai?updatedAt=1745315615561",
      plan: "Kolukkumalai",
      people: "Trekking",
    },
    {
      img: "https://ik.imagekit.io/gzqqjuhn9/Meeahapullimala.jpg?updatedAt=1745315969188",
      plan: "Meesapulimalai",
      people: "Trekking",
    },
    {
      img: "https://ik.imagekit.io/gzqqjuhn9/yellapetty.jpg?updatedAt=1745315886001",
      plan: "Yellapetty",
      people: "Camping",
    },
    {
      img: "https://ik.imagekit.io/gzqqjuhn9/chinnar?updatedAt=1745324631353",
      plan: "Chinnar Wildlife Sanctuary",
      people: "Trekking",
    },
  ];

  return (
    <>
      <HomeBanner />
      <Timeline />
      <UpcomingPackages slides={UPCOMING_SLIDES} options={UPCOMING_OPTIONS} />
      <Gallery/>
      {/* <PopularActivities /> */}
      <ThingsToEnjoy />
      <Highlights />
      <div className="bg-[url(https://ik.imagekit.io/gzqqjuhn9/reviewsBG.png?updatedAt=1744280479668)] bg-size-[700px] bg-no-repeat">
        <Reviews />
        <Booking />
      </div>
    </>
  );
};

export default Home;
