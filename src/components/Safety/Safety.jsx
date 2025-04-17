import { IKImage } from "imagekitio-react";
import React from "react";
import { IKURL } from "../../lib";

const Safety = () => {
  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col items-center gap-16 bg-[url(https://ik.imagekit.io/gzqqjuhn9/reviewsBG.png?updatedAt=1744280479668)] bg-contain bg-no-repeat bg-right">
      <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Safety Instructions
      </h3>
      <div className="w-full flex items-center justify-center max-w-[1600px]">
        <div className="hidden relative h-[700px] w-[500px] bg-[#a3f21124] rounded-[400px] lg:flex items-center justify-center">
          {/* --------------------------Inner cards--------------------- */}
          {/* Card 1 */}
          <div className="absolute w-[400px] h-[100px] rounded-[50px]  top-[10%] -left-[30%] xl:-left-[50%] bg-[#a3f21124] backdrop-blur-md flex items-center gap-4 p-3">
            <span className="bg-black min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center">
              <IKImage
                urlEndpoint={IKURL}
                path="equipment.png"
                className="max-w-[50%]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <h5 className="font-[manrope] font-semibold text-xl">
                Equipment Check
              </h5>
              <p className="font-[manrope] text-sm">
                All safety equipment is thoroughly inspected before and after
                each activity.
              </p>
            </span>
          </div>
          {/* Card 2  */}
          <div className="absolute w-[400px] h-[100px] rounded-[50px]  top-[30%] -left-[20%] xl:-left-[40%] bg-[#a3f21124] backdrop-blur-md flex items-center gap-4 p-3">
            <span className="bg-black min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center">
              <IKImage
                urlEndpoint={IKURL}
                path="emergency.png"
                className="max-w-[50%]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <h5 className="font-[manrope] font-semibold text-xl">
                Emergency Support
              </h5>
              <p className="font-[manrope] text-sm">
                First-aid kits and trained medical support are available
                on-site.
              </p>
            </span>
          </div>
          {/* Card 3  */}
          <div className="absolute w-[400px] h-[100px] rounded-[50px]  bottom-[30%] -right-[20%] xl:-right-[40%] bg-[#a3f21124] backdrop-blur-md flex items-center gap-4 p-3">
            <span className="bg-black min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center">
              <IKImage
                urlEndpoint={IKURL}
                path="weather.png"
                className="max-w-[50%]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <h5 className="font-[manrope] font-semibold text-xl">
                Weather Advisory
              </h5>
              <p className="font-[manrope] text-sm">
                Activities may be rescheduled or canceled in case of unfavorable
                weather conditions.
              </p>
            </span>
          </div>
          {/* Card 4 */}
          <div className="absolute w-[400px] h-[100px] rounded-[50px]  bottom-[10%] -right-[30%] xl:-right-[50%] bg-[#a3f21124] backdrop-blur-md flex items-center gap-4 p-3">
            <span className="bg-black min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center">
              <IKImage
                urlEndpoint={IKURL}
                path="hydration.png"
                className="max-w-[50%]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <h5 className="font-[manrope] font-semibold text-xl">
                Hydration & Nutrition
              </h5>
              <p className="font-[manrope] text-sm">
                Stay hydrated and carry energy-boosting snacks during extended
                activities.
              </p>
            </span>
          </div>
          <div className="h-[600px] w-[400px] bg-[#a3f21124] rounded-[300px] flex items-center justify-center">
            <div className="h-[500px] w-[300px] rounded-[200px] flex items-center justify-center border-[30px] border-[#a3f21124] overflow-hidden">
              <IKImage
                urlEndpoint={IKURL}
                path="Inclusion2.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Mobile version */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* --------------------------Inner cards--------------------- */}
          {/* Card 1 */}
          <div className="w-[400px]  md:w-[450px] h-[100px] rounded-[50px]  top-[10%] -left-[30%] xl:-left-[50%] bg-[#a3f21124] backdrop-blur-md flex items-center gap-4 p-3">
            <span className="bg-black min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center">
              <IKImage
                urlEndpoint={IKURL}
                path="equipment.png"
                className="max-w-[50%]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <h5 className="font-[manrope] font-semibold text-xl">
                Equipment Check
              </h5>
              <p className="font-[manrope] text-sm">
                All safety equipment is thoroughly inspected before and after
                each activity.
              </p>
            </span>
          </div>
          {/* Card 2  */}
          <div className="w-[400px]  md:w-[450px] h-[100px] rounded-[50px]  top-[30%] -left-[20%] xl:-left-[40%] bg-[#a3f21124] backdrop-blur-md flex items-center gap-4 p-3">
            <span className="bg-black min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center">
              <IKImage
                urlEndpoint={IKURL}
                path="emergency.png"
                className="max-w-[50%]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <h5 className="font-[manrope] font-semibold text-xl">
                Emergency Support
              </h5>
              <p className="font-[manrope] text-sm">
                First-aid kits and trained medical support are available
                on-site.
              </p>
            </span>
          </div>
          {/* Card 3  */}
          <div className="w-[400px]  md:w-[450px] h-[100px] rounded-[50px]  bottom-[30%] -right-[20%] xl:-right-[40%] bg-[#a3f21124] backdrop-blur-md flex items-center gap-4 p-3">
            <span className="bg-black min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center">
              <IKImage
                urlEndpoint={IKURL}
                path="weather.png"
                className="max-w-[50%]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <h5 className="font-[manrope] font-semibold text-xl">
                Weather Advisory
              </h5>
              <p className="font-[manrope] text-sm">
                Activities may be rescheduled or canceled in case of unfavorable
                weather conditions.
              </p>
            </span>
          </div>
          {/* Card 4 */}
          <div className="w-[400px] md:w-[450px] h-[100px] rounded-[50px]  bottom-[10%] -right-[30%] xl:-right-[50%] bg-[#a3f21124] backdrop-blur-md flex items-center gap-4 p-3">
            <span className="bg-black min-w-[80px] min-h-[80px] rounded-full flex items-center justify-center">
              <IKImage
                urlEndpoint={IKURL}
                path="hydration.png"
                className="max-w-[50%]"
              />
            </span>
            <span className="flex flex-col gap-2">
              <h5 className="font-[manrope] font-semibold text-xl">
                Hydration & Nutrition
              </h5>
              <p className="font-[manrope] text-sm">
                Stay hydrated and carry energy-boosting snacks during extended
                activities.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
