import Image from 'next/image';
import React from 'react';

const SaveFoodSection = () => {


    return (
        <section className="w-full mt-24 py-6 rounded-[3rem] shadow-lg bg-[#FEFBD8] flex items-center flex-col">

            <div className='mb-6 text-center md:py-6 md:space-y-3'>

                        <h2 className="text-4xl text-center md:text-6xl font-bold text-[#BC1E3A]">
                            Save <span className='text-zinc-900'>Food</span>
                        </h2>
                        <p className="text-zinc-500 tracking-widest md:max-w-xl font-normal text-base md:text-xl">
                        Join SBazar in Reducing Food Waste                      </p>
                    </div>
            <div className="mx-auto md:mb-12 mb-4 container grid md:grid-cols-2 gap-8 animate-in">

                <div className="text-left space-y-6">
                
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg md:text-xl">Short Expiry
                        </p>
                        <p className="text-zinc-500 font-normal text-lg md:text-xl">
                            Save perfectly good food from being wasted and enjoy unbeatable deals
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg md:text-xl">Still Good
                        </p>
                        <p className="text-zinc-500 font-normal text-lg md:text-xl">
                            Go beyond dates—pick still-tasty past-best items to lessen waste. Trust in their enduring quality.

                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg md:text-xl">
                            Dancing Products

                        </p>
                        <p className="text-zinc-500 font-normal max-w-xl text-lg md:text-xl">
                            Opt for items with packaging flaws, not quality issues. Your choice boosts sustainability and savings.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg md:text-xl">
                            Our Mission

                        </p>
                        <p className="text-zinc-500 font-normal text-lg md:text-xl">
                            Selecting these items joins you in the vital effort to cut food waste for a healthier planet and community.
                        </p>
                    </div>
                </div>

                <div className="w-full animate-random-move flex items-center justify-center">
                <Image src={"/food.png"} className='' height={500} width={500} alt="" />
              </div>
            </div>
        </section>

    )
}

export default SaveFoodSection