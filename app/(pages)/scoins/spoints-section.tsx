"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SPointsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About SPoints' },
    { id: 'awesome', label: 'Why Awesome' },
    { id: 'levels', label: 'Membership Levels' },
  ];

  const membershipLevels = [
    {
      level: "Silver",
      icon: "🥈",
      perks: "Access to MSD products, flat checkout discounts, and special Silver deals."
    },
    {
      level: "Gold",
      icon: "🥇",
      perks: "All Silver perks, plus higher discounts and exclusive Gold deals."
    },
    {
      level: "Platinum",
      icon: "💎",
      perks: "Highest discounts, first access to limited editions, and Platinum-only events."
    }
  ];

  return (
    <div className="bg-zinc-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 md:p-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-2 text-center">
              <span className="text-red-600">S</span>Points
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">The Gateway To Premium Membership</p>
            
            <div className="flex justify-center mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 mx-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 mb-8"
            >
              {activeTab === 'about' && (
                <p className="text-gray-700">
                  SPoints are your ticket to exclusive benefits and rewards. Unlike SCoins, which can be spent, 
                  SPoints accumulate with every purchase, determining your membership status. The more you shop, 
                  the higher your tier - Silver, Gold, or Platinum - unlocking increasingly premium perks.
                </p>
              )}
              {activeTab === 'awesome' && (
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-4">🎁</span>
                    <span><strong>Unlock Discounts:</strong> Enjoy special discounts based on your membership level.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-4">🌟</span>
                    <span><strong>Exclusive Deals:</strong> Access unique offers tailored to your membership tier.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-4">🔄</span>
                    <span><strong>Never Expires:</strong> Your SPoints keep accumulating, continually elevating your status.</span>
                  </li>
                </ul>
              )}
              {activeTab === 'levels' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {membershipLevels.map((level, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-2xl font-bold mb-2 flex items-center">
                        <span className="mr-2">{level.icon}</span> {level.level}
                      </h3>
                      <p className="text-gray-600">{level.perks}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
            
            <div className="text-center">
              <motion.button
                className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Earning SPoints Now!
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SPointsSection;