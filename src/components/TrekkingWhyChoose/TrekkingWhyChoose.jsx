import { IKImage } from "imagekitio-react";
import React from "react";
import { IKURL } from "../../lib";

const TrekkingWhyChoose = () => {
  const itemsLeft = [
    {
      id: 0,
      imgPath: "scenic.png",
      heading: "Scenic & Diverse Trails",
      desc: "From lush green valleys to rugged mountains, experience nature’s best.",
    },
    {
      id: 1,
      imgPath: "expert_guides.png",
      heading: "Expert Guides",
      desc: "Trained professionals ensure a safe and enjoyable trekking experience.",
    },
  ];

  const itemsRight = [
    {
      id: 0,
      imgPath: "thrilling.png",
      heading: "Thrilling & Rewarding",
      desc: "Challenge yourself while soaking in mesmerizing views.",
    },
    {
      id: 1,
      imgPath: "eco.png",
      heading: "Eco-Friendly Approach",
      desc: "We follow sustainable trekking practices to preserve nature.",
    },
  ];

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col gap-12 bg-[url(https://ik.imagekit.io/gzqqjuhn9/reviewsBG.png?updatedAt=1744280479668)] bg-contain bg-no-repeat bg-right">
      <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        What's Included
      </h3>
      <div className="w-full lg:grid grid-cols-2">
        <div className="h-full flex flex-col gap-12 justify-center">
          {itemsLeft.map((item) => (
            <div key={item.id} className="flex gap-3 items-start">
              <span className="bg-black rounded-full p-6 flex items-center justify-center ">
                <IKImage
                  urlEndpoint={IKURL}
                  path={item.imgPath}
                  alt={item.heading}
                  className="max-w-[30px] md:max-w-[40px]"
                />
              </span>
              <span className="flex flex-col gap-2">
                <h5 className="font-[manrope] font-bold text-lg lg:text-xl">
                  {item.heading}
                </h5>
                <p className="font-[manrope] text-sm xl:text-lg">{item.desc}</p>
              </span>
            </div>
          ))}
        </div>
        <div className="hidden w-full h-full lg:flex items-center justify-center">
          <IKImage
            urlEndpoint={IKURL}
            path="TrekkingWhyChoose1.png"
            alt="Why choose us"
            className="max-w-[400px] xl:max-w-[500px]"
          />
        </div>
      </div>
      <div className="w-full lg:grid grid-cols-2">
        <div className="hidden w-full h-full lg:flex items-center justify-center">
          <IKImage
            urlEndpoint={IKURL}
            path="TrekkingWhyChoose2.png"
            alt="Why choose us"
            className="max-w-[400px] xl:max-w-[500px]"
          />
        </div>
        <div className="h-full flex flex-col gap-12 justify-center">
          {itemsRight.map((item) => (
            <div key={item.id} className="flex gap-3 items-start">
              <span className="bg-black rounded-full p-6 flex items-center justify-center ">
                <IKImage
                  urlEndpoint={IKURL}
                  path={item.imgPath}
                  alt={item.heading}
                  className="max-w-[30px] md:max-w-[40px]"
                />
              </span>
              <span className="flex flex-col gap-2">
                <h5 className="font-[manrope] font-bold text-lg lg:text-xl">
                  {item.heading}
                </h5>
                <p className="font-[manrope] text-sm xl:text-lg">{item.desc}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrekkingWhyChoose;
