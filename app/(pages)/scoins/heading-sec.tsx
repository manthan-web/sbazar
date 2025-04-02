import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const HeadingSection = () => {
  return (
    // <section className="text-center px-6 md:pb-24 py-12 md:px-0 mb-8 md:mb-12 flex flex-col items-center">
    //   <h2 className="text-5xl md:text-6xl font-bold text-zinc-800 md:mb-2 mb-1">
    //     <span className="text-[#2C2C2C]">S</span>Coins
    //     {/* <span className="text-[#2C2C2C]">S</span>Points */}
    //   </h2>
    //   <p className="text-zinc-600 max-w-full md:max-w-4xl font-semibold text-lg md:text-xl">
    //     Double the Rewards, Double the Joy!
    //   </p>

    //   <p className="text-zinc-500 mt-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
    //     We believe in rewarding our customers in more ways than one. Thats why
    //     we have two rewarding systems:{" "}
    //     <span className="text-zinc-900 font-medium">SCoins</span> and{" "}
    //     <span className="text-zinc-900 font-medium">SPlus</span>, each stored
    //     in different fields but both incredibly rewarding!
    //   </p>
    // </section>
    <div
    //   initial={{ opacity: 0, x: 50 }}
    //   animate={{ opacity: 1, x: 0 }}
    //   transition={{ delay: 0.6, duration: 0.6 }}
      className="w-screen items-center justify-center -my-20"
    >
      <div className="flex h-full w-full lg:overflow-visible items-center justify-center">
        <Image
          src="/scoins-image.png"
          alt="SCoins golden medallion"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default HeadingSection;
