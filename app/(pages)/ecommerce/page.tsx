import React from "react";
import EcommerceTabs from "./tabs";
import HeroSection from "@/components/hero/hero-section";
import EcommerceModule from "./ecom-module";


const page = () => {
  return (
    <div className="flex flex-col">

      <EcommerceModule />


      <section className="w-full py-12 md:py-24 flex items-start">
        <div className="mx-auto  max-w-7xl container grid md:grid-cols-2 gap-8 animate-in">
          <div className="text-left order-2 md:order-1 space-y-6">
            
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
                A platform for all talents, celebrating every entrepreneurs
                journey.
              </p>
            </div>
          </div>

          <div className="w-full order-1 md:order-2 flex items-center justify-center">
            {/* <Video src={"/videos/pot-video.mp4"} loop= /> */}
            <video className="md:w-[25rem] md:h-[25rem] w-full h-full md:ml-24" loop autoPlay muted>
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
