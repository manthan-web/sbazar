"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const PhoneAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Define x transformations for sliding effect
  const imageX1 = useTransform(scrollYProgress, [0, 0.33], ['0%', '-100%']);
  const imageX2 = useTransform(scrollYProgress, [0.33, 0.66], ['100%', '0%']);
  const imageX3 = useTransform(scrollYProgress, [0.66, 1], ['100%', '0%']);

  return (
    <div ref={containerRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative">
          <Image
            src="/iphone-mockup.svg"
            alt="iPhone Mockup"
            width={300}
            height={600}
          />
          <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] overflow-hidden">
            <motion.div style={{ x: imageX1, position: 'absolute', width: '100%', height: '100%' }}>
              <Image
                src="/mockup.svg"
                alt="Content Image 1"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <motion.div style={{ x: imageX2, position: 'absolute', width: '100%', height: '100%' }}>
              <Image
                src="/iphone-mockup.svg"
                alt="Content Image 2"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <motion.div style={{ x: imageX3, position: 'absolute', width: '100%', height: '100%' }}>
              <Image
                src="/iphone-mockup.svg"
                alt="Content Image 3"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAnimation;