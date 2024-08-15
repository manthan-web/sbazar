import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-[25rem] md:h-[30rem] flex items-center justify-center md:px-12 px-6">
      <h1 className="font-extrabold text-zinc-800 text-7xl max-w-2xl md:text-9xl text-center">
        Bringing {""} <span className="text-[#BC1E3A]">Happiness</span>
      </h1>
    </section>
  );
};

export default HeroSection;
