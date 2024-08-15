"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ThreeSections = () => {
  const [hoverStates, setHoverStates] = useState({
    section1: true,
    section2: false,
    section3: false
  });

  const handleMouseEnter = (section: keyof typeof hoverStates) => {
    setHoverStates(prev => ({
      ...prev,
      [section]: true
    }));
  };

  const handleMouseLeave = (section: keyof typeof hoverStates) => {
    setHoverStates(prev => ({
      ...prev,
      [section]: false
    }));
  };

  const getSectionClass = (section: keyof typeof hoverStates) => {
    if (hoverStates[section]) {
      return "md:flex-[1]";
    } else if (Object.values(hoverStates).some(state => state)) {
      return "md:flex-[0.5]";
    }
    return "flex-1";
  };

  return (
    <div className="flex flex-col md:flex-row md:px-36 px-8 py-4 mt-14 gap-6 w-full">
      {(Object.keys(hoverStates) as Array<keyof typeof hoverStates>).map((section, index) => (
        <div
          key={section}
          className={cn(
            "flex items-center justify-between rounded-3xl min-h-[15rem] md:min-h-[20em] bg-zinc-200 transition-all duration-300",
            getSectionClass(section)
          )}
          onMouseEnter={() => handleMouseEnter(section)}
          onMouseLeave={() => handleMouseLeave(section)}
        >
          <div className="w-[12rem]">
            <Image src={"/pot-image.jpg"} className="object-cover bg-transparent" width={300} height={400} alt=""  />
          </div>
          <div className="flex flex-col items-start w-full h-full">
            <h1>Title</h1>
            <p>Description</p>
            <Button>buy now</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeSections;