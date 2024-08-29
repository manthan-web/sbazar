import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const ProgramsSection = () => {
  return (
    <div className='w-full bg-white md:mt-14 py-12'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
        {/* Right side - Image */}
        <div className="w-full flex items-center justify-center md:w-1/2  mb-8 md:mb-0">
          <Image
            src="/programms.png"
            alt='Programs'
            width={400}
            height={400}
            className='object-cover'
          />
        </div>

        {/* Left side - Content */}
        <div className="w-full md:w-1/2 px-4 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">
            <span className='text-[#BC1E3A]'>P</span>rograms
          </h2>
          <p className="text-xl font-semibold">
            Shazar Association Program (SAP)
          </p>
          <p className="text-gray-600 md:max-w-md md:text-xl text-lg">
            Impact: Brings together community groups for cultural celebrations and learning, fostering a sense of belonging.
          </p>
          <Link
            href={"/programs"}
            className="inline-block"
          >
            <Button className="bg-[#BC1E3A] hover:bg-[#9A1730] text-white font-medium text-lg md:text-xl px-8 py-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-opacity-50">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProgramsSection