import React from 'react'
import IssueFacedSection from './issue-faced'
import Solutions from './solutions'
import AnimatedTabsSection from './animated-tabs'
import GreenTicketSection from './green-ticket'
import FAQSection from '../../grocery/faq-section'
import { eventPageFaqContent } from '@/faq-data'

const Page = () => {
  return (
    <main className='flex flex-col w-full'>
      <section className='py-16 px-6'>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='text-center mb-12 md:mb-16'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gray-800'>
              <span className='text-[#BC1E3A]'>Events</span> Module
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 font-light'>Where Every Event Matters</p>
          </div>

          <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12'>
            <p className='text-center font-semibold text-xl md:text-2xl mb-6 text-gray-800'>Dear Sbazar Family,</p>
            <div className='space-y-6 text-gray-700 text-base md:text-lg leading-relaxed'>
              <p>
                Were excited to launch our Events Module, a blend of Commercial and Non-Profit gatherings, each designed to enrich, entertain, and empower our community.
              </p>
              <p>
                Commercial Events bring you the best of cultural and entertainment experiences, offering a window to our heritage and traditions.
              </p>
              <p>
                Non-profit events, at the heart of our mission, focus on community service and cultural exchange, fueling our spirit of giving back without any commercial intent.
              </p>
              <p>
                Together, they represent our dual commitment to celebration and service. Your participation in commercial events supports our non-profit initiatives, weaving a tapestry of community, culture, and connection.
              </p>
              <p>
                Join us in this new chapter, where every event contributes to a larger cause, and your engagement makes a difference.
              </p>
            </div>
            <div className='mt-8 text-center'>
              <p className='font-bold text-xl md:text-2xl text-gray-800'>The SBazar Team</p>
            </div>
          </div>
        </div>
      </section>

      <IssueFacedSection />
      <Solutions />
      <AnimatedTabsSection />
      <GreenTicketSection />
      {/* <ComingUpSection /> */}
      <FAQSection title='Know About Events' faqItems={eventPageFaqContent} />
    </main>
  )
}

export default Page