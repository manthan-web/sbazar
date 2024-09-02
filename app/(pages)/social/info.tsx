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
            src={"/social-image.png"}
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

export default SocialInfos