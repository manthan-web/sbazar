"use client"
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Feature = {
  title: string;
  content: string;
};

type Card = {
  id: number;
  heading: string;
  description: string;
  features: Feature[];
  imageLink: string;
};

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState<Card[]>(items);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [checkIfMobile]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setCards((prevCards) => {
          const newArray = [...prevCards];
          newArray.unshift(newArray.pop()!);
          return newArray;
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleInteraction = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setIsPaused(false);
  }, []);

  return (
    <div
      className="relative min-h-[30rem] w-full hover:cursor-pointer max-w-[1024px] mx-auto"
      onMouseEnter={isMobile ? undefined : handleInteraction}
      onMouseLeave={isMobile ? undefined : handleInteractionEnd}
      onTouchStart={isMobile ? handleInteraction : undefined}
      onTouchEnd={isMobile ? handleInteractionEnd : undefined}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white border min-h-[30rem] w-full rounded-3xl p-8 shadow-xl"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className="flex flex-col mx-auto  h-full">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-2">
                {card.heading}
              </h2>
              <p className="text-xl text-center text-black mb-6">
                {card.description}
              </p>
            </div>
            <div className="flex flex-row justify-between flex-grow">
              <div className="flex-1 pr-4  flex flex-col justify-center">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                    <p className="text-black">{feature.content}</p>
                  </div>
                ))}
              </div>
              <div className="w-1/2 hidden md:flex justify-center">
                <Image
                  src={card.imageLink}
                  alt={card.heading}
                  height={400}
                  width={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};