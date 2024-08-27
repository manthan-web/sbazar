import React from 'react'
import ExistingIssuesSection from './issues-section'
import SolutionsSection from './solutions-section'
import UsersFeaturesSections from './user-features'
import DistributerSection from './distributer-sec'
import LastSections from './last-section'
import FAQSection from '../../grocery/faq-section'

const MoviePage = () => {
  return (
    <main className='flex flex-col w-full'>
      <section className='py-8 md:py-24 bg-gradient-to-r from-gray-100 to-gray-200'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-8 md:mb-12'>
            <h1 className='text-3xl md:text-6xl font-bold mb-2 md:mb-4'>
              <span className='text-[#BC1E3A]'>SBazar</span> Movie Module
            </h1>
            <p className='text-lg md:text-2xl text-gray-600'>Lights🚦Camera🎥 Action🕺</p>
          </div>

          <div className='max-w-3xl mx-auto'>
            <p className='text-center font-medium text-lg md:text-xl mb-4 md:mb-6'>Dear Family,</p>
            <div className='space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base'>
              <p>
                Excitement is in the air as we roll out the red carpet for our Movie Module, your ticket to the rich tapestry of Indian cinema right here in Germany. This module is our ode to the stories, emotions, and cultural heritage that movies bring into our lives.
              </p>
              <p>
                With the Movie Module, we aim to simplify your cinematic journey, making it easier than ever to access and enjoy your favorite films. And with every ticket purchased, our Green Ticket initiative ensures we're also giving back to the planet.
              </p>
              <p>
                Join us in this cinematic adventure, where every screening strengthens our community and celebrates our shared culture.
              </p>
            </div>
            <div className='mt-6 md:mt-8 text-center'>
              <p className='font-semibold text-lg md:text-xl mb-2'>The SBazar Team</p>
              <p className='text-gray-600 italic text-sm md:text-base'>
                P.S. Stay tuned for more features that will make your movie nights even more magical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExistingIssuesSection />
      <SolutionsSection />
      <DistributerSection />
      <LastSections />
      <FAQSection />
    </main>
  )
}

export default MoviePage