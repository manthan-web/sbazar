import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const SCoinsSection = () => {
  return (
    <div className='w-full bg-white py-12'>
      <div className='max-w-6xl mx-auto   flex flex-col md:flex-row items-center justify-between'>
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/scoins-image.png"
            alt='SCoins'
            width={500}
            height={500}
            className='object-contain'
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 px-4 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#BC1E3A]">S</span>Coins
          </h2>
          <p className="text-xl font-semibold">
            DOUBLE THE REWARDS, DOUBLE THE JOY!
          </p>
          <p className="text-gray-600 md:text-xl text-lg">
            We believe in rewarding our customers in more ways than one. That's why we have two rewarding systems: SCoins and SPoints, each stored in different fields but both incredibly rewarding!
          </p>
          <Link
            href={"/scoins"}
            className="inline-block"
          >
            <Button className="bg-[#BC1E3A] hover:bg-[#9A1730] text-white font-medium text-lg md:text-xl  px-8 py-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-opacity-50">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SCoinsSection