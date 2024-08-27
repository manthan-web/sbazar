import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const SocialInfos = () => {
  const content = [
    {
      value: "item-1",
      title: "Dynamic Engagement",
      description: [
        "A platform for the Indian diaspora in Europe to share and celebrate their culture."
      ]
    },
    {
      value: "item-2",
      title: "Cultural Celebrations",
      description: [
        "Join virtual celebrations, bringing Indian festival vibrancy to Europe."
      ]
    },
    {
      value: "item-3",
      title: "Knowledge Exchange",
      description: [
        "Share recipes, traditions, and cultural insights, enriching community wisdom."
      ]
    },
    {
      value: "item-4",
      title: "Community Challenges",
      description: [
        "Participate in monthly creative contests, from cooking to storytelling, nurturing community spirit."
      ]
    },
    {
      value: "item-5",
      title: "Collaborative Projects",
      description: [
        "Support social good projects, embodying 'Connect' through collective action."
      ]
    }
  ]

  return (
    <section className="w-full max-w-full bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4">
            <span className="text-red-600">Sbazar Social</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide">
            Connect - Uniting through culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 flex h-full items-center md:space-y-8">
            <Accordion type="single" collapsible className="w-full">
              {content.map((info, index) => (
                <AccordionItem key={info.value} value={info.value}>
                  <AccordionTrigger className="font-semibold text-base md:text-lg lg:text-xl">{info.title}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm md:text-base lg:text-lg">
                    <ul className="list-disc pl-4 md:pl-5 space-y-2 md:space-y-3">
                      {info.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative  flex items-center justify-center mt-8 md:mt-0">
            <Image 
              src="/eye-image.png" 
              alt="Colorful eye representing cultural diversity" 
              width={400} 
              height={400} 
              className="object-contain w-full max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialInfos