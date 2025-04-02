import React from "react";
import BusinessInfo from "./info";
import BusinessHeading from "./heading";
import InfiniteScrollCarousel from "@/components/infinite-scroller/infinite-scroll";

const page = () => {
  return (
    <div className="flex flex-col">
      <BusinessHeading />
      <BusinessInfo />
      <div className="-mt-36">
        <InfiniteScrollCarousel
          names={["Coming Soon", "Coming Soon", "Coming Soon"]}
        />
      </div>
    </div>
  );
};

export default page;
