import Image from 'next/image'
import FirstSection from './first-section'
import SecondSection from './section-sec'
import AppReviewsSection from './third-sec'
import SaveFoodSection from './save-food'
import TrendsSection from './tabs-sec'
import FAQSection from './faq-section'
import { CardStackDemo } from '@/components/card-stack/demo'
import { groceryFaqContent } from '@/faq-data'

export default function page() {
    return (
        <div className="py-8">


            <FirstSection />
            <SecondSection />
            {/* <CardStackDemo /> */}
            <AppReviewsSection />
            <TrendsSection />
            <SaveFoodSection />
            <FAQSection title="FAQ's About Grocery" faqItems={groceryFaqContent} />
        
        </div>
    )
}

{/* <div className='flex flex-col'>
        <section className='flex-start flex py-12 w-full bg-green-200'>
            hi this is grocery module
        </section>
    </div> */}