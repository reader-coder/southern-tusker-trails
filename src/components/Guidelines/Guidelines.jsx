import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { IKImage } from "imagekitio-react";
import { IKURL } from "../../lib";
import { Plus } from "lucide-react";
import "../../index.css";

const Guidelines = () => {
  const accordionContent = [
    {
      id: 0,
      heading: "Stay on the Trail",
      desc: "Avoid wandering off or taking shortcuts. Staying on marked paths helps preserve fragile ecosystems and ensures your safety throughout the trek."
    },
    {
      id: 1,
      heading: "Dress & Pack Smart",
      desc: "Wear sturdy trekking shoes, layer your clothing based on weather, and carry essentials like sun protection, water, rain gear, and personal medications."
    },
    {
      id: 2,
      heading: "Follow Your Guide",
      desc: "Always listen to your guide or trek leader. Their instructions are based on experience and safety protocols tailored to each route and condition."
    },
    {
      id: 3,
      heading: "Respect Nature & Wildlife",
      desc: "Maintain silence, don’t disturb animals, and observe from a distance. Carry all waste back with you. Take only pictures, leave only footprints."
    },
    {
      id: 4,
      heading: "Be Trek-Ready",
      desc: "Start early to avoid heat, hydrate well, and be mentally prepared for uneven terrain. Mobile signals may be weak—stay present and enjoy the trail."
    }
  ];
  

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col items-center gap-12 relative bg-[#1D1D1D]">
      <IKImage
        urlEndpoint={IKURL}
        path="InclusionsBG.png"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="w-full lg:grid grid-cols-2 gap-12 items-stretch">
        <div className="w-full h-full flex items-center justify-center">
          <IKImage
            urlEndpoint={IKURL}
            path="GuidelinesImg.png"
            className="hidden lg:block max-w-[500px] w-full"
          />
        </div>
        <div className="w-full h-full flex flex-col gap-16 lg:pt-10 lg:max-w-[600px]">
          <h3 className="font-[manrope] text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Guidelines
          </h3>
          <Accordion activeIndex={0} className="w-full flex flex-col gap-5">
            {accordionContent.map((item) => (
              <AccordionTab
                key={item.id}
                header={
                  <span className="w-full flex justify-between items-center border-b-2 border-[#A5F211] pb-3">
                    <p className="font-[manrope] text-white text-xl md:text-2xl font-semibold ">
                      {item.heading}
                    </p>
                    <Plus className="size-6 text-[#A5F211]" />
                  </span>
                }
                pt={{
                  headerIcon: { className: "hiddenClass" },
                }}
              >
                <p className="m-0 text-white font-[manrope] mt-4 text-sm md:text-lg font-normal border-0">
                  {item.desc}
                </p>
              </AccordionTab>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
