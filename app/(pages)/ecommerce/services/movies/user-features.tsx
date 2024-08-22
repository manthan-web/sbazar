"use client"
import React from 'react'
import { motion } from 'framer-motion';


const UsersFeaturesSections: React.FC = () => {
    const specialFeatures = [
        {
            title: "Push and Email Notifications:",
            content: "Instant alerts for ticket confirmation and reminders before the show starts"
        },
        {
            title: "Engaging Content: ",
            content: "Access to detailed movie descriptions, trailers, and teasers"
        },
        {
            title: "Customized Search Filters:",
            content: "Tailored searches by language, genre, content advisory, and more!"
        },
        {
            title: "Social Sharing:",
            content: "Easily share show details with friends and family"
        },
        {
            title: "Venue Insights:",
            content: "Information on facilities, seating capacity, and variants (economy, VIP)!"
        },
        {
            title: "Seamless Booking:",
            content: "Book tickets for different dates and venues in one process"
        },
        {
            title: "Digital Ticket Access:",
            content: "Eliminates the need for printed tickets, supporting eco-friendliness"
        }
    ];

    return (

            <motion.div
                className="bg-gray-100 rounded-lg p-8 md:py-6 md:px-12 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 md:mb-8 mb-6">User Features</h3>
            

                <ul className="space-y-6 mb-8">
                    {specialFeatures.map((feature, index) => (
                        <motion.li
                            key={index}
                            className="flex flex-col space-y-1"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <span className="text-lg md:text-xl font-semibold text-[#BC1E3A]">{feature.title}</span>
                            <span className="text-base md:text-lg text-gray-700">{feature.content}</span>
                        </motion.li>
                    ))}
                </ul>


            </motion.div>
    );
};


export default UsersFeaturesSections;