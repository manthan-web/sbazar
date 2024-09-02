"use client";
import { CardStack } from "./stacks";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] px-8 md:mt-28 md:mb-24 flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
    {
    id: 0,
    heading: "Combos",
    description: "Single Products Deals",
    features: [
      { title: "Weekly Curation", content: "Handpicked items offered at special prices for a whole week" },
      { title: "Diverse Selections", content: "Monetize hobbies: Start a shop, reach locals with customizable delivery zones." },
      { title: "Open For All", content: "Monetize hobbies: Start a shop, reach locals with customizable delivery zones." }
    ],
    imageLink: "/ask-aditi.png",
  },
  {
    id: 1,
    heading: "Bundles",
    description: "Single Products Deals",
    features: [
      { title: "Weekly Curation", content: "Handpicked items offered at special prices for a whole week" },
      { title: "Diverse Selections", content: "Monetize hobbies: Start a shop, reach locals with customizable delivery zones." },
      { title: "Open For All", content: "Monetize hobbies: Start a shop, reach locals with customizable delivery zones." }
    ],
    imageLink: "/ask-aditi.png",
  },
  {
    id: 2,
    heading: "Jumbos",
    description: "Single Products Deals",
    features: [
      { title: "Weekly Curation", content: "Handpicked items offered at special prices for a whole week" },
      { title: "Diverse Selections", content: "Monetize hobbies: Start a shop, reach locals with customizable delivery zones." },
      { title: "Open For All", content: "Monetize hobbies: Start a shop, reach locals with customizable delivery zones." }
    ],
    imageLink: "/ask-aditi.png",
  },
];