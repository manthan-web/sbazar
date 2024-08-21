import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TransitionPanelCard } from "./coming-up";

const EcommerceTabs = () => {
  return (
    <section className="flex w-full py-6 md:py-12">
      <Tabs defaultValue="products" className="w-full max-w-full">
        <TabsList className="grid p-0 rounded-none text-white bg-[#BC1E3A] md:min-h-[6rem] min-h-[5rem] w-full grid-cols-2 gap-0">
          <TabsTrigger
            className="h-[3rem] md:h-[4rem] rounded-r-full text-lg md:text-2xl"
            value="products"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            className="h-[3rem] md:h-[4rem] rounded-l-full text-lg md:text-2xl"
            value="services"
          >
            Services
          </TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <p className="text-center mx-auto md:text-lg py-12 px-12 max-w-xl md:max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris ni
          </p>

          <section className="w-full py-12 flex items-start">
            <div className="mx-auto container grid md:grid-cols-2 gap-8 animate-in">
              <div className="text-left space-y-6">
                <h2 className="text-4xl md:mb-8 md:text-6xl font-bold text-[#BC1E3A]">
                  Grocery Module 🛍️
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

                <Link className="" href={'/ecommerce/grocery'}>

                  <Button className="rounded-sm mt-4 bg-[#BC1E3A] text-lg py-6 px-11">
                    Explore
                  </Button>
                </Link>
              </div>

              <div className="w-full flex items-center justify-center">
                <video className="w-full h-full" loop autoPlay muted>
                  <source src="./ecommerce/grocery2.mp4" />
                </video>
              </div>
            </div>
          </section>
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
        </TabsContent>
        <TabsContent value="services">
          <p className="text-center mx-auto md:text-lg py-12 px-12 max-w-xl md:max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris ni
          </p>

          <section className="w-full py-12 flex items-start">
            <div className="mx-auto container grid md:grid-cols-2 gap-8 animate-in">
              <div className="text-left space-y-6">
                <h2 className="text-4xl md:mb-8 md:text-6xl font-bold text-[#BC1E3A]">
                  Services Module 🎟️
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

                <Link className="" href={'/ecommerce/services'}>

                  <Button className="rounded-sm mt-4 bg-[#BC1E3A] text-lg py-6 px-11">
                    Explore
                  </Button>
                </Link>
              </div>

              <div className="w-full flex items-center justify-center">
                <video className="w-full h-full" loop autoPlay muted>
                  <source src="./ecommerce/grocery2.mp4" />
                </video>
              </div>
            </div>
          </section>
          <section className="w-full border-t py-12 flex items-start">
            <div className="mx-auto container grid md:grid-cols-2 gap-8 animate-in">
              <div className="text-left space-y-6">
                <h2 className="text-4xl md:mb-8 md:text-6xl font-bold text-[#BC1E3A]">
                  Movie Module 🎫
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
        </TabsContent>
      </Tabs>
    </section>
  );
};

{
  /* <p className="text-center mx-auto md:text-lg py-12 px-12 max-w-xl md:max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni</p> */
}

export default EcommerceTabs;
