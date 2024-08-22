import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const DistributerSection = () => {

  const content = [
    {
      value: "item-1",
      title: "Efficient Promotion",
      description: "Utilizes SBazar's platform for direct movie marketing to a wider audience"
    },
    {
      value: "item-2",
      title: "Streamlined Ticket Verification",
      description: "Introduces QR code scanning for hassle-free entry, simplifying the process for theaters"
    },
    {
      value: "item-3",
      title: "Operational Efficiency",
      description: "Reduces the burden of manual seat allocation and cash handling"
    },
    {
      value: "item-4",
      title: "Enhanced Visibility",
      description: "Movies receive broader exposure beyond targeted language groups, increasing potential viewership"
    },
    {
      value: "item-5",
      title: "User Engagement Tools",
      description: "Future updates will include features for distributors to create contests and interactive tasks, driving engagement and attendance"
    },
    {
      value: "item-6",
      title: "Revenue Optimization",
      description: "Aims to increase theater occupancy and distributor earnings by making movies more accessible and affordable"
    },
  ]

  return (
    <section className="w-full max-w-full bg-gray-50 mt-6 md:mt-16 md:py-20 py-12 flex items-start">
      <div className="mx-auto max-w-7xl container grid md:grid-cols-2 gap-8 animate-in">
        <div className="text-left space-y-6 ">
          <h1 className='md:text-5xl mb-7 text-3xl font-bold'><span className='text-[#BC1E3A]'>Distributor</span> And Theater Enhancements</h1>

          <Accordion type="single" collapsible className="w-full">
            {content.map((info, index) => (
              <AccordionItem key={info.value} value={info.value}>
                <AccordionTrigger className='font-semibold text-base md:text-lg'>{info.title}</AccordionTrigger>
                <AccordionContent className='text-zinc-500 font-normal text-base md:text-lg'>
                  {info.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden">
          <Image src={'/glasses.png'} alt='' height={600} width={600} className='absolute mx-auto' />
        </div>
      </div>
    </section>
  )
}

export default DistributerSection
