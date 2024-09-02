import React from 'react';
import Image from 'next/image';
import { Globe, Megaphone, Smartphone, MessageCircle, Leaf, Trophy, LucideIcon } from 'lucide-react';

interface SolutionsCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const SolutionsCard: React.FC<SolutionsCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-200 group/solution">
      <div className="group-hover/solution:translate-x-2 hover:cursor-pointer transition duration-200">
        <div className="flex items-center mb-2">
          <Icon className="w-6 h-6 text-[#BC1E3A] mr-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );

interface Solutions {
    icon: LucideIcon;
    title: string;
    description: string;
}

const Solutions = () => {
    const solutions: Solutions[] = [
        {
            icon: Globe,
            title: "One Place for All",
            description: "Discover every event on a single platform"
        },
        {
            icon: Megaphone,
            title: "We Market",
            description: "Organizers focus on quality; we handle the buzz"
        },
        {
            icon: Smartphone,
            title: "Simple to Use",
            description: "From finding to attending events, it's all streamlined"
        },
        {
            icon: MessageCircle,
            title: "Talk and Share",
            description: "Direct chats with organizers for a lively community feel"
        },
        {
            icon: Leaf,
            title: "Environmental Sustainability",
            description: "Links ticket sales to the Green Ticket initiative, promoting tree planting"
        },
        {
            icon: Trophy,
            title: "User Engagement Features",
            description: "Future updates to include contests and tasks, increasing interaction"
        },
    ];

    return (
        <div className="py-12 px-6 animate-fade-in bg-gray-100">
            <div className="max-w-7xl space-y-8 mx-auto px-4 sm:px-6 lg:px-8">
                <div className='md:space-y-3 text-center mb-12'>
                    <h1 className='md:text-5xl text-3xl font-bold'>SBazar's <span className='text-[#BC1E3A]'>Solutions</span></h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Smart Search Section */}
                    <div className="lg:w-1/2 bg-[#BC1E3A]/10 backdrop-blur-2xl rounded-3xl flex flex-col md:flex-row justify-between shadow-md h-[30rem] md:h-[18rem]">
                        <div className="md:w-1/2 p-8 flex flex-col justify-center pr-4">
                            <h2 className="text-4xl font-bold mb-4">Open To All</h2>
                            <p className="text-gray-600">
                            Break cultural silos, welcoming everyone
                            </p>
                        </div>
                        <div className="md:w-1/2 overflow-hidden relative flex justify-center items-start md:justify-end px-8">
                            <Image
                                src="/iphone-mockup.svg"
                                alt="iPhone mockup"
                                width={200}
                                height={500}
                                className="object-cover md:mt-8"
                            />
                        </div>
                    </div>

                    {/* Tailored Insights Section */}
                    <div className="lg:w-1/2 bg-green-300/20 backdrop-blur-2xl rounded-3xl flex flex-col md:flex-row justify-between shadow-md h-[30rem] md:h-[18rem]">
                        <div className="md:w-1/2 p-8 flex flex-col justify-center pr-4">
                            <h2 className="text-4xl font-bold mb-4">Find What You Love</h2>
                            <p className="text-gray-600">
                            Easy search for your next favorite event
                            </p>
                        </div>
                        <div className="md:w-1/2 overflow-hidden relative flex justify-center items-start md:justify-end px-8">
                            <Image
                                src="/iphone-mockup.svg"
                                alt="iPhone mockup"
                                width={200}
                                height={500}
                                className="object-cover md:mt-8"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((issue, index) => (
                        <SolutionsCard key={index} {...issue} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;