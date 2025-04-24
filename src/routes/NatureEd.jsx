import React from "react";
import Banner from "../components/Banner/Banner";
import NatureEdContainer from "../components/NatureEdContainer/NatureEdContainer";
import WhyComponent from "../components/WhyComponent/WhyComponent";
import BunnyBuds from "../components/BunnyBuds/BunnyBuds";
import BunnyActivities from "../components/BunnyActivities/BunnyActivities";

//Exports a Heading component because the heading can have <br/> tags at unpredictable places. So, we can handle it individually and pass it as a component so that we don't have to handle it in the Banner component
const bannerHeading = () => {
  return (
    <h2>
      Bunny Buds– <br />
      Explore, Imbibe, Grow!
    </h2>
  );
};

const NatureEd = () => {
  const bunnyBudsWhyData = {
    heading: "Why Choose Bunny Buds?",
    list: [
      {
        id: 0,
        heading: "Safety First",
        desc: "We maintain a high staff-to-camper ratio and ensure all activities are closely supervised to create a safe environment."
      },
      {
        id: 1,
        heading: "Certified Instructors",
        desc: "Our team is composed of experienced outdoor educators and adventure guides committed to your child's growth and safety."
      },
      {
        id: 2,
        heading: "Hands-On Learning",
        desc: "We combine fun with valuable life skills by integrating nature-based activities that spark curiosity and creativity."
      },
      {
        id: 3,
        heading: "Certificate with Value",
        desc: "Every child receives a certificate recognizing their achievements and personal growth during the program."
      },
      {
        id: 4,
        heading: "On-site Medical Team",
        desc: "A trained medical nurse is always available at the camp to handle any health concerns or emergencies."
      },
      {
        id: 5,
        heading: "All-Inclusive Experience",
        desc: "Camp fees cover meals, accommodation, equipment, and materials—ensuring a hassle-free experience for parents and children."
      }
    ]
  };
  
  return (
    <>
      <Banner imgPath={"NatureEdBG.jpg"} Heading={bannerHeading} />
      <BunnyBuds/>
      <WhyComponent heading={bunnyBudsWhyData.heading} list={bunnyBudsWhyData.list}/>
      <BunnyActivities/>
      <NatureEdContainer/>
    </>
  );
};

export default NatureEd;
