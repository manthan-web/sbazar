"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Card from "./card";
import { cn } from "@/lib/utils";

const MapSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-left md:text-center mb-32 w-full px-6 animate-fade-in-left">
          <h2 className="text-4xl md:text-6xl font-bold text-black">
            Meet Our Global Team
          </h2>
          <p className="text-zinc-700 max-w-2xl mx-auto mt-4 font-normal text-lg md:text-xl">
            With over a decade of industry experience, weve built a team of
            passionate individuals who are dedicated to helping our clients
            achieve their goals.
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row items-start justify-center w-full max-w-6xl mx-auto px-4">
          <div
            className="relative mb-12 md:mb-0 md:mr-8 w-full md:w-2/5"
            style={{ height: "400px", marginTop: "-100px" }}
          >
            <Image
              src="/germany-map.png"
              alt="Map of Germany"
              height={500}
              width={500}
              className="drop-shadow-xl bg-transparent"
            />
            <div className="absolute bg-white/40 backdrop-blur-2xl rounded-full overflow-hidden top-1/3 left-1/2">
              <Card
                previewImage="/"
                dialogImage="/ask-aditi.png"
                title="Hans Schmidt"
                subtitle="German Lead"
                description="Hans is our lead developer in Germany, bringing years of experience in software engineering and team management."
              />
            </div>
          </div>
          <div className="relative w-full md:w-3/5" style={{ height: "700px" }}>
            <Image
              src="/map.png"
              alt="Map of India"
              height={700}
              width={700}
              className="drop-shadow-xl bg-transparent"
            />
            <div
              className={cn(
                "absolute bg-white/40 backdrop-blur-2xl shadow-md rounded-full overflow-hidden",
                isMobile ? "top-[4rem] left-[7rem]" : "top-[6rem] left-[12rem]"
              )}
            >
              <Card
                previewImage="/"
                dialogImage="/ask-aditi.png"
                title="Manthan Narang"
                subtitle="Developer"
                description="Manthan is a skilled developer based in India, specializing in front-end technologies and user experience design."
              />
            </div>
            <div
              className={cn(
                "absolute bg-white/40 backdrop-blur-2xl rounded-full overflow-hidden",
                isMobile
                  ? "bottom-[19rem] right-[16rem]"
                  : "bottom-[8rem] right-[23rem]"
              )}
            >
              <Card
                previewImage="/"
                dialogImage="/ask-aditi.png"
                title="Priya Sharma"
                subtitle="Project Manager"
                description="Priya is our project manager in India, ensuring smooth collaboration between our international teams and clients."
              />
            </div>
          </div>

          {/* Connecting Element */}
          <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox={isMobile ? "0 0 500 700" : "0 0 1000 700"}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  isMobile
                    ? "M150,150 C200,100 250,300 300,250"
                    : "M250,200 C300,150 500,200 500,270"
                }
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,10"
                className="connecting-line"
              >
                <animate
                  attributeName="strokeDashoffset"
                  from="100"
                  to="0"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </path>
              <circle
                cx={isMobile ? "150" : "250"}
                cy={isMobile ? "150" : "200"}
                r="8"
                fill="#4CAF50"
              />
              <circle
                cx={isMobile ? "300" : "500"}
                cy={isMobile ? "250" : "270"}
                r="8"
                fill="#FF5722"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4CAF50" />
                  <stop offset="100%" stopColor="#FF5722" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
