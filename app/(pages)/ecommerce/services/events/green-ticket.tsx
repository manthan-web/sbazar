import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const GreenTicketSection = () => {
  const content = [
    {
      value: "item-1",
      title: "For Our Planet",
      description: [
        "Every Ticket Plants a Tree: With each event or movie ticket purchased, you contribute to afforestation efforts, directly linking entertainment with environmental sustainability.",
        "Track Your Impact: Access a dashboard to see the real-time effect of your contributions, including the number of trees planted and areas reforested, making every purchase a step towards a greener future."
      ]
    },
    {
      value: "item-2",
      title: "For Our Community",
      description: [
        "Join the Movement: Be part of a community dedicated to making a difference, where your entertainment choices lead to positive environmental action.",
        "Celebrate Sustainability: Engage in events and initiatives that not only entertain but also educate and inspire towards a sustainable lifestyle."
      ]
    },
    {
        value: "item-3",
        title: "For Event Organizers",
        description: [
          "Promote Eco-Friendly Events: Highlight your commitment to the environment by associating your events with the Green Ticket initiative.",
          "Engage a Like-Minded Audience: Attract attendees who are passionate about sustainability and willing to support events that contribute to environmental causes."
        ]
      }
  ]

  return (
    <section className="w-full max-w-full bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gray-300">The</span> <span className="text-green-600">Green Ticket</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
            Simplifying Sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Green Ticket initiative transforms your entertainment choices into environmental action. 
              By linking ticket purchases to tree planting, we're creating a community-driven approach to 
              sustainability. Every ticket is a step towards a greener future, making environmental 
              responsibility an integral part of your event experience.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {content.map((info, index) => (
                <AccordionItem key={info.value} value={info.value}>
                  <AccordionTrigger className="font-semibold text-lg md:text-xl">{info.title}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base md:text-lg">
                    <ul className="list-disc pl-5 space-y-3">
                      {info.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative flex items-center justify-center">
            <Image 
              src="/grocery.png" 
              alt="Green leaf symbolizing sustainability" 
              width={500} 
              height={500} 
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreenTicketSection