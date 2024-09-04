import React from 'react';
import Image from 'next/image';
import { Globe, QrCode, Subtitles, Users, TreeDeciduous, LucideIcon } from 'lucide-react';
import { SCoinsSpecialSection } from '@/app/(pages)/scoins/scoins-section';
import UsersFeaturesSections from './user-features';


interface IssueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const IssueCard: React.FC<IssueCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center mb-2">
            <Icon className="w-6 h-6 text-[#BC1E3A] mr-2" />
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

interface Issue {
    icon: LucideIcon;
    title: string;
    description: string;
}


const SolutionsSection = () => {

    const issues: Issue[] = [
        {
            icon: Globe,
            title: "Wider Promotional Reach",
            description: "Utilizes SBazar's platform for broader audience engagement beyond WhatsApp groups"
        },
        {
            icon: QrCode,
            title: "QR Code Verification",
            description: "Simplifies entry, eliminating the need for physical ticket checks"
        },
        {
            icon: Subtitles,
            title: "English Subtitles",
            description: "Offers movies with subtitles, appealing to a diverse audience"
        },
        {
            icon: Users,
            title: "User Engagement Features",
            description: "Future updates to include contests and tasks, increasing interaction"
        },
        {
            icon: TreeDeciduous,
            title: "Environmental Sustainability",
            description: "Links ticket sales to the Green Ticket initiative, promoting tree planting"
        },
        {
            icon: Users,
            title: "User Engagement Features",
            description: "Future updates to include contests and tasks, increasing interaction"
        },
    ];


    return (
        <div className="py-12 md:py-24 animate-fade-in px-6 bg-gray-100">
            <div className="max-w-7xl space-y-8 mx-auto px-4 sm:px-6 lg:px-8">
                <div className='md:space-y-3 text-center mb-12'>
                    <h1 className='md:text-5xl text-3xl font-bold'>SBazars <span className='text-[#BC1E3A]'>Solutions</span></h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Smart Search Section */}
                    <div className="lg:w-1/2 bg-[#BC1E3A]/10 backdrop-blur-2xl rounded-3xl flex flex-col md:flex-row justify-between shadow-md h-[30rem] md:h-[18rem]">
                        <div className="md:w-1/2 p-8 flex flex-col justify-center pr-4">
                            <h2 className="text-4xl font-bold mb-4">Digital Ticket Booking</h2>
                            <p className="text-gray-600">
                                Streamlines the process, reducing reliance on manual operations
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
                            <h2 className="text-4xl font-bold mb-4">Affordable Pricing</h2>
                            <p className="text-gray-600">
                                Aims to lower ticket costs, making cinema visits more accessible
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
                    {issues.map((issue, index) => (
                        <IssueCard key={index} {...issue} />
                    ))}
                </div>



                {/* <UsersFeaturesSections /> */}



            </div>

        </div>
    );
};

export default SolutionsSection;