import { IKImage } from "imagekitio-react";
import React from "react";
import { IKURL } from "../../lib";

const TrekkingIncluded = () => {
  return (
    <div className="h-fit relative px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40  bg-[#1D1D1D]">
      <IKImage
        urlEndpoint={IKURL}
        path="InclusionsBG.png"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex flex-col gap-14 max-w-[1600px]">
        <h3 className="font-[manrope] text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          What's Included
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch h-fit md:h-[350px] lg:h-[550px]">
          <div className="w-full h-full flex flex-col gap-4 items-center">
            <IKImage
              urlEndpoint={IKURL}
              path="TrekkingInclusion1.png"
              className="w-full"
            />
            <p className="font-[manrope] text-white text-sm lg:text-xl text-center">
              Professional guides
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-4 justify-end items-center">
            <IKImage
              urlEndpoint={IKURL}
              path="TrekkingInclusion2.png"
              className="w-full"
            />
            <p className="font-[manrope] text-white text-sm lg:text-xl text-center">
              Safety gear & first-aid support
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-4 items-center">
            <IKImage
              urlEndpoint={IKURL}
              path="TrekkingInclusion3.png"
              className="w-full"
            />
            <p className="font-[manrope] text-white text-sm lg:text-xl text-center">
              Transport (Optional)
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-4 justify-end items-center">
            <IKImage
              urlEndpoint={IKURL}
              path="TrekkingInclusion4.png"
              className="w-full"
            />
            <p className="font-[manrope] text-white text-sm lg:text-xl text-center">
              Local Cuisine & Meal Plans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekkingIncluded;
