import Image from 'next/image';
import React from 'react';

const TrendsSection = () => {
  return (
    <section className="w-full mt-24 py-12 max-w-7xl mx-auto px-6 flex flex-col items-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#BC1E3A]">
          SBazar <span className="text-zinc-900">Trends</span>
        </h2>
        <p className="text-zinc-500 tracking-wide md:max-w-2xl font-normal text-base md:text-xl mx-auto mt-4">
          Join SBazar in Reducing Food Waste
        </p>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl md:text-2xl">Cultural Celebrations</p>
            <p className="text-zinc-500 font-normal text-lg md:text-xl">
              Seasonal and regional flavors that honor traditions
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl md:text-2xl">Wellness Focus</p>
            <p className="text-zinc-500 font-normal text-lg md:text-xl">
              Traditional models dont incorporate sustainability efforts
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl md:text-2xl">Eco-Friendly Picks</p>
            <p className="text-zinc-500 font-normal text-lg md:text-xl">
              Sustainable products for conscious living
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl md:text-2xl">Exclusive Deals</p>
            <p className="text-zinc-500 font-normal text-lg md:text-xl">
              Special offers on trending grocery items
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/iphone-mockup.svg"
            width={300}
            height={600}
            alt="App mockup"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;