import React from 'react'
import ExistingIssuesSection from './issues-section'
import SolutionsSection from './solutions-section'
import UsersFeaturesSections from './user-features'
import DistributerSection from './distributer-sec'
import LastSections from './last-section'
import FAQSection from '../../grocery/faq-section'

const page = () => {
    return (
        <main className='flex flex-col container w-full max-w-full'>

            <div className='py-6 md:py-12 mx-auto w-full space-y-5 text-center'>


                <div className='md:space-y-3'>
                    <h1 className='md:text-5xl  text-3xl font-bold'>Lights🚦Camera🎥 Action🕺</h1>
                    <h1 className='md:text-5xl text-3xl font-bold'><span className='text-[#BC1E3A]'>SBazar</span> Movie Module</h1>
                </div>

                <div className='mx-auto'>


                    <p className='text-center font-medium md:text-xl'>Dear Family,</p>
                    <p className="text-zinc-500 mx-auto text-left mt-2 md:mt-4 mb-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
                        Excitement is in the air as we roll out the red carpet for our Movie Module, your ticket to the rich tapestry of Indian cinema right here in Germany. This module is our ode to the stories, emotions, and cultural heritage that movies bring into our lives.
                    </p>

                    <p className="text-zinc-500 mx-auto text-left mt-2 md:mt-4 mb-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
                        With the Movie Module, we aim to simplify your cinematic journey, making it easier than ever to access and enjoy your favorite films. And with every ticket purchased, our Green Ticket initiative ensures we're also giving back to the planet.
                    </p>


                    <p className="text-zinc-500 mx-auto text-left mt-2 md:mt-4 mb-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
                        Join us in this cinematic adventure, where every screening strengthens our community and celebrates our shared culture.
                    </p>

                  

                    <p className='text-center font-semibold md:mt-4 mt-4 md:text-xl'>The SBazar Team</p>

                    <p className="text-zinc-500 mx-auto text-center md:mt-1 mb-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
                        P.S. Stay tuned for more features that will make your movie nights even more magical.                   
                    </p>





                </div>



            </div>


            <ExistingIssuesSection />
            <SolutionsSection />

            <DistributerSection />
            <LastSections />
            <FAQSection />

        </main>
    )
}

export default page