import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  value: string;
  triggerTitle: string;
  content: string;
}

interface FAQSectionProps {
  title: string;
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, faqItems }) => {
  return (
    <section className='w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-24 px-12 '>
      <div className="flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight">
            {title}
          </h2>
        </div>

        <div className="w-full max-w-3xl bg-white shadow-sm rounded-lg border border-zinc-200">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className='text-base sm:text-lg font-medium px-6 py-4 hover:bg-zinc-50 transition-colors [&[data-state=open]]:text-zinc-900 [&[data-state=open]]:bg-zinc-50'>
                  {item.triggerTitle}
                </AccordionTrigger>
                <AccordionContent className='text-sm sm:text-base text-zinc-600 px-6 pb-4 pt-2'>
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQSection