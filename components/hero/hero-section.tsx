"use client"
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col items-center py-20 md:py-24 px-6 md:px-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl w-full space-y-10">
        <motion.h1
          className="font-extrabold text-6xl md:text-8xl text-center text-zinc-800 leading-[4rem] md:leading-[6rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bringing
          <span className="relative inline-block mx-4 my-2">
            <span className="absolute inset-0 bg-[#FFCCCB] -rotate-1 rounded-lg p-2"></span>
            <span className="relative text-[#BC1E3A] px-4 py-2">Happiness</span>
          </span>
          to Your Doorstep
        </motion.h1>
        
        <motion.p
          className="text-zinc-600 text-xl md:text-2xl text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Experience joy with every delivery. We're not just a service; we're your partners in creating moments of delight.
        </motion.p>
        
        <motion.div
          className="md:flex flex-col hidden items-center gap-4 text-zinc-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star className="mr-1" key={i} size={24} fill="#BC1E3A" color="#BC1E3A" />
            ))}
          </div>
          <p className="text-lg font-semibold">Trusted by over 10,000 happy customers</p>
          
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;