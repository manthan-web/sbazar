import Image from 'next/image';
import React from 'react';

const TrendsSection = () => {


    return (
        <section className="w-full mt-24 py-6 rounded-[3rem] shadow-lg bg-[#EDEDED] flex items-center flex-col">

            <div className=' mb-6  text-center md:py-6 md:space-y-3'>

                <h2 className="text-4xl text-center md:text-6xl font-bold text-[#BC1E3A]">
                    SBazar <span className='text-zinc-900'>Trends</span>
                </h2>
                <p className="text-zinc-500 tracking-widest md:max-w-xl font-normal text-base md:text-xl">
                    Join SBazar in Reducing Food Waste                      </p>
            </div>
            <div className="mx-auto md:mb-12 mb-4 container grid md:grid-cols-2 gap-8 animate-in">

                <div className="text-left space-y-6">

                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg md:text-xl">Cultural Celebrations

                        </p>
                        <p className="text-zinc-500 font-normal text-lg md:text-xl">
                            Seasonal and regional flavors that honor traditions
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg md:text-xl">Wellness Focus

                        </p>
                        <p className="text-zinc-500 font-normal text-lg md:text-xl">
                            Traditional models don't incorporate sustainability efforts

                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg md:text-xl">
                            Eco-Friendly Picks


                        </p>
                        <p className="text-zinc-500 font-normal max-w-xl text-lg md:text-xl">
                            Sustainable products for conscious living                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg md:text-xl">
                            Exclusive Deals


                        </p>
                        <p className="text-zinc-500 font-normal text-lg md:text-xl">
                            Special offers on trending grocery items
                        </p>
                    </div>
                </div>

                <div className="w-full animate-random-move flex items-center justify-center">
                    <Image src="/iphone-mockup.svg" width={300} height={600} alt="App mockup" className="object-cover" />
                </div>
            </div>
        </section>

    )
}

export default TrendsSection