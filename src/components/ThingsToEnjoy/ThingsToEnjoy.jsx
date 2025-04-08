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
      name: "Munnar Tea Valley",
      img: "https://images.unsplash.com/photo-1559147861-32715680aef8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "Munnar Tea Trails",
      img: "https://images.unsplash.com/photo-1586753080433-3b98668a4085?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Kalari Kshetra",
      img: "https://images.unsplash.com/photo-1660994114571-b32ff7c2d310?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Attukal Waterfalls",
      img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Rose Gardens",
      img: "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          Global Adventures, Local Explorations, and the Enchantment of Kerala:
          Your Gateway to Diverse Travel Experiences!
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
          <div className="aspect-square min-w-[200px] w-[400px] lg:min-w-[400px] lg:w-[600px] xl:lg:w-[650px] ">
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
