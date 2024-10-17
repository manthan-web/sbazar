"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const sections = [
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Bringing the Indian diaspora in Europe closer to their heritage through curated products.',
    image: "/pot-image.jpg"
  },
  {
    id: 'social',
    title: 'Social',
    description: 'Connecting the Indian diaspora in Europe through community events and social networking.',
    image: "/social-image.png"
  },
  {
    id: 'business',
    title: 'Business',
    description: 'Exploring additional services and opportunities for the Indian diaspora in Europe.',
    image: "/business-img.png"
  }
]

export default function ImprovedThreeSections() {
  const [expandedSection, setExpandedSection] = useState('social')

  return (
    <div className="flex flex-col mb-28 overflow-x-hidden md:px-0 md:flex-row gap-4 max-w-7xl mx-auto px-12 rounded-lg p-4 md:h-[400px] overflow-hidden">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
            ${expandedSection === section.id 
              ? 'md:w-[70%] h-auto md:h-full' 
              : 'md:w-[15%] h-16 md:h-full'
            }`}
          layout
          transition={{
            layout: { duration: 0.3, type: "spring", stiffness: 100, damping: 20 }
          }}
          onClick={() => setExpandedSection(section.id)}
        >
          <motion.div
            className="h-full relative"
            initial={false}
            animate={{
              width: "100%"
            }}
            transition={{
              width: { duration: 0.3, type: "spring", stiffness: 100, damping: 20 }
            }}
          >
            <AnimatePresence mode="wait">
              {expandedSection === section.id ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="flex flex-col md:flex-row w-full h-full"
                >
                  <div className='p-6 flex flex-col justify-between md:w-1/2 h-full'>
                    <div>
                      <h2 className="md:text-4xl font-bold mb-4 text-xl text-[#BC1E3A]">{section.title}</h2>
                      <p className="text-sm mb-6 text-gray-600 leading-relaxed">{section.description}</p>
                    </div>
                    <button className="bg-[#BC1E3A] text-white px-6 py-2 rounded-full self-start hover:bg-red-600 transition-colors duration-200">
                      Explore
                    </button> 
                  </div>
                  <div className="md:w-1/2 h-48 md:block hidden md:h-full relative overflow-hidden">
                    <Image
                      alt={`${section.title} illustration`}
                      src={section.image}
                      layout="fill"
                      objectFit="cover"
                      className="object-center"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full w-full flex items-center justify-center"
                >
                  <span className="text-lg font-bold text-[#BC1E3A] whitespace-nowrap md:rotate-90 md:transform md:origin-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    {section.title}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}