"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Lenis from "@studio-freight/lenis"



const SocialsModule = () => {


  useEffect(() => {

    const lenis = new Lenis()



    function raf(time: any) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  })


  return (
    <motion.section
      className="w-full md:min-h-[35rem]  min-h-[23rem] flex flex-col justify-center items-center px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl md:max-w-xl w-full space-y-6">
        <motion.h1
          className="font-extrabold text-6xl md:text-9xl text-center text-zinc-800 leading-[4rem] md:leading-[8rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        Socials
          <span className="relative inline-block mx-4 my-2">
            <span className="absolute inset-0 bg-[#FFCCCB] -rotate-1 rounded-lg p-2"></span>
            <span className="relative text-[#BC1E3A] px-4 py-2">Module</span>
          </span>
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default SocialsModule;