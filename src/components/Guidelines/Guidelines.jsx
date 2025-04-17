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
      heading: "Pre-Activity Briefing",
      desc: "Participants receive a safety briefing outlining the activity, terrain, expected challenges, and emergency protocols. Guides also demonstrate proper use of equipment.",
    },
    {
      id: 1,
      heading: "Age & Fitness Requirements",
      desc: "Most activities are suitable for individuals aged 12 and above with moderate physical fitness. Participants should be free from serious medical conditions or recent surgeries.",
    },
    {
      id: 2,
      heading: "Clothing & Gear",
      desc: "Wear moisture-wicking clothes, trekking shoes with good grip, and carry essentials like sunscreen, hat, and a refillable water bottle. Gear is usually provided for specialized activities.",
    },
    {
      id: 3,
      heading: "Weather Conditions",
      desc: "Activities are weather-dependent. Light rain is manageable, but severe weather may lead to cancellations or rescheduling for safety reasons. Always check the forecast before arrival.",
    },
    {
      id: 4,
      heading: "Emergency Preparedness",
      desc: "All guides carry basic first-aid kits and communication devices. Emergency evacuation procedures are in place, and nearest medical facilities are mapped out in advance.",
    },
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
          <Accordion className="w-full flex flex-col gap-5">
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
