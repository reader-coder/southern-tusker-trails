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

  const treks = [
    {
      id: 0,
      name: "Letchmi Hills Trek",
      imgPath: "Letchmi_hills",
      rate: null,
      location: "Letchmi-Mangulam Road, Munnar",
      duration: "3–5 hrs",
      highlights: [
        "Panoramic ridge walk with Anaimudi views",
        "Tea, coffee & cardamom plantations",
        "Shola forest trails & bird watching",
        "Picnic amidst nature"
      ],
      level: "Medium",
      optional: null,
      pdfLink: "https://ik.imagekit.io/gzqqjuhn9/PDF/Letchmi_Hills_Trek.pdf?updatedAt=1745325696881",
    },
    {
      id: 1,
      name: "Chokkarmudi Trek",
      imgPath: "Chokramudi-Peak.jpg",
      rate: null,
      location: "Old Munnar / Lockhart Gap",
      duration: "4–6 hrs",
      highlights: [
        "Shola forests, grasslands & tea estates",
        "Chance to spot Nilgiri Tahr",
        "Steep rock faces & scenic ridge",
        "Return via same path"
      ],
      level: "Medium",
      optional: null,
      pdfLink: "https://ik.imagekit.io/gzqqjuhn9/PDF/Chokkarmudi_Trek.pdf?updatedAt=1745325696304",
    },
    {
      id: 2,
      name: "Top Valley Trek",
      imgPath: "top-valley",
      rate: null,
      location: "Yellapetty via Munnar",
      duration: "3–5 hrs",
      highlights: [
        "Shola forest ridge walk with valley views",
        "Tea plantation descent",
        "Drive via Mattupetty Dam & Echo Point",
        "Wild elephant sightings possible"
      ],
      level: "Medium",
      optional: "Leech socks provided during monsoon",
      pdfLink: "https://ik.imagekit.io/gzqqjuhn9/PDF/Top_Valley_Trek.pdf?updatedAt=1745325696546",
    },
    {
      id: 3,
      name: "Meesapulimalai Trek",
      imgPath: "Meeahapullimala.jpg",
      rate: null,
      location: "Silent Valley Tea Estate",
      duration: "6–8 hrs",
      highlights: [
        "Summit South India's 2nd highest peak (2640m)",
        "Eucalyptus & Shola forests, mountain streams",
        "Seasonal waterfalls, panoramic summit views",
        "Colonial trout streams & biodiversity-rich trail"
      ],
      level: "Hard",
      optional: null,
      pdfLink: "https://ik.imagekit.io/gzqqjuhn9/PDF/Meesapulimalai_Trek.pdf?updatedAt=1745325696355",
    },
    {
      id: 4,
      name: "Kolukkumalai Trek",
      imgPath: "kolukumalai",
      rate: null,
      location: "Kolukkumalai, Munnar",
      duration: "Flexible / Full Day",
      highlights: [
        "Jeep safari through tea estates",
        "Summit trek to Kolukkumalai Peak (2170m)",
        "Visit the world’s highest orthodox tea factory",
        "Ridge views and tea heritage experience"
      ],
      level: "Medium",
      optional: "Customizable trek/jeep mix",
      pdfLink: "https://ik.imagekit.io/gzqqjuhn9/PDF/Kolukkumalai_Trek.pdf?updatedAt=1745325696544",
    },
    {
      id: 5,
      name: "Chinnar Wildlife Sanctuary Trek",
      imgPath: "chinnar",
      rate: null,
      location: "Chinnar Sanctuary via Marayoor",
      duration: "3–4 hrs",
      highlights: [
        "Dry thorn forests & riverine jungle",
        "Wildlife sightings (Elephants, Gaur, Squirrels)",
        "Birdwatching & biodiversity",
        "Trek through contrasting terrain"
      ],
      level: "Medium",
      optional: "Morning or afternoon trek slots",
      pdfLink: "https://ik.imagekit.io/gzqqjuhn9/PDF/Chinnar_Wildlife_Sanctuary_Trek.pdf?updatedAt=1745325696883",
    },
    {
      id: 6,
      name: "Pambadum Shola National Park Trek",
      imgPath: "pambadum_shola.jpg",
      rate: null,
      location: "Pambadum Shola, Top Station Road",
      duration: "2–3 hrs",
      highlights: [
        "Dense Shola forests & endemic birds",
        "Wildlife spotting (Langur, Gaur, Deer)",
        "Scenic drive via Mattupetty & Echo Point",
        "Guided by forest department"
      ],
      level: "Medium",
      optional: "Leech socks provided during monsoon",
      pdfLink: "https://ik.imagekit.io/gzqqjuhn9/PDF/Pambadum_Shola_National_Park_Trek.pdf?updatedAt=1745325696893",
    }
  ];
  
  
  
  return (
    <>
      <Banner imgPath={"TrekkingBanner.jpg"} Heading={bannerHeading} />
      <WhyComponent heading={"Why Trekking is Good for You"} list={trekkingBenefits}/>
      <TrekkingDestinations />
      <PackageCarousel slides={treks}/>
      {/* <TrekkingIncluded /> */}
      <TrekkingWhyChoose />
    </>
  );
};

export default Trekking;
