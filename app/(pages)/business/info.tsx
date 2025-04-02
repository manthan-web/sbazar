import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const BusinessInfo = () => {
  const content = [
    {
      value: "item-1",
      title: "Open for All",
      description: [
        "Monetize hobbies, start a shop, reach locals and sustainable delivery goals."
      ]
    },
    {
      value: "item-2",
      title: "Fair and Ethical",
      description: [
        "Prioritizing fair trade and value alignment for a marketplace of integrity."
      ]
    },
    {
      value: "item-3",
      title: "Comprehensive Support",
      description: [
        "Supporting entrepreneurs with guidance and tools from setup to growth."
      ]
    },
    {
      value: "item-4",
      title: "Diverse Opportunities",
      description: [
        "A platform for all businesses, celebrating every entrepreneur's journey."
      ]
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 flex items-start">
      <div className="mx-auto  max-w-7xl container grid md:grid-cols-2 gap-8 animate-in">
        <div className="text-left space-y-6">

          {content.map((info) => {
            return (

              <div key={info.value} className="flex flex-col gap-2">
                <p className="font-bold text-lg md:text-xl">{info.title}</p>
                <p className="text-zinc-500 font-normal text-lg md:text-xl">
                  {info.description}
                </p>
              </div>
            )
          })}


        </div>

        <div className="w-full flex h-full">
          {/* <Video src={"/videos/pot-video.mp4"} loop= /> */}
          <Image
            src={"/business-img.png"}
            alt='social image'
            height={500}
            width={500}
            className='object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default BusinessInfo