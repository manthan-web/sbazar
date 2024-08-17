import React from "react";
import Image from "next/image";
import Card from "./card";
import MapSection from "./map-section";
import Values from "./values";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 flex items-start">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 p-6">
          <div className="text-left space-y-6 animate-fade-in-left">
            <h2 className="text-4xl md:text-6xl font-bold text-black">
              About Us
            </h2>
            <p className="text-zinc-800 font-medium text-lg md:text-xl">
              At Acme Inc., our mission is to revolutionize the way businesses
              operate. We believe in the power of innovation, collaboration, and
              a relentless pursuit of excellence.
            </p>
            <p className="text-zinc-700 font-normal text-lg md:text-xl">
              With over a decade of industry experience, weve built a team of
              passionate individuals who are dedicated to helping our clients
              achieve their goals.
            </p>
          </div>
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute top-0 right-0 w-4/5 h-3/5 md:w-3/4 md:h-2/3 animate-random-move">
              <Image
                src="/ask-aditi.png"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl bg-green-100/50 backdrop-blur-xl p-4 shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-4/5 h-3/5 md:w-3/4 md:h-2/3 animate-random-move">
              <Image
                src="/ask-aditi.png"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl bg-yellow-100/50 backdrop-blur-xl p-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <MapSection />
      <Values />
    </div>
  );
};

export default AboutUs;

{
  /* <svg
                className="w-full h-full"
                viewBox="0 0 1000 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M250,200 C300,150 600,150 650,400"
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
                <circle cx="250" cy="200" r="8" fill="#4CAF50" />
                <circle cx="650" cy="400" r="8" fill="#FF5722" />
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
              </svg> */
}
