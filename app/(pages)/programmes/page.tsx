import React from 'react'
import ProgrammsHeading from './heading'
import ProgrammsInfo from './info'
import FAQSection from '../ecommerce/grocery/faq-section'
import { programmsFaqContent } from '@/faq-data'

const page = () => {
  return (
    <div className='flex flex-col'>
      <ProgrammsHeading />
      <ProgrammsInfo />
      <FAQSection title="Programms FAQ's" faqItems={programmsFaqContent}/>
    </div>
  )
}

export default page