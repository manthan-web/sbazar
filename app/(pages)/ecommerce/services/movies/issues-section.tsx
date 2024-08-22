"use client"
import React, { useRef, useEffect } from 'react';
import { Megaphone, ClipboardList, DollarSign, Users, Leaf, PieChart, LucideIcon } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis"

import Image from 'next/image';

interface IssueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const IssueCard: React.FC<IssueCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center mb-2">
      <Icon className="w-6 h-6 text-[#BC1E3A] mr-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

interface Issue {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ExistingIssuesSection: React.FC = () => {


  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -30]); // Increase the rising amount
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      springY.set(y.get()); // Start the animation after a delay
    }, 500); // 500ms delay

    return () => clearTimeout(timeout);
  }, [springY, y]);

  const issues: Issue[] = [
    {
      icon: Megaphone,
      title: "Limited Promotional Tools",
      description: "Traditional reliance on WhatsApp groups fails to reach a wider audience"
    },
    {
      icon: ClipboardList,
      title: "Operational Inefficiencies",
      description: "Manual processes for ticket sales, seat allocation, and entry verification"
    },
    {
      icon: DollarSign,
      title: "High Ticket Prices",
      description: "Costs deter casual viewers, leading to lower theater occupancy"
    },
    {
      icon: Users,
      title: "Lack of Engagement",
      description: "Minimal interaction between distributors/theaters and the audience"
    },
    {
      icon: Leaf,
      title: "Environmental Neglect",
      description: "Traditional models don't incorporate sustainability efforts"
    },
    {
      icon: PieChart,
      title: "Revenue Sharing",
      description: "Fair distribution of profits among stakeholders remains a complex issue."
    }
  ];


  

  return (
    <section className="py-16 mx-auto max-w-full w-full bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className='md:space-y-3 text-center mb-12'>
        <h1 className='md:text-5xl text-3xl font-bold'>Existing Issues In <span className='text-[#BC1E3A]'>Movie</span></h1>
        <h1 className='md:text-5xl text-3xl font-bold'>Distribution and Viewing</h1>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6 md:space-y-8">
            {issues.slice(0, 3).map((issue, index) => (
              <IssueCard key={index} {...issue} />
            ))}
          </div>

          <div className="hidden md:block">
            <div className="relative shadow-md bg-green-300 h-[24.5rem] rounded-xl overflow-hidden">
              <motion.div style={{ y: springY }} className="absolute mt-20 left-[4.5rem]">
                <Image
                  src="/iphone-mockup.svg"
                  alt="Movie Distribution App Mockup"
                  className="object-cover"
                  width={250} 
                  height={550}
                />
              </motion.div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {issues.slice(3).map((issue, index) => (
              <IssueCard key={index} {...issue} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExistingIssuesSection;