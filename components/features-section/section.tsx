"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ScoinsSection = () => {


  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-full bg-gray-50  px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-16 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:space-y-10 space-y-8"
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

            <Link href={"/scoins"} className="inline-block">
              <Button className="bg-[#BC1E3A] hover:bg-white hover:text-[#BC1E3A] text-white font-normal md:text-lg px-12 py-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-opacity-50 shadow-lg">
                Explore
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            {/* <div className="relative flex items-center justify-center rounded-2xl "></div> */}
            <Image
              src="/scoins-image.png"
              alt="Green leaf symbolizing sustainability"
              width={500}
              height={500}
              className="relative z-10 object-cover "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ScoinsSection