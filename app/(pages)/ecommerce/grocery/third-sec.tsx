"use client"
import React, { useRef, useEffect } from 'react';
import { Calendar, ShoppingBag, PiggyBank, Repeat } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from 'next/image';

interface FeaturesCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
    <div className="flex items-center mb-3">
      <Icon className="w-7 h-7 text-[#BC1E3A] mr-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ExistingIssuesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -30]);
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      springY.set(y.get());
    }, 500);

    return () => clearTimeout(timeout);
  }, [springY, y]);

  const dealsFeatures: FeaturesCardProps[] = [
    {
      icon: Calendar,
      title: "Weekly Curation",
      description: "Handpicked items offered at special prices for a whole week"
    },
    {
      icon: ShoppingBag,
      title: "Diverse Selections",
      description: "A mix of staples, snacks, and essentials to cater to all your kitchen needs"
    },
    {
      icon: PiggyBank,
      title: "Plan Ahead",
      description: "Perfect for stocking up on weekly groceries with the benefit of savings"
    },
    {
      icon: Repeat,
      title: "Always New",
      description: "The selection refreshes every week, giving you something new to look forward to"
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50" ref={sectionRef}>
      <div className='max-w-4xl mx-auto text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>Weekly & Flash <span className='text-[#BC1E3A]'>Deals</span></h1>
        <p className='text-xl md:text-2xl font-normal text-gray-600'>Distribution and Viewing</p>
      </div>

      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            {dealsFeatures.slice(0, 2).map((issue, index) => (
              <FeaturesCard key={index} {...issue} />
            ))}
          </div>

          <div className="hidden md:block">
            <div className="relative bg-green-300 h-full rounded-2xl overflow-hidden shadow-lg">
              <motion.div style={{ y: springY }} className="absolute top-[5rem] left-[6rem] transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/iphone-mockup.svg"
                  alt="Movie Distribution App Mockup"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="space-y-8">
            {dealsFeatures.slice(2).map((issue, index) => (
              <FeaturesCard key={index} {...issue} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExistingIssuesSection;