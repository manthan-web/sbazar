"use client"
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

interface Logo {
  name: string;
}

const logos: Logo[] = [
  { name: 'Empowering' },
  { name: 'India' },
  { name: 'Empowering' },
  { name: 'India' },
  { name: 'Empowering' },
  { name: 'India' },
  { name: 'Empowering' },
  { name: 'India' },
];

const SecondInfiniteScrool: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollWidth = carousel.scrollWidth;

    const scroll = async () => {
      await controls.start({
        x: [0, -scrollWidth / 3],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    };

    scroll();

    return () => {
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.div
      className="relative mx-auto max-w-7xl py-11 bg-white w-full  overflow-hidden my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
      <motion.div
        ref={carouselRef}
        className="flex items-center space-x-8"
        style={{ x }}
        animate={controls}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-4xl md:text-5xl md:mr-24 mr-12 hover:cursor-pointer font-bold text-opacity-20 text-zinc-800">{logo.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SecondInfiniteScrool;




// "use client"
// import React, { useRef, useEffect } from 'react';

// interface InfiniteSliderProps {
//   items: React.ReactNode[];
// }

// const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ items }: { items: any }) => {
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const animate = () => {
//       if (slider.scrollLeft >= slider.scrollWidth / 2) {
//         slider.scrollLeft = 0;
//       } else {
//         slider.scrollLeft += 1;
//       }
//       requestAnimationFrame(animate);
//     };

//     const animation = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animation);
//   }, []);

//   return (
//     <div className="relative overflow-hidden w-full">
//       <div
//         ref={sliderRef}
//         className="flex overflow-x-hidden"
//         style={{ scrollBehavior: 'auto' }}
//       >
//         {[...items, ...items].map((item, index) => (
//           <div key={index} className="flex-shrink-0 w-64 p-4">
//             <div className="bg-gray-200 h-40 flex items-center justify-center">
//               {item}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfiniteSlider;