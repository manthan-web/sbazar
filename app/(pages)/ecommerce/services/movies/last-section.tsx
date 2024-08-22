// pages/index.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Leaf, Users, Film, LucideIcon } from 'lucide-react';

interface Features {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center mb-2">
      <Icon className="w-6 h-6 text-[#BC1E3A] mr-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default function LastSections() {
  const features: Features[] = [
    {
      icon: Leaf,
      title: "Environmental Contribution",
      description: "Each ticket sale contributes to tree planting efforts, linking entertainment with sustainability"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Encourages participation in environmental efforts, fostering a sense of collective responsibility"
    },
    {
      icon: Film,
      title: "Sustainability Awareness",
      description: "Raises awareness about environmental issues through the cinematic experience"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="flex flex-col max-w-7xl mx-auto px-4 lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className='md:text-5xl mb-7 text-3xl font-bold'>The <span className='text-green-500'>Green</span> Tickets Initiative</h1>
          <p className="text-zinc-500 mx-auto text-left mt-2 md:mt-4 mb-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
            Excitement is in the air as we roll out the red carpet for our Movie Module, your ticket to the rich tapestry of Indian cinema right here in Germany. This module is our ode to the stories, emotions, and cultural heritage that movies bring into our lives.
          </p>
          <Button className="rounded-sm mt-4 max-w-xs bg-green-500 text-lg py-6 px-11">
            Join Now
          </Button>

          {/* Statistics */}

        </div>

        {/* Right Section (Image) */}
        <div className="lg:w-1/2">
          <Image
            src="/grocery.png"
            alt="Team meeting"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </main>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 max-w-7xl px-4 mx-auto mt-6 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((issue, index) => (
          <FeaturesCard key={index} {...issue} />
        ))}
      </div>

    </div>
  )
}
