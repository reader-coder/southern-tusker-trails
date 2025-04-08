import { IKImage } from "imagekitio-react";
import React from "react";
import { IKURL } from "../../lib";

const PopularActivities = () => {
  const items = [
    { id: 1, name: "Trekking", imgPath: "TrekkingPopular.png", trips:3 },
    { id: 2, name: "Camping", imgPath: "CampingPopular.png", trips:4 },
    { id: 3, name: "Adventure Activities", imgPath: "AdventurePopular.png", trips:5 },
    { id: 4, name: "Nature Education", imgPath: "NatureEdPopular.png", trips:3 },
  ];

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 bg-[url(https://ik.imagekit.io/gzqqjuhn9/popularActivitiesBG.png?updatedAt=1744085620695)] bg-center bg-no-repeat py-20 xl:py-24 2xl:py-40 flex flex-col gap-20">
      <div className="flex flex-col items-center justify-center xl:items-start gap-6">
        <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Popular Activities
        </h3>
        <p className="font-[manrope] text-md md:text-lg lg:text-xl xl:2xl text-center md:text-left">
          Embark on exciting activities in Munnar
        </p>
      </div>
      <div className="h-full w-full grid grid-cols-2 xl:grid-cols-4 items-stretch gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className={`w-full h-full flex flex-col gap-3 ${item.id%2===0 ? "-rotate-3" :"rotate-3"} relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 px-8 py-3 bg-[#A5F211] rounded-tr-3xl flex justify-center items-center">
              <p className="font-[manrope] text-md 2xl:text-xl">{`${item.trips} Trips`}</p>
            </div>
            <div className="border-3 border-[#A5F211] rounded-3xl overflow-hidden">
              <IKImage
                urlEndpoint={IKURL}
                path={item.imgPath}
                className="w-full h-full"
              />
            </div>
            <p className="font-[manrope] font-semibold text-xl md:text-2xl text-center md:text-left">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularActivities;
