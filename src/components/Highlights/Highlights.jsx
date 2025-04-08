import { IKVideo } from "imagekitio-react";
import React, { useRef, useState } from "react";
import { IKURL } from "../../lib";
import { Pause, Play } from "lucide-react";

const Highlights = () => {
  
  return (
    <div className="h-[300px] md:h-[500px] lg:h-[700px] 2xl:h-[800px] w-full relative">
      <IKVideo
        urlEndpoint={IKURL}
        path="sample-video.mp4"
        className="w-full h-full object-cover"
        muted
        autoPlay
        loop
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 z-10 flex items-end">
        <div className="flex flex-col gap-4 lg:gap-6 px-8 lg:px-20 py-5 lg:py-20 text-white">
          <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Things to Enjoy
          </h3>
          <p className="font-[manrope] text-sm md:text-lg lg:text-xl max-w-[75%]">
            Global Adventures, Local Explorations, and the Enchantment of
            Kerala: Your Gateway to Diverse Travel Experiences!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
