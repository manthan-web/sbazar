"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis"
import { MemoizedStars } from "../text-animate/animate";

const HeroSection = () => {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] // Custom easing function for a smooth, bouncy effect
      }
    }
  };

  const wordVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className="w-full md:min-h-[30rem] bg-white min-h-[23rem] flex flex-col items-center justify-center py-20 md:py-24 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="max-w-5xl w-full"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-extrabold text-7xl md:text-9xl text-center text-zinc-800 leading-[4rem] md:leading-[8rem] flex flex-wrap justify-center items-center gap-4">
          <motion.span
            variants={wordVariants}
            className="inline-block"
          >
            Bringing
          </motion.span>
          <motion.span
            variants={wordVariants}
            className="relative inline-block text-[#BC1E3A]"
          >
            Happiness
            <MemoizedStars />
          </motion.span>
        </h1>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;