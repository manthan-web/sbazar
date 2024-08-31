import React from 'react'
import Image from 'next/image'

const Card = ({ i, title, description, src, link, color }: { i: number, title: string, description: string, src: string, link: string, color: string }) => {


    return (
        <div className="h-[100vh] flex items-center justify-center sticky md:top-16 top-14">

            <div
                className="card flex flex-col min-h-[35rem] py-6 md:py-8 relative rounded-lg max-w-screen-lg mx-auto"
                style={{ backgroundColor: color, top: `calc(-5% + ${i * 25}px)` }}
            >
                <div className='mx-auto mb-8 text-center'>

                    <h2 className="text-4xl md:text-5xl mx-auto font-bold mb-4">
                        {title}
                    </h2>
                    <p className="text-zinc-500 mb-4 tracking-widest mx-auto md:max-w-xl font-normal text-base md:text-xl">
                        SINGLE PRODUCTS DEALS
                    </p>

                </div>


                {/* Left - Right layout div */}
                <div className="mx-auto container flex flex-col md:flex-row gap-8 px-4 md:px-8">
                    <div className="text-left md:w-1/2 space-y-6">
                        <div className="flex flex-col gap-1">
                            <p className="font-bold md:text-[1.2rem] text-[1rem]">Weekly  Curation
                            </p>
                            <p className="text-zinc-500 font-normal text-sm md:text-xl">
                                Handpicked items offered at special prices for a whole week
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold md:text-[1.2rem] text-[1rem]">Diverse Selections
                            </p>
                            <p className="text-zinc-500 font-normal text-sm md:text-xl">
                                Monetize hobbies: Start a shop, reach locals with customizable
                                delivery zones.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold md:text-[1.2rem] text-[1rem]">Open For All</p>
                            <p className="text-zinc-500 font-normal text-sm md:text-xl">
                                Monetize hobbies: Start a shop, reach locals with customizable
                                delivery zones.
                            </p>
                        </div>

                    </div>

                    <div className="md:w-1/2 hidden md:flex items-center justify-center">
                        <Image
                            src="/ask-aditi.png"
                            alt="Descriptive alt text"
                            className=" object-cover bg-gray-200 rounded-lg shadow-lg"
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card