"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const ScrollIndicatorClient = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const maxScroll = documentHeight - windowHeight
      const percentage = (scrollPosition / maxScroll) * 100
      setScrollPercentage(percentage)

      if (percentage > 95) {
        controls.start({ opacity: 0, y: 20 })
      } else {
        controls.start({ opacity: 1, y: 0 })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  return (
    <motion.div
      className="fixed bottom-6 right-4 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-100 bg-opacity-80 backdrop-blur-sm rounded-full p-3 shadow-lg">
        <div className="relative w-12 h-12">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#BC1E3A"
              strokeWidth="10"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * scrollPercentage) / 100}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ScrollIndicatorClient