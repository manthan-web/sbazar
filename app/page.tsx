import { AccordionDemo } from "@/components/accordian/accordian-demo";
import FeaturesSection from "@/components/features-section/section";
import HeroSection from "@/components/hero/hero-section";
import { ImageScroll } from "@/components/hero/macbook-scroll";
import InfiniteSlider from "@/components/infinite-scroller/infinite-scroll";
import MobileSection from "@/components/mobile/mobile";
import ThreeSections from "@/components/three-sections/three-sections";
import React from "react";

const page = () => {


  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <MobileSection src="/mockup.svg" />
      <InfiniteSlider items={items} />
      <ThreeSections />
      <FeaturesSection />
      <AccordionDemo />
    </main>
  );
};

export default page;
