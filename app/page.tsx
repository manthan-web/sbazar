import HeroSection from "@/components/hero/hero-section";
import { ImageScroll } from "@/components/hero/macbook-scroll";
import MobileSection from "@/components/mobile/mobile";
import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      {/* <ImageScroll src="/iphone-mockup.svg" /> */}
      <MobileSection src="/mockup.svg" />
    </main>
  );
};

export default page;
