import React, { useEffect, useState } from "react";
import { FaDiamond } from "react-icons/fa6";
import './ThingsToEnjoy.css'
import { useInView } from "react-intersection-observer";

const ThingsToEnjoy = () => {
  const [activeId, setActiveId] = useState(0);
  const [activeImg, setActiveImg] = useState("");
  const [otherImages, setOtherImages] = useState([]);
  const [imageKey, setImageKey] = useState(0);
  const [trigger, setTrigger] = useState(false);
  // Using useInView to set trigger state to true so that elements can use it to trigger their animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) setTrigger(true);
    }
  });

  const items = [
    {
      id: 0,
      name: "Tea Plantation Walks",
      img: "https://ik.imagekit.io/gzqqjuhn9/tea_plantation_walks?updatedAt=1745229120202",
    },
    {
      id: 1,
      name: "Tea Culture Experience",
      img: "https://ik.imagekit.io/gzqqjuhn9/tea_cult_experience?updatedAt=1745229186313",
    },
    {
      id: 2,
      name: "Shola Forests Treks",
      img: "https://ik.imagekit.io/gzqqjuhn9/Shola.jpg?updatedAt=1745228586951",
    },
    {
      id: 3,
      name: "Off-Road Jeep Safaris",
      img: "https://ik.imagekit.io/gzqqjuhn9/Jeep_safar.webp?updatedAt=1745228747327",
    },
    {
      id: 4,
      name: "Wildlife Photography Expeditions",
      img: "https://ik.imagekit.io/gzqqjuhn9/wild_photo.jpg?updatedAt=1745228936388",
    },
  ];

  useEffect(() => {
    const activeItem = items.find((item) => item.id === activeId);
    const others = items.filter((item) => item.id !== activeId);

    setActiveImg(activeItem.img);
    setOtherImages(others.map((item) => item.img));
    setImageKey((prev) => prev + 1); // Trigger animation
  }, [activeId]);

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col gap-20">
      <div className="flex flex-col items-center justify-center xl:items-start gap-6">
        <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Things to Enjoy
        </h3>
        <p className="font-[manrope] text-md md:text-lg lg:text-xl text-center md:text-left">
        Explore the trails once walked by majestic tuskers, immersing yourself in nature's untamed beauty with expert-guided adventures.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center xl:grid xl:grid-cols-2 xl:items-stretch  xl:gap-10">
        {/* Left side menu */}
        <div className="h-full w-full flex flex-col gap-6">
          {items.map((item) => (
            <span
              onClick={() => setActiveId(item.id)}
              key={item.id}
              className={`flex gap-6 items-center w-full border-b-3 ${
                activeId === item.id ? "border-[#A5F211]" : "border-black"
              } py-3 cursor-pointer`}
            >
              <FaDiamond
                className={`${
                  activeId === item.id ? "text-[#A5F211]" : "text-black"
                }`}
              />
              <p className="font-[manrope] text-2xl">{item.name}</p>
            </span>
          ))}
        </div>

        {/* Right side grid */}
        <div ref={ref}>
          <div className="aspect-square min-w-[200px] w-[400px] lg:min-w-[400px] lg:w-[600px] xl:lg:w-[650px] overflow-hidden">
            <div className="grid grid-cols-3 grid-rows-3 gap-8 lg:gap-12 w-full h-full rotate-45">
              {/* Row 1 */}
              <div></div>
              <div className={`w-full h-full border-2 border-[#A5F211] rounded-3xl overflow-hidden shadow-2xl ${trigger?"fadeUp":""}`}>
                <img
                  className="w-full h-full object-cover -rotate-45 scale-150 filter grayscale"
                  src={otherImages[0]}
                  alt="Things  to enjoy"
                />
              </div>
              <div></div>
              {/* Row 2 */}
              <div className={`w-full h-full border-2 border-[#A5F211] rounded-3xl overflow-hidden shadow-2xl ${trigger? "fadeleft":""}`}>
                <img
                  className="w-full h-full object-cover -rotate-45 scale-150 filter grayscale"
                  src={otherImages[1]}
                  alt="Things  to enjoy"
                />
              </div>
              <div className="w-full h-full border-2 border-[#A5F211] rounded-3xl overflow-hidden shadow-2xl scale-140 z-20">
                <img
                  key={imageKey}
                  className="w-full h-full object-cover -rotate-45 scale-150 fade-in"
                  src={activeImg}
                  alt="Things  to enjoy"
                />
              </div>
              <div className={`w-full h-full border-2 border-[#A5F211] rounded-3xl overflow-hidden shadow-2xl ${trigger ? "fadeRight":""}`}>
                <img
                  className="w-full h-full object-cover -rotate-45 scale-150 filter grayscale"
                  src={otherImages[2]}
                  alt="Things  to enjoy"
                />
              </div>
              {/* Row 3 */}
              <div></div>
              <div className={`w-full h-full border-2 border-[#A5F211] rounded-3xl overflow-hidden shadow-2xl ${trigger ? "fadeDown":""} `}>
                <img
                  className="w-full h-full object-cover -rotate-45 scale-150 filter grayscale"
                  src={otherImages[3]}
                  alt="Things  to enjoy"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToEnjoy;
