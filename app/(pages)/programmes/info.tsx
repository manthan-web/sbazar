import React from 'react'
import Image from 'next/image'

const ProgrammsInfo = () => {
  const content = [
    {
      value: "item-1",
      title: "Snext Association Program (SAP)",
      description: [
        "Brings together community groups for cultural celebrations and learning, fostering a sense of belonging and cultural pride."
      ]
    },
    {
      value: "item-2",
      title: "Snext Community Ambassadors Program (SCAP)",
      description: [
        "Empowers community leaders to represent and support their communities, facilitating engagement and mutual support."
      ]
    },
    {
      value: "item-3",
      title: "Snext Influencers Program (SIP)",
      description: [
        "Enables influencers to share meaningful content, enriching the community with cultural and lifestyle insights."
      ]
    },
    {
      value: "item-4",
      title: "Snext Partnership Program (SPP)",
      description: [
        "Creates opportunities for businesses and entrepreneurs to collaborate and grow, contributing to the ecosystem's diversity and innovation."
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
            src={"/programms.png"}
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

export default ProgrammsInfo