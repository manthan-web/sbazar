import React from "react";
import SocialInfos from "./info";
import SocialsModule from "./socialHeading";
import FAQSection from "../ecommerce/grocery/faq-section";
import { socialsPageFaqContent } from "@/faq-data";
import InfiniteScrollCarousel from "@/components/infinite-scroller/infinite-scroll";

const page = () => {
  return (
    <div className="flex flex-col">
      <SocialsModule />
      <SocialInfos />
      <div className="-mt-32">
        <InfiniteScrollCarousel
          names={["Coming Soon", "Coming Soon", "Coming Soon"]}
        />
      </div>
      <FAQSection title="FAQ's" faqItems={socialsPageFaqContent} />
    </div>
  );
};

export default page;
