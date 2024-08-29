import Image from 'next/image'
import React from 'react'

const WhoWeAreSection = () => {
  return (
    <div className='w-full relative bg-white'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'> {/* Constrain width and add padding */}
        <div className='aspect-[16/9] relative overflow-hidden'> {/* Maintain aspect ratio */}
          <Image 
            src="/who-we-are-image.png"
            alt="Who We Are"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'left center' // Align image to the left
            }}
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection