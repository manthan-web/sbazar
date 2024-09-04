"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ThreeSections = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections = [
    {
      title: "Ecommerce",
      shortText: "Elevate your cooking experience with our premium kitchenware.",
      bgColor: "from-amber-100 to-amber-200",
      image: "/pot-image.jpg",
      href: "/ecommerce"
    },
    {
      title: "Social",
      shortText: "Set a stunning table and create memorable dining experiences.",
      bgColor: "from-emerald-100 to-emerald-200",
      image: "/social-image.png",
      href: "/social"
    },
    {
      title: "Business",
      shortText: "Cook with precision using our professional-grade tools.",
      bgColor: "from-sky-100 to-sky-200",
      image: "/business-img.png",
      href: "/business"
    },
  ];

  return (
    <div className="container mx-auto px-4 md:mb-24 py-16">
      {/* <h1 className='md:text-5xl text-center md:mb-12  mb-6 text-3xl font-bold'>Modules Of <span className='text-[#BC1E3A]'>Sbazar</span></h1> */}
      <div className="flex px-4 flex-col  max-w-7xl mx-auto md:flex-row gap-6 w-full md:h-[400px]">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={cn(
              "relative flex flex-col justify-end rounded-xl overflow-hidden cursor-pointer shadow-lg",
              `bg-gradient-to-br ${section.bgColor}`,
              isMobile ? "h-96 mb-6" : "flex-1"
            )}
            onMouseEnter={() => !isMobile && setActiveSection(index)}
            onMouseLeave={() => !isMobile && setActiveSection(null)}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 z-0"
              initial={false}
              animate={{ opacity: activeSection === index ? 0.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover transition-all duration-300"
              />
            </motion.div>

            <motion.div
              className="relative z-10 p-8 bg-gradient-to-t from-black to-transparent"
              initial={false}
              animate={{ y: activeSection === index ? 0 : 100 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">{section.title}</h2>
              <motion.p
                className="text-lg mb-6 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeSection === index ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {section.shortText}
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeSection === index ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                
                <Link href={section.href} className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  Explore
                </Link>
              </motion.div>
            </motion.div>

            {!isMobile && activeSection !== index && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThreeSections;