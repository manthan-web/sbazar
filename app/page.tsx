import { AccordionDemo } from "@/components/accordian/accordian-demo";
import FeaturesSection from "@/components/features-section/section";
import HeroSection from "@/components/hero/hero-section";
import { ImageScroll } from "@/components/hero/macbook-scroll";
import InfiniteScrollCarousel from "@/components/infinite-scroller/infinite-scroll"; "@/components/infinite-scroller/infinite-scroll";
import MobileSection from "@/components/mobile/mobile";
import ThreeSections from "@/components/three-sections/three-sections";
import React, { useEffect } from "react";
import FAQSection from "./(pages)/ecommerce/grocery/faq-section";
import SCoinsSection from "@/components/features-section/section";
import ProgramsSection from "@/components/hero/programs-section";
import SecondInfiniteScrool from "@/components/infinite-scroller/second-scroll";
import WhoWeAreSection from "@/components/hero/who-we-are";
import { homePageFaqContent } from "@/faq-data";
import ScrollIndicator from "@/components/scroll-for-mode/scroll-indicator";



const page = () => {

  


  return (
    <main className="w-full min-h-screen">
      <ScrollIndicator />
      <HeroSection />
      <MobileSection src="/mockups2.png" />
      <InfiniteScrollCarousel />
      <ThreeSections />
      <SCoinsSection />
      <SecondInfiniteScrool />
      <ProgramsSection />
      <SecondInfiniteScrool />
      <WhoWeAreSection />
      <FAQSection title="FAQ's" faqItems={homePageFaqContent} />
    </main>
  );
};

export default page;
