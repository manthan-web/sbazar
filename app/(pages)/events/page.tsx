"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Events = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full bg-gradient-to-b from-[#f8f8f8] to-white py-20 md:py-28"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        <motion.h1 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-4"
                        >
                            🎮 Couple Cinema + KinderCare
                        </motion.h1>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl text-zinc-600 mb-8"
                        >
                            An initiative by Snext | Bringing Happiness
                        </motion.p>
                    </div>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Why This Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6 flex items-center">
                            <span className="text-2xl mr-2">💡</span> Why This?
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-custom">
                            <p className="text-lg text-zinc-700 leading-relaxed">
                                Life in Germany is busy. Indian parents rarely get time to sit together, 
                                hold hands, and just breathe. With kids around 24/7, even a simple movie feels impossible.
                            </p>
                            <p className="text-lg text-zinc-700 leading-relaxed mt-4">
                                We're changing that—with heart. ❤️
                            </p>
                            <p className="text-lg text-zinc-700 leading-relaxed mt-4 font-medium">
                                Introducing KinderCare by Snext:
                                A support initiative that lets you enjoy a movie together, while your child is cared for just a few steps away.
                            </p>
                        </div>
                    </motion.section>

                    {/* How It Works Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6 flex items-center">
                            <span className="text-2xl mr-2">🛠️</span> How It Works
                        </h2>
                        <div className="space-y-6">
                            {/* Book Your Tickets */}
                            <div className="bg-white rounded-xl p-6 shadow-custom">
                                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">Book Your Tickets</h3>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">1</span>
                                        <p className="text-zinc-700">Choose the Saturday or Sunday 1:00 PM show at Astor Film Lounge, Cologne</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">2</span>
                                        <p className="text-zinc-700">Select couple seats via Snext</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">3</span>
                                        <p className="text-zinc-700">Register for KinderCare (1 Flat, 10 Kids Only)</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">4</span>
                                        <p className="text-zinc-700">Fill the form below with your child's info</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">5</span>
                                        <p className="text-zinc-700">Slots are first-come, first-serve</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">6</span>
                                        <p className="text-zinc-700">Once full, form will close automatically</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Drop Off at Kinder Flat */}
                            <div className="bg-white rounded-xl p-6 shadow-custom">
                                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">Drop Off at Kinder Flat</h3>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">1</span>
                                        <p className="text-zinc-700">Location: Private flat just 3 buildings from the theatre</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">2</span>
                                        <p className="text-zinc-700">Time: Drop your child 30 minutes before the movie starts</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">3</span>
                                        <p className="text-zinc-700">Supervision: One trusted Indian caretaker (a local mom, Telugu/Kannada speaking)</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Enjoy the Show */}
                            <div className="bg-white rounded-xl p-6 shadow-custom">
                                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">Enjoy the Show</h3>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">1</span>
                                        <p className="text-zinc-700">Spend 3 hours of real "us-time" 💛</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">2</span>
                                        <p className="text-zinc-700">Optional WhatsApp video check-in available if needed</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Pick Up Post-Movie */}
                            <div className="bg-white rounded-xl p-6 shadow-custom">
                                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">Pick Up Post-Movie</h3>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">1</span>
                                        <p className="text-zinc-700">Collect your child within 15 minutes after the show ends</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block h-5 w-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">2</span>
                                        <p className="text-zinc-700">We'll make sure they're safe, fed, and happy</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Who Can Join Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6 flex items-center">
                            <span className="text-2xl mr-2">🧒</span> Who Can Join?
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-custom">
                            <ul className="space-y-3 ml-6">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">Ages 3 to 12 years</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">Must be toilet-trained (no diaper use)</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">Calm, quiet play time—drawing, games, storytelling</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">No screens, no outdoor play</p>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* What You Must Bring Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6 flex items-center">
                            <span className="text-2xl mr-2">🛆</span> What You Must Bring
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-custom">
                            <ul className="space-y-3 ml-6">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">🍱 Snack / small lunch</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">💧 Water bottle</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">🥘 Toy or storybook</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">🪥 Jacket or sweater</p>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Safety & Trust Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6 flex items-center">
                            <span className="text-2xl mr-2">🔐</span> Safety & Trust
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-custom">
                            <ul className="space-y-3 ml-6">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">This is not a professional daycare—it's community support</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">Parents must sign a digital consent form during registration</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">All activity takes place in a secure, familiar environment</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">Optional: Live WhatsApp video check-in (only if requested, no recording)</p>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Limited Spots Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6 flex items-center">
                            <span className="text-2xl mr-2">⚠️</span> Very Limited Spots
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-custom">
                            <ul className="space-y-3 ml-6">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">Only 10 children accepted per show</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">Once filled, registration closes automatically</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <p className="text-zinc-700">This is a free support service (no payment needed)</p>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Message from Snext Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6 flex items-center">
                            <span className="text-2xl mr-2">🙏</span> A Message from Snext
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-custom">
                            <blockquote className="italic text-lg text-zinc-700 border-l-4 border-primary pl-4">
                                "Bringing happiness isn't just about watching a movie.
                                It's about giving you the space to reconnect—with your partner, your smile, and your peace of mind." 💛
                            </blockquote>
                        </div>
                    </motion.section>

                    {/* Registration Form Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6 flex items-center">
                            <span className="text-2xl mr-2">📄</span> Ready to Join?
                        </h2>
                        <div className="text-center mb-6">
                            <p className="text-lg text-zinc-700 mb-8">
                                👉 Book your seats. Register your child. And take back your together-time.
                            </p>
                            <Link href="/events/registration" passHref>
                                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-xl">
                                    Register for KinderCare
                                </Button>
                            </Link>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default Events;