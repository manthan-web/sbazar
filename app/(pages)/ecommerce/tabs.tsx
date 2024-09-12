import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ShoppingCart, Truck, Tag, Film, Clock, Users, LucideIcon } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TransitionPanelCard } from "./coming-up";
import FAQSection from "./grocery/faq-section";
import { groceryPageFaqContent } from "@/faq-data";




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

const GroceryCard: React.FC<FeaturesCardProps> = ({ icon: Icon, title, description }) => (


  <div className="bg-white group/grocery p-4 rounded-lg shadow-md transition-all duration-300 hover:cursor-pointer  hover:shadow-lg">
    <div className="group-hover/grocery:translate-x-2 transition duration-200">
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 text-[#BC1E3A] mr-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>

);


const ServicesCard: React.FC<FeaturesCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg  group/services shadow-md transition-all duration-300 hover:cursor-pointer hover:shadow-lg">
      <div className="group-hover/services:translate-x-2 transition duration-200">
        <div className="flex items-center mb-2">
          <Icon className="w-6 h-6 text-[#BC1E3A] mr-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>

      </div>
    </div>
  );
};


const EcommerceTabs = () => {



  const groceryFeatures: Features[] = [
    {
      icon: ShoppingCart,
      title: "Easy Online Shopping",
      description: "Browse and purchase your groceries with ease using our intuitive online platform"
    },
    {
      title: 'Fast Delivery',
      description: 'Get your groceries delivered to your doorstep quickly and efficiently.',
      icon: Truck,
    },
    {
      title: 'Exclusive Discounts',
      description: 'Enjoy special discounts and offers available only on our online store.',
      icon: Tag,
    },
  ];

  const servicesFeatues: Features[] = [
    {
      title: 'Vast Movie Library',
      description: 'Access a wide range of movies from various genres and languages, all available at your fingertips.',
      icon: Film,
    },
    {
      title: 'Watch Anytime, Anywhere',
      description: 'Enjoy your favorite movies on any device, whether it’s a smartphone, tablet, or smart TV, at any time.',
      icon: Clock,
    },
    {
      title: 'Personalized Recommendations',
      description: 'Receive movie suggestions tailored to your viewing habits and preferences for a unique experience.',
      icon: Users,
    },
  ];


  return (
    <section className="flex w-full py-6 md:py-12">
      <Tabs defaultValue="products" className="w-full max-w-full">
        <TabsList className="flex gap-5 w-full">
          <TabsTrigger
            className="flex-1 rounded-r-full py-4 md:py-6 md:text-xl text-lg font-medium transition-all data-[state=active]:bg-[#BC1E3A] data-[state=active]:text-white shadow-lg"
            value="products"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            className="flex-1 rounded-l-full py-4 md:py-6 md:text-xl text-lg  font-medium transition-all data-[state=active]:bg-[#BC1E3A] data-[state=active]:text-white shadow-lg"
            value="services"
          >
            Services
          </TabsTrigger>
        </TabsList>
        <TabsContent className="max-w-7xl mx-auto" value="products">
          <p className="text-center mx-auto md:text-lg py-12 px-12 max-w-xl md:max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris ni
          </p>

          <section className="w-full py-12 md:pb-36 flex flex-col items-start">
            <div className="mx-auto  container grid md:grid-cols-2 gap-8 animate-in">
              <div className="text-left space-y-6">
                <h2 className="text-4xl md:mb-8 md:text-6xl font-bold text-[#BC1E3A]">
                  Grocery Module
                </h2>

                <div className="flex flex-col gap-2">
                  <p className="font-bold text-lg md:text-xl">
                    Diverse Opportunities
                  </p>
                  <p className="text-zinc-500 max-w-xl  font-normal text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris ni
                  </p>
                </div>

                <Link href={"/ecommerce/grocery"} className="inline-block">
                  <Button className="bg-[#BC1E3A] hover:bg-white hover:text-[#BC1E3A] text-white font-normal md:text-lg px-12 py-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-opacity-50 shadow-lg">
                    Explore
                  </Button>
                </Link>
              </div>

              <div className="w-full shadow-xl rounded-md overflow-hidden flex items-center justify-center">
                <video className="w-full rounded-md h-full" loop autoPlay muted>
                  <source src="./ecommerce/grocery2.mp4" />
                </video>
              </div>
            </div>

            <div className="grid grid-cols-1 max-w-7xl px-8 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groceryFeatures.map((issue, index) => (
                <GroceryCard key={index} {...issue} />
              ))}
            </div>

          </section>
          {/* coming up section */}

          <section className="w-full border-t py-12 flex flex-col items-start">
            <div className="w-full pb-10 px-8">
              <h2 className="text-4xl text-left mx-auto md:text-center md:text-6xl font-bold text-[#BC1E3A]">
                Coming Up
              </h2>
            </div>
            <div className="mx-auto container grid md:grid-cols-2 gap-8 animate-in">
              <div className="w-full animate-random-move flex items-center justify-center">
                <Image src={"/mic.png"} height={500} width={500} alt="" />
              </div>
              <div className="mx-auto flex items-center justify-between space-y-6">
                <TransitionPanelCard />
              </div>
            </div>
          </section>


          <FAQSection title="Grocery FAQ's" faqItems={groceryPageFaqContent} />

        </TabsContent>
        <TabsContent className="max-w-7xl mx-auto" value="services">
          <p className="text-center mx-auto md:text-lg py-12 px-12 max-w-xl md:max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris ni
          </p>

          <section className="w-full py-12 md:pb-36 flex flex-col items-start">
            <div className="mx-auto md:space-x-6 container grid md:grid-cols-2 gap-8 animate-in">
              <div className="text-left space-y-6">
                <h2 className="text-4xl md:mb-8 md:text-6xl font-bold text-[#BC1E3A]">
                  Movie Module
                </h2>

                <div className="flex flex-col gap-2">
                  <p className="font-bold text-lg md:text-xl">
                    Diverse Opportunities
                  </p>
                  <p className="text-zinc-500 max-w-xl font-normal text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris ni
                  </p>
                </div>

                <Link href={"/ecommerce/services/movies"} className="inline-block">
                  <Button className="bg-[#BC1E3A] hover:bg-white hover:text-[#BC1E3A] text-white font-normal md:text-lg px-12 py-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-opacity-50 shadow-lg">
                    Explore
                  </Button>
                </Link>
              </div>

              <div className="w-full shadow-xl rounded-md overflow-hidden flex items-center justify-center">
                <video className="w-full h-full" loop autoPlay muted>
                  <source src="./ecommerce/grocery2.mp4" />
                </video>
              </div>
            </div>

            <div className="grid grid-cols-1 max-w-7xl px-8 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesFeatues.map((issue, index) => (
                <ServicesCard key={index} {...issue} />
              ))}
            </div>
          </section>
          <section className="w-full border-t py-12 flex items-start">
            <div className="mx-auto container grid md:grid-cols-2 gap-8 animate-in">
              <div className="text-left space-y-6">
                <h2 className="text-4xl md:mb-8 md:text-6xl font-bold text-[#BC1E3A]">
                  Events Module
                </h2>

                <div className="flex flex-col gap-2">
                  <p className="font-bold text-lg md:text-xl">
                    Green Tickets
                  </p>
                  <p className="text-zinc-500 max-w-xl font-normal text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris ni
                  </p>
                </div>

                <Button className="rounded-sm bg-[#BC1E3A] text-lg py-6 px-11">
                  Explore
                </Button>
              </div>

              <div className="w-full flex items-center justify-center">
                <Image src={"/movie.png"} height={400} width={400} alt="" />
              </div>
            </div>
          </section>

          <FAQSection title="Services FAQ's" faqItems={groceryPageFaqContent} />

        </TabsContent>
      </Tabs>

    </section>
  );
};

{
  /* <p className="text-center mx-auto md:text-lg py-12 px-12 max-w-xl md:max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni</p> */
}

export default EcommerceTabs;
