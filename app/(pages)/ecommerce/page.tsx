import React from "react";
import EcommerceTabs from "./tabs";
import { TransitionPanelCard } from "./coming-up";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 flex items-start">
        <div className="mx-auto container grid md:grid-cols-2 gap-8 animate-in">
          <div className="text-left space-y-6">
            <h2 className="text-4xl md:mb-8 md:text-6xl font-bold text-[#BC1E3A]">
              Ecommerce
            </h2>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg md:text-xl">Open For All</p>
              <p className="text-zinc-500 font-normal text-lg md:text-xl">
                Monetize hobbies: Start a shop, reach locals with customizable
                delivery zones.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg md:text-xl">Fair And Ethical</p>
              <p className="text-zinc-500 font-normal text-lg md:text-xl">
                Prioritizing fair trade and value alignment for a marketplace of
                integrity.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg md:text-xl">
                Comprehensive Support
              </p>
              <p className="text-zinc-500 font-normal max-w-xl text-lg md:text-xl">
                Supporting entrepreneurs with guidance and tools from setup to
                growth.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg md:text-xl">
                Diverse Opportunities
              </p>
              <p className="text-zinc-500 font-normal text-lg md:text-xl">
                A platform for all talents, celebrating every entrepreneur's
                journey.
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            {/* <Video src={"/videos/pot-video.mp4"} loop= /> */}
            <video className="w-full h-full" loop autoPlay muted>
              <source src="./ecommerce/pot-video.mp4" />
            </video>
          </div>
        </div>
      </section>

      <EcommerceTabs />
    </div>
  );
};

export default page;
