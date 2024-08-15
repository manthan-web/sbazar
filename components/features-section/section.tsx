"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[200vh] md:flex-row border-t-2 flex flex-col gap-4 mt-14 px-12 pt-6"
    >
      <h2 className="text-4xl font-bold mb-4">Feature Of Sbazar</h2>

      {/* Scoins */}
      <div className="relative h-[100vh] flex items-center justify-center">
        {" "}
        {/* Center content */}
        <div className="absolute inset-0">
          {" "}
          {/* Make this container cover the full area */}
          <Image
            src="/ask-aditi.png"
            alt="Background"
            height={500}
            width={500}
            objectFit="cover"
            className="rounded-3xl object-cover bg-gray-200"
          />
        </div>
        <motion.div
          style={{ y: smoothY }}
          className="relative overflow-hidden rounded-3xl z-[2] shadow-md flex justify-center items-center"
        >
          <div className="flex flex-col p-12 w-full gap-6 h-full bg-gray-400/20 backdrop-blur-2xl">
            <h1 className="text-3xl font-bold">Scoins</h1>
            <p>DOUBLE THE REWARDS, DOUBLE THE JOY</p>
            <p>
              We believe in rewarding our customers in more ways than one. Thats
              why we have two rewarding systems: SCoins and SPoints, each stored
              in different fields but both incredibly rewarding!
            </p>
          </div>
        </motion.div>
      </div>


      {/* another  */}
      <div className="relative h-[100vh] flex items-center justify-center">
        {" "}
        {/* Center content */}
        <div className="absolute inset-0">
          {" "}
          {/* Make this container cover the full area */}
          <Image
            src="/ask-aditi.png"
            alt="Background"
            height={500}
            width={500}
            objectFit="cover"
            className="rounded-3xl object-cover bg-gray-200"
          />
        </div>
        <motion.div
          style={{ y: smoothY }}
          className="relative overflow-hidden rounded-3xl z-[2] shadow-md flex justify-center items-center"
        >
          <div className="flex flex-col p-12 w-full gap-6 h-full bg-gray-400/20 backdrop-blur-2xl">
            <h1 className="text-3xl font-bold">Scoins</h1>
            <p>DOUBLE THE REWARDS, DOUBLE THE JOY</p>
            <p>
              We believe in rewarding our customers in more ways than one. Thats
              why we have two rewarding systems: SCoins and SPoints, each stored
              in different fields but both incredibly rewarding!
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default FeaturesSection;
