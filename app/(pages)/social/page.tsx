import React from 'react'
import SocialInfos from './info'
import SocialsModule from './socialHeading'
import FAQSection from '../ecommerce/grocery/faq-section'
import { socialsPageFaqContent } from '@/faq-data'

const page = () => {
  return (
    <div className='flex flex-col'>
      <SocialsModule />
      <SocialInfos />
      <FAQSection title="FAQ's" faqItems={socialsPageFaqContent}/>
    </div>
  )
}

export default page