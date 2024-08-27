import { Users, UserPlus, Leaf, BarChart2, Brain, LucideIcon } from 'lucide-react';

import React from 'react'

interface ComingUpCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const ComingUpCard: React.FC<ComingUpCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center mb-2">
            <Icon className="w-6 h-6 text-[#BC1E3A] mr-2" />
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

interface ComingUp {
    icon: LucideIcon;
    title: string;
    description: string;
}


const ComingUpSection = () => {


    const comingup: ComingUp[] = [
      
            {
                icon: Users,
                title: "Integrated Social Features",
                description: "Elevate event discovery with interactive social engagements."
            },
            {
                icon: UserPlus,
                title: "Talent and Collaboration Platform",
                description: "Showcase and connect talents within the community."
            },
            {
                icon: Leaf,
                title: "Eco-Conscious Initiatives",
                description: "Support sustainability with every event you attend."
            },
            {
                icon: BarChart2,
                title: "Real-Time Feedback and Analytics",
                description: "Offer instant feedback for enhanced event quality."
            },
            {
                icon: Brain,
                title: "Personalized AI Recommendations",
                description: "Get AI-curated event suggestions tailored for you."
            }
    ];


    return (
        <div className='py-12 animate-fade-in bg-gray-100'>
            <div className='max-w-7xl space-y-8 mx-auto px-4 sm:px-6 lg:px-8'>

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-zinc-900">The</span> <span className="text-[#BC1E3A]">Coming Up</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
                        Something here....
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {comingup.map((issue, index) => (
                        <ComingUpCard key={index} {...issue} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ComingUpSection