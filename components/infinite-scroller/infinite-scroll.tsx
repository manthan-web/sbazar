"use client"
import React, { useRef, useEffect } from 'react';

interface InfiniteSliderProps {
  items: React.ReactNode[];
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ items }: { items: any }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const animate = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div 
        ref={sliderRef}
        className="flex overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0 w-64 p-4">
            <div className="bg-gray-200 h-40 flex items-center justify-center">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;