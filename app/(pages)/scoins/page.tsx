import React from 'react'
import HeadingSection from './heading-sec'
import { StickyScrollRevealDemo } from '@/components/scroll-reveal/demo'
import ScoinsSection from './scoins-section'
import SPointsSection from './spoints-section'
import FAQSection from '../ecommerce/grocery/faq-section'
import { scoinsFaqContent } from '@/faq-data'

const page = () => {
  return (
    <div className=" py-12 ">


      <HeadingSection />
      <ScoinsSection />
      <SPointsSection />
      <FAQSection title="Know About Scoins" faqItems={scoinsFaqContent} />



    </div>
  )
}

export default page