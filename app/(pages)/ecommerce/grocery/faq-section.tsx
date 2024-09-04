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
    <section className='w-full max-w-7xl mx-auto mt-12 py-12 flex items-center flex-col'>
      <div className="mx-auto md:mb-12 mb-4 container grid md:grid-cols-2 gap-8 animate-in">


        <div className="text-left flex items-center space-y-6">

          <h2 className="text-4xl text-center mx-auto md:text-left md:text-8xl font-bold text-zinc-900">
          FAQs
          </h2>


        </div>


        <div className="w-full animate-in border border-zinc-300 px-10 py-6 rounded-xl flex items-center justify-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='text-lg md:text-xl [&[data-state=open]]:text-zinc-400'>Is it accessible?</AccordionTrigger>
              <AccordionContent className='text-[1rem]'>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='text-lg md:text-xl [&[data-state=open]]:text-zinc-400'>Is it styled?</AccordionTrigger>
              <AccordionContent className='text-[1rem]'>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='text-lg md:text-xl [&[data-state=open]]:text-zinc-500'>Is it animated?</AccordionTrigger>
              <AccordionContent className='text-[1rem]'>
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