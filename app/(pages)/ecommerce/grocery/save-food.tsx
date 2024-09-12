// pages/index.tsx
import Image from 'next/image';
import { Apple, ShoppingBag, Sandwich, LucideIcon } from 'lucide-react';

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

export default function SaveFoodSection() {
  const features: Features[] = [
    {
      icon: Apple,
      title: "Short Expiry",
      description: "Save perfectly good food from being wasted and enjoy unbeatable deals"
    },
    {
      icon: ShoppingBag,
      title: "Still Good",
      description: "Go beyond dates—pick still-tasty past-best items to lessen waste. Trust in their enduring quality"
    },
    {
      icon: Sandwich,
      title: "Imperfect Packaging",
      description: "Opt for items with packaging flaws, not quality issues. Your choice boosts sustainability and savings."
    },
  ];

  return (
    <div className=" max-w-full bg-gray-50 w-full md:py-24 py-6 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <main className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className='text-3xl md:text-5xl font-bold mb-6'>Save <span className='text-green-500'>Food</span></h1>
            <p className="text-zinc-500 text-left mb-6 font-normal text-base md:text-xl">
              Join our mission to reduce food waste and make a positive impact on the environment. By choosing to save food, youre not just getting great deals, but also contributing to a more sustainable future. Every meal saved is a step towards a greener planet.
            </p>
            {/* <Button className="rounded-md bg-green-500 text-white text-lg py-3 px-8 self-start">
              Explore
            </Button> */}
          </div>

          {/* Right Section (Image) */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/food.png"
              alt="Save Food Initiative"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </main>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeaturesCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}