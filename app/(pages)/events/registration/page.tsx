"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <div className="min-h-screen bg-white pb-16">
            {/* Form Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl p-5 shadow-custom">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-[#2C2C2C]">
                                    KinderCare Registration
                                </h1>
                                <p className="text-zinc-600 mt-1">
                                    Complete this form to register your child
                                </p>
                            </div>
                            <Link href="/events" passHref>
                                <Button variant="outline" className="text-primary border-primary">
                                    Back to Events
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Form iframe container with improved styling */}
                        <div className="relative w-full rounded-lg border border-gray-100 overflow-hidden">
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                                </div>
                            )}
                            
                            <div className="w-full md:h-[320vh] h-[280vh]" >
                                <iframe 
                                    src="https://database.snext.in/dashboard/#/nc/form/6eb81068-2ea2-4652-9533-c542401c10bf"
                                    width="100%"
                                    height="100%"
                                    style={{ 
                                        border: "none",
                                        display: isLoading ? "none" : "block",
                                        overflow: "hidden"
                                    }}
                                    title="KinderCare Registration Form"
                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-6 text-sm text-zinc-500">
                            <p>
                                <strong>Note:</strong> By submitting this form, you consent to our terms and conditions regarding child supervision.
                                For any issues, contact <a href="mailto:hello@snext.in" className="text-primary underline">hello@snext.app</a>.
                            </p>
                        </div>
                    </div>
                    
                    {/* Important Reminders */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-white rounded-xl p-5 shadow-custom mt-8"
                    >
                        <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">Important Reminders</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-3">⏰</span>
                                <div>
                                    <p className="font-medium text-zinc-800">Drop Off Time</p>
                                    <p className="text-zinc-600">30 minutes before the movie</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-3">🎒</span>
                                <div>
                                    <p className="font-medium text-zinc-800">What to Bring</p>
                                    <p className="text-zinc-600">Snacks, water, toy, and jacket</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-3">⏱️</span>
                                <div>
                                    <p className="font-medium text-zinc-800">Pick Up Time</p>
                                    <p className="text-zinc-600">Within 15 minutes after the show</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-3">👨‍👩‍👧‍👦</span>
                                <div>
                                    <p className="font-medium text-zinc-800">Limited Capacity</p>
                                    <p className="text-zinc-600">Only 10 children per show</p>
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