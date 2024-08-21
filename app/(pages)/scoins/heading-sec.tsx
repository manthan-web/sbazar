import React from 'react'

const HeadingSection = () => {
    return (
        <section className="text-center px-6 md:pb-24 py-12 md:px-0 mb-8 md:mb-12 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-800 md:mb-2 mb-1">
                <span className='text-[#BC1E3A]'>S</span>Coins &  <span className='text-[#BC1E3A]'>S</span>Points
            </h2>
            <p className='text-zinc-600 max-w-full md:max-w-4xl font-semibold text-lg md:text-xl'>Double the Rewards, Double the Joy!</p>

            <p className="text-zinc-500 mt-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
                We believe in rewarding our customers in more ways than one. That's why we have two rewarding systems: <span className='text-zinc-900 font-medium'>SCoins</span> and <span className='text-zinc-900 font-medium'>SPoints</span>, each stored in different fields but both incredibly rewarding!            
            </p>
        </section>
    )
}

export default HeadingSection