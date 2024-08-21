import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
  return (
    <section className='w-full mt-12 py-12 flex items-center flex-col'>
      <div className="mx-auto md:mb-12 mb-4 container grid md:grid-cols-2 gap-8 animate-in">


        <div className="text-left flex items-center space-y-6">

          <h2 className="text-4xl text-center md:text-left md:text-6xl font-bold text-zinc-900">
            Frequently asked questions
          </h2>


        </div>


        <div className="w-full animate-in flex items-center justify-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='text-lg md:text-xl'>Is it accessible?</AccordionTrigger>
              <AccordionContent className=''>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='text-lg md:text-xl'>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='text-lg md:text-xl'>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>


      </div>
    </section>
  )
}

export default FAQSection