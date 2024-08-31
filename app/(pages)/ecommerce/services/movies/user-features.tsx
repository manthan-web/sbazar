"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bell, Film, Filter, Share2, MapPin, Calendar, Ticket } from "lucide-react";

interface Feature {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const UsersFeaturesSections: React.FC = () => {
  const features: Feature[] = [
    { title: "Push Notifications", content: "Instant alerts for tickets", icon: <Bell className="w-6 h-6 text-blue-500" /> },
    { title: "Engaging Content", content: "Movie trailers and teasers", icon: <Film className="w-6 h-6 text-red-500" /> },
    { title: "Custom Filters", content: "Search by genre and more", icon: <Filter className="w-6 h-6 text-green-500" /> },
    { title: "Social Sharing", content: "Share with friends easily", icon: <Share2 className="w-6 h-6 text-purple-500" /> },
    { title: "Venue Insights", content: "Detailed facility information", icon: <MapPin className="w-6 h-6 text-yellow-500" /> },
    { title: "Seamless Booking", content: "Book for multiple dates", icon: <Calendar className="w-6 h-6 text-indigo-500" /> },
    { title: "Digital Tickets", content: "Eco-friendly access", icon: <Ticket className="w-6 h-6 text-teal-500" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">User Features</h2>
      <div className="relative w-full h-[800px] flex flex-wrap justify-center items-center gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UsersFeaturesSections;