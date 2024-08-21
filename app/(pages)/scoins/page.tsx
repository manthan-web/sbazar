import React from 'react'
import HeadingSection from './heading-sec'
import { StickyScrollRevealDemo } from '@/components/scroll-reveal/demo'
import ScoinsSection from './scoins-section'
import SPointsSection from './spoints-section'

const page = () => {
  return (
    <div className=" py-12 ">


      <HeadingSection />
      <ScoinsSection />
      <SPointsSection />



    </div>
  )
}

export default page