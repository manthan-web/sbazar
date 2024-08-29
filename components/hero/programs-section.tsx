"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProgramsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-full bg-gray-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-zinc-800">Programms</span> 
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-2xl transform rotate-3"></div>
            <Image
              src="/programms.png"
              alt="SPoints illustration"
              width={400}
              height={400}
              className="relative z-10 object-cover rounded-xl shadow-2xl transform -rotate-3 transition-transform duration-300 hover:rotate-0 py-4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="md:space-y-10 space-y-8"
          >
            <h2 className="text-3xl md:text-4xl text-zinc-800 font-semibold tracking-wide leading-tight">
              SBazar Association Program (SAP)
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Impact: Brings together community groups for cultural celebrations and learning, fostering a sense of belonging and cultural pride.
            </p>

            <Link href={"/spoints"} className="inline-block">
              <Button className="bg-[#BC1E3A] hover:bg-[#9A1730] text-white font-normal text-lg md:text-xl px-8 py-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-opacity-50 shadow-lg">
                Explore
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProgramsSection