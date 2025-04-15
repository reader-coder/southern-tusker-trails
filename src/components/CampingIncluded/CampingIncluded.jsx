import { IKImage } from "imagekitio-react";
import React from "react";
import { IKURL } from "../../lib";

const CampingIncluded = () => {
  return (
    <div className="h-fit relative px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col gap-14 bg-[#1D1D1D]">
      <IKImage
        urlEndpoint={IKURL}
        path="InclusionsBG.png"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <h3 className="font-[manrope] text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        What's Included
      </h3>
      <div className="w-full items-stretch grid grid-cols-2 grid-rows-2 gap-20">
        <div className="w-full h-full flex flex-col gap-4">
          <IKImage
            urlEndpoint={IKURL}
            path="Inclusion1.png"
            className="rounded-br-[15rem]"
          />
          <p className="text-white font-[manrope] text-3xl">
            Bonfire & BBQ setup
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-end gap-4">
          <IKImage
            urlEndpoint={IKURL}
            path="Inclusion2.png"
            className="rounded-bl-[15rem]"
          />
          <p className="text-white font-[manrope] text-3xl">
            Comfortable tents & sleeping bags
          </p>
        </div>
        <div className="w-full h-full flex flex-col gap-4">
          <IKImage
            urlEndpoint={IKURL}
            path="Inclusion2.png"
            className="rounded-tr-[15rem]"
          />
          <p className="text-white font-[manrope] text-3xl">
            Safety & first-aid support
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-end gap-4">
          <IKImage
            urlEndpoint={IKURL}
            path="Inclusion1.png"
            className="rounded-tl-[15rem]"
          />
          <p className="text-white font-[manrope] text-3xl">
            Guided nature walks & activities
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampingIncluded;
