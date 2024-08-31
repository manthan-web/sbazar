"use client"
import React, { useRef, useEffect } from 'react';
import { EyeOff, Users, DollarSign, Search, MessageCircle, LayoutDashboard, LucideIcon } from 'lucide-react';
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

const IssueFacedSection: React.FC = () => {
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

  const issues: Issue[] = [
    {
      icon: EyeOff,
      title: "Visibility",
      description: "Events often miss their intended audience due to scattered communication channels"
    },
    {
      icon: Users,
      title: "Cultural Barriers",
      description: "Limited cross-cultural participation keeps events within narrow circles"
    },
    {
      icon: DollarSign,
      title: "Marketing Efforts",
      description: "Organizers spend more on promotion, less on event quality"
    },
    {
      icon: Search,
      title: "Discovery Difficulties",
      description: "Attendees lack a one-stop platform for finding relevant events"
    },
    {
      icon: MessageCircle,
      title: "Communication Gaps",
      description: "Limited interaction between organizers and participants restricts community engagement"
    },
    {
      icon: LayoutDashboard,
      title: "Fragmented Management",
      description: "Handling event logistics across platforms creates a disjointed experience"
    }
  ];

  return (
    <section className="py-16 mx-auto px-6 max-w-full w-full bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className='md:space-y-3 px-6 text-center mb-12'>
        <h1 className='md:text-5xl text-3xl font-bold'><span className='text-[#BC1E3A]'>Key</span> Challenges</h1>
        <p className='text-lg md:text-2xl text-gray-600'>Our community faces several obstacles in bringing people together for events</p>
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
                some image regarding the issues
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

export default IssueFacedSection;