"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const elementPosition = document.getElementById('programs-section')?.offsetTop || 0
      if (scrollPosition > elementPosition - 100) {
        setIsVisible(true)
        controls.start({ opacity: 1, y: 0 })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  return (
    <motion.section
      id="programs-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-full bg-white px-6 py-16 md:py-24 min-h-[80vh] flex flex-col justify-center"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-zinc-800">Programs</span> 
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 md:items-center">
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
              className="relative z-10 object-cover rounded-xl shadow-2xl transform -rotate-3 transition-transform duration-300 hover:rotate-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="md:space-y-8 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl text-zinc-800 font-semibold tracking-wide leading-tight">
              SBazar Association Program (SAP)
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Impact: Brings together community groups for cultural celebrations and learning, fostering a sense of belonging and cultural pride.
            </p>

            <Link href="/spoints" className="inline-block">
              <Button className="bg-[#BC1E3A] hover:bg-white hover:text-[#BC1E3A] text-white font-normal md:text-lg px-8 py-4 md:px-12 md:py-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-opacity-50 shadow-lg">
                Explore
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mt-8 md:mt-12"
        >
          <span className="text-gray-500 text-sm">Scroll for more</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-2"
          >
            ↓
          </motion.div>
        </motion.div> */}
      </div>
    </motion.section>
  )
}

export default ProgramsSection