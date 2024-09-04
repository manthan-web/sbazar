"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface InfoItem {
  label: string;
  content: string;
}

interface InfoCardProps {
  title: string;
  items: InfoItem[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items }) => (
  <motion.div 
    className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-md hover:cursor-pointer hover:shadow-xl"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="font-bold text-2xl text-[#BC1E3A] mb-4">{title}</h3>
    {items.map((item, index) => (
      <p key={index} className="text-zinc-700 font-normal text-base">
        <span className="font-semibold text-zinc-900">{item.label}</span> {item.content}
      </p>
    ))}
  </motion.div>
);

export const SCoinsSpecialSection: React.FC = () => {
  const specialFeatures = [
    {
      title: "Stored Separately:",
      content: "While both (SCoins and SPoints) are earned from your purchases, they are stored in two different fields in your account."
    },
    {
      title: "Serve Different Purposes:",
      content: "While SCoins are your go-to for immediate savings, SPoints are your long-term investment in a more rewarding SBazar experience."
    },
    {
      title: "The Future of SCoins:",
      content: "We're gearing up to take SCoins to the next level. Soon, you'll be able to use them for more than just redeeming products—think special events, exclusive content, and more personalized rewards. Stay tuned!"
    }
  ];

  return (
    <motion.div 
      className="bg-gray-100 rounded-lg p-8 md:p-12 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">WHAT MAKES THIS?</h3>
      <div className="flex items-center mb-6">
        <span className="text-5xl md:text-6xl font-bold text-red-600">S</span>
        <span className="text-5xl md:text-6xl font-bold text-gray-800">COINS</span>
      </div>
      <h4 className="text-xl md:text-2xl font-semibold text-red-600 mb-8">SPECIAL</h4>
      
      <ul className="space-y-6 mb-8">
        {specialFeatures.map((feature, index) => (
          <motion.li 
            key={index}
            className="flex flex-col space-y-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <span className="text-lg md:text-xl font-semibold text-red-600">{feature.title}</span>
            <span className="text-base md:text-lg text-gray-700">{feature.content}</span>
          </motion.li>
        ))}
      </ul>
      
     
    </motion.div>
  );
};

const SCoinsSectionComplete: React.FC = () => {
  const infoCards: InfoCardProps[] = [
    {
      title: "Why You'll Love SCoins",
      items: [
        { label: "Redeem for Products:", content: "Use your SCoins to grab items from our exclusive 'Redeem' section." },
        { label: "Real Value:", content: "1000 SCoins are worth €100, providing tangible value for your loyalty." },
        { label: "Validity:", content: "SCoins come with a one-year validity, perfect for seasonal or festival shopping!" }
      ]
    },
    {
      title: "How to Collect More SCoins?",
      items: [
        { label: "Shop, Shop, Shop:", content: "The simplest way to earn more SCoins is to continue shopping with us." },
        { label: "Refer And Earn:", content: "Share the joy by referring friends to SBazar and get a bonus 10% of their earned SCoins." }
      ]
    },
  ];

  return (
    <div className="bg-gray-50 py-12 md:mt-32 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#BC1E3A]">S</span>Coins
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          SCoins are SBazars very own digital currency, designed to make your shopping experience even more rewarding. Every time you make a purchase, we round up the value to the nearest whole number and gift you those SCoins. For example, a €100 purchase will earn you approximately 100 SCoins.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {infoCards.map((card, index) => (
            <InfoCard key={index} title={card.title} items={card.items} />
          ))}
        </div>

        <SCoinsSpecialSection />
      </div>
    </div>
  );
};

export default SCoinsSectionComplete;