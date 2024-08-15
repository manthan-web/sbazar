"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const MobileSection = ({ src }: { src?: string }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Use useSpring for smoother motion
  const smoothYLeft = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, 0]),
    {
      stiffness: 50,
      damping: 20,
    }
  );
  const smoothYRight = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, 0]),
    {
      stiffness: 50,
      damping: 20,
    }
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const animationPropsLeft = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
  };

  const animationPropsRight = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-[35rem] py-6 overflow-hidden md:mt-0 mb-12 min-w-full gap-5 flex md:gap-16 items-center justify-center overflow-x-hidden"
    >
      <motion.div
        {...animationPropsLeft}
        style={{ y: smoothYLeft }}
        // className="drop-shadow-2xl"
      >
        <Image
          src={src as string}
          alt="left Animated image"
          height={isMobile ? 150 : 250}
          width={isMobile ? 150 : 250}
          className="object-cover shrink-0 rounded-lg"
        />
      </motion.div>
      <div className="drop-shadow-2xl relative">
        <Image
          src={"/drop-shadow.avif"}
          alt="shadow"
          height={500}
          width={200}
          className="absolute opacity-75 top-2 -right-20"
        />

        <Image
          src={src as string}
          alt="center image"
          height={isMobile ? 350 : 450}
          width={isMobile ? 250 : 350}
          className="object-cover shrink-0 rounded-lg drop-shadow-2xl bg-transparent"
        />
      </div>
      <motion.div
        {...animationPropsRight}
        style={{ y: smoothYRight }}
        // className="drop-shadow-2xl"
      >
        <Image
          src={src as string}
          alt="right Animated image"
          height={isMobile ? 150 : 250}
          width={isMobile ? 150 : 250}
          className="object-cover shrink-0 rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default MobileSection;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// const MobileSection = ({ src }: { src?: string }) => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "center center"],
//   });

//   const yLeft = useTransform(scrollYProgress, [0, 1], [200, 0]);
//   const yRight = useTransform(scrollYProgress, [0, 1], [200, 0]);

//   useEffect(() => {
//     if (typeof window !== "undefined" && window.innerWidth < 768) {
//       setIsMobile(true);
//     }
//   }, []);

//   const animationProps = {
//     initial: { y: 200, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     transition: {
//       duration: 0.8,
//       ease: "easeInOut",
//       delay: 0.2,
//     },
//   };

//   return (
//     <div
//       ref={sectionRef}
//       className="min-h-[20vh] bg-green-300 overflow-hidden mt-32 md:mt-0 mb-12 min-w-full gap-5 flex md:gap-16 items-center justify-center overflow-x-hidden"
//     >
//       <motion.div {...animationProps} style={{ y: yLeft }}>
//         <Image
//           src={src as string}
//           alt="left Animated image"
//           height={isMobile ? 150 : 250}
//           width={isMobile ? 150 : 250}
//           className="object-cover shrink-0 rounded-lg"
//         />
//       </motion.div>
//       <Image
//         src={src as string}
//         alt="center Animated image"
//         height={isMobile ? 300 : 450}
//         width={isMobile ? 200 : 350}
//         className="object-cover shrink-0 rounded-lg"
//       />
//       <motion.div  {...animationProps} style={{ y: yRight }}>
//         <Image
//           src={src as string}
//           alt="right Animated image"
//           height={isMobile ? 150 : 250}
//           width={isMobile ? 150 : 250}
//           className="object-cover shrink-0 rounded-lg"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default MobileSection;
