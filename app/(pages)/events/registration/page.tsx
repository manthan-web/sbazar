"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const FormRegistration = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Simulate iframe loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 px-12 py-8">
            {/* Form Container */}
            <div className="container mx-auto px-2 sm:px-4 lg:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl shadow-md mb-6">
                        {/* Form container with natural scrolling */}
                        <div className="relative w-full rounded-lg overflow-hidden bg-white">
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                                </div>
                            )}
                            
                            <div className="w-full h-[800px] md:h-[900px]">
                                <iframe 
                                    src="https://database.snext.in/dashboard/#/nc/form/6eb81068-2ea2-4652-9533-c542401c10bf"
                                    width="100%"
                                    height="100%"
                                    style={{ 
                                        border: "none",
                                        display: isLoading ? "none" : "block",
                                        overflow: "visible",
                                    }}
                                    title="KinderCare Registration Form"
                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Important Reminders */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-white rounded-xl p-4 md:p-6 shadow-md"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Reminders</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary flex-shrink-0">⏰</span>
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">Drop Off Time</p>
                                    <p className="text-gray-600 text-sm">30 minutes before the movie</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary flex-shrink-0">🎒</span>
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">What to Bring</p>
                                    <p className="text-gray-600 text-sm">Snacks, water, toy, and jacket</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary flex-shrink-0">⏱️</span>
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">Pick Up Time</p>
                                    <p className="text-gray-600 text-sm">Within 15 minutes after the show</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary flex-shrink-0">👨‍👩‍👧‍👦</span>
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">Limited Capacity</p>
                                    <p className="text-gray-600 text-sm">Only 10 children per show</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FormRegistration;