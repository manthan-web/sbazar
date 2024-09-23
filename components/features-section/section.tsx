"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ScoinsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white px-8 py-20 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-zinc-800"></span> <span className="text-[#BC1E3A]">S</span>Coins
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:w-1/2 space-y-8 lg:pr-12 z-10"
          >
            <h2 className="text-3xl md:text-4xl text-zinc-800 font-semibold tracking-wide leading-tight">
              Double the Rewards, Double the Joy!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The Green Ticket initiative transforms your entertainment choices into environmental action.
              By linking ticket purchases to tree planting, we're creating a community-driven approach to
              sustainability. Every ticket is a step towards a greener future, making environmental
              responsibility an integral part of your event experience.
            </p>

            <Link href="/scoins" className="inline-block">
              <Button className="bg-[#BC1E3A] hover:bg-white hover:text-[#BC1E3A] text-white font-normal md:text-lg px-12 py-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-opacity-50 shadow-lg">
                Explore
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="lg:w-1/2 mt-12 lg:mt-0 relative lg:absolute lg:top-0 lg:right-0 lg:h-full"
          >
            <div className="h-full w-full lg:overflow-visible">
              <Image
                src="/scoins-image.png"
                alt="SCoins golden medallion"
                width={1000}
                height={1000}
                className="h-auto w-full object-cover object-center lg:h-[40rem] lg:w-auto lg:max-w-none lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/3 lg:translate-x-[14rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}