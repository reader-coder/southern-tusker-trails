import { Check } from "lucide-react";
import React from "react";

const PackageLineItem = ({ text }) => {
  return (
    <span className="flex items-center gap-2">
      <span className="bg-[#a5f211] p-1 flex items-center justify-center rounded-full">
        <Check className="size-2 lg:size-4 text-white" />
      </span>
      <p className="font-[manrope] text-sm lg:text-lg font-light">{text}</p>
    </span>
  );
};

export default PackageLineItem;
