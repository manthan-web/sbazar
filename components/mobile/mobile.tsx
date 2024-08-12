"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const MobileSection = ({ src }: { src?: string }) => {

    const ref = useRef<HTMLDivElement>(null);

  return (
    <div
    ref={ref}
    className="min-h-[20vh] flex items-start justify-center"
    >
        <motion.div
        style={{
         
        }}
        className=""
      >
         <Image
          src={src as string}
          alt="Animated image"
          height={300}
          width={300}
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  )
}

export default MobileSection