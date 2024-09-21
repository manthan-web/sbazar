"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const animationPropsRight = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
};

const MobileSection = ({ src }: { src: string }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const smoothYRight = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, 0]),
    { stiffness: 50, damping: 20 }
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-[35rem] md:py-14 overflow-hidden md:mt-0 mb-16 min-w-full flex md:gap-16 items-center justify-center relative"
    >
      {/* Rounded background effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] h-[80%] rounded-full blur-3xl opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-[#BC1E3A] via-[#D84A5A] to-[#E8A9A9] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-gray-200 via-gray-300 to-gray-100 mix-blend-overlay"></div>
        </div>
      </div>
    
      
      <motion.div 
        {...animationPropsRight}
        style={{ y: smoothYRight }}
        className="mx-6 relative mb-20 z-20"
      >
        <Image
          src={src}
          alt="center image"
          height={isMobile ? 350 : 650}
          width={isMobile ? 250 : 650}
          className="object-cover shrink-0 rounded-lg drop-shadow-2xl bg-transparent"
        />
      </motion.div>
    </div>
  );
};

export default MobileSection;



// "use client"
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import Image from "next/image";

// const animationPropsLeft = {
//   initial: { y: 100 },
//   animate: { y: 0 },
//   transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
// };

// const animationPropsRight = {
//   initial: { y: 100 },
//   animate: { y: 0 },
//   transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
// };

// const MobileSection = ({ src }: { src: string }) => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "center center"],
//   });

//   const smoothYLeft = useSpring(
//     useTransform(scrollYProgress, [0, 1], [150, 0]),
//     { stiffness: 50, damping: 20 }
//   );
//   const smoothYRight = useSpring(
//     useTransform(scrollYProgress, [0, 1], [150, 0]),
//     { stiffness: 50, damping: 20 }
//   );

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="min-h-[35rem] md:py-14  overflow-hidden md:mt-0 mb-16 min-w-full flex md:gap-16 items-center justify-center relative"
//     >
//       {/* <motion.div
//         {...animationPropsLeft}
//         style={{ y: smoothYLeft }}
//         className={`${isMobile ? '-ml-20' : ''} z-10`}
//       >
//         <Image
//           src={src}
//           alt="left Animated image"
//           height={isMobile ? 150 : 250}
//           width={isMobile ? 150 : 250}
//           className="object-cover shrink-0 rounded-lg"
//         />
//       </motion.div> */}
//       <motion.div {...animationPropsRight}
//         style={{ y: smoothYRight }}
//         // className={`${isMobile ? '-mr-20' : ''} z-10`}
//         className=" mx-6 relative z-20">
//         {/* <Image
//           src="/drop-shadow.avif"
//           alt="shadow"
//           height={500}
//           width={200}
//           className="absolute opacity-75 top-2 -right-16"
//         /> */}
//         <Image
//           src={"/mockups.png"}
//           alt="center image"
//           height={isMobile ? 350 : 650}
//           width={isMobile ? 250 : 650}
//           className="object-cover shrink-0 rounded-lg drop-shadow-2xl bg-transparent"
//         />
//       </motion.div>
//       {/* <motion.div
//         {...animationPropsRight}
//         style={{ y: smoothYRight }}
//         className={`${isMobile ? '-mr-20' : ''} z-10`}
//       >
//         <Image
//           src={"/right-side-mockup.png"}
//           alt="right Animated image"
//           height={isMobile ? 150 : 250}
//           width={isMobile ? 150 : 250}
//           className="object-cover shrink-0 rounded-lg"
//         />
//       </motion.div> */}
//     </div>
//   );
// };

// export default MobileSection;