"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ThreeSections = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections = [
    {
      title: "Ecommerce",
      shortText: "Elevate your cooking",
      bgColor: "bg-amber-100",
      hoverBgColor: "bg-amber-200",
      image: "/pot-image.jpg", // Replace with actual image path
    },
    {
      title: "Social",
      shortText: "Set a stunning table",
      bgColor: "bg-emerald-100",
      hoverBgColor: "bg-emerald-200",
      image: "/social-image.jpg", // Replace with actual image path
    },
    {
      title: "Business",
      shortText: "Cook with precision",
      bgColor: "bg-sky-100",
      hoverBgColor: "bg-sky-200",
      image: "/business-image.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:px-36 px-8 py-24 gap-6 w-full md:h-[500px]">
      {sections.map((section, index) => (
        <div
          key={index}
          className={cn(
            "relative flex flex-col justify-end rounded-3xl transition-all duration-300 overflow-hidden cursor-pointer",
            section.bgColor,
            isMobile ? "mb-6 h-96" : (activeSection === index ? "md:flex-[2]" : "md:flex-[0.5]")
          )}
          onMouseEnter={() => !isMobile && setActiveSection(index)}
          onMouseLeave={() => !isMobile && setActiveSection(null)}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={section.image}
              alt={section.title}
              layout="fill"
              objectFit="cover"
              className={cn(
                "transition-opacity duration-300",
                !isMobile && activeSection === index ? "opacity-20" : "opacity-100"
              )}
            />
          </div>

          <div className={cn(
            "relative z-10 p-6 md:p-8",
            isMobile ? "bg-black bg-opacity-50" : ""
          )}>
            <h2 className="text-3xl font-bold mb-2 text-white">{section.title}</h2>
            {(isMobile || activeSection === index) && (
              <>
                <p className="text-lg mb-4 text-white">{section.shortText}</p>
                <div className="flex gap-4">
                  <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                    Shop Now
                  </button>
                  <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                    Learn More
                  </button>
                </div>
              </>
            )}
          </div>

          {!isMobile && activeSection !== index && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white text-center">{section.title}</h2>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThreeSections;