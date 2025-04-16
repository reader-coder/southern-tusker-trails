import { IKImage } from "imagekitio-react";
import React from "react";
import { IKURL } from "../../lib";

const CampingWhyChoose = () => {
  const items = [
    {
      id: 0,
      imgPath: "mdi_mountain.png",
      heading: "Scenic Locations",
      desc: "From dense forests and riverbanks to majestic hilltops, we handpick the best spots for an immersive nature experience.",
    },
    {
      id: 1,
      imgPath: "shield.png",
      heading: "Safe & Secure",
      desc: "Our expert guides ensure a secure camping experience with proper equipment and safety measures.",
    },
    {
      id: 2,
      imgPath: "fire.png",
      heading: "Delicious Campfire Meals",
      desc: "Relish freshly cooked food under the open sky.",
    },
    {
      id: 3,
      imgPath: "cableway.png",
      heading: "Adventure & Relaxation",
      desc: "Enjoy trekking, nature walks, and storytelling by the campfire.",
    },
  ];

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 grid grid-cols-1 lg:grid-cols-2 gap-16 bg-[url(https://ik.imagekit.io/gzqqjuhn9/reviewsBG.png?updatedAt=1744280479668)] bg-contain bg-no-repeat bg-right">
      <div className="flex flex-col gap-12">
        <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          What's Included
        </h3>
        <div className="flex flex-col gap-12">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 items-start">
              <span className="bg-[#A5F211] rounded-2xl p-4 flex items-center justify-center ">
                <IKImage
                  urlEndpoint={IKURL}
                  path={item.imgPath}
                  alt={item.heading}
                  className="max-w-[30px] md:max-w-[50px]"
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
      <div className="hidden w-full h-full lg:flex items-center justify-center">
        <IKImage
          urlEndpoint={IKURL}
          path="CampingWhyChoose.png"
          alt="Why choose us"
          className="max-w-[400px] xl:max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default CampingWhyChoose;
