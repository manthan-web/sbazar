import React from 'react'
import Image from 'next/image'


const FirstSection = () => {
    return (

        <section className="text-center pb-12 px-8 md:px-0 mb-8 md:mb-12 flex flex-col items-center">
            <div className='text-center mb-12 space-y-2 md:mb-6'>

                <h2 className="text-4xl md:text-6xl font-bold text-zinc-900">
                    Grocery <span className='text-[#BC1E3A]'>Module</span>
                </h2>
                <p className='text-xl md:text-2xl text-gray-600 font-light'>Where Every Event Matters</p>
            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12'>
                <p className='text-center font-semibold text-xl md:text-2xl mb-6 text-gray-800'>Dear Sbazar Family,</p>
                <div className='space-y-6 text-left text-gray-700 text-base md:text-lg leading-relaxed'>
                    <p>
                        We're excited to launch our Events Module, a blend of Commercial and Non-Profit gatherings, each designed to enrich, entertain, and empower our community.
                    </p>
                    <p>
                        Commercial Events bring you the best of cultural and entertainment experiences, offering a window to our heritage and traditions.
                    </p>
                    <p>
                        Non-profit events, at the heart of our mission, focus on community service and cultural exchange, fueling our spirit of giving back without any commercial intent.
                    </p>
                    <p>
                        Together, they represent our dual commitment to celebration and service. Your participation in commercial events supports our non-profit initiatives, weaving a tapestry of community, culture, and connection.
                    </p>
                    <p>
                        Join us in this new chapter, where every event contributes to a larger cause, and your engagement makes a difference.
                    </p>
                </div>
                <div className='mt-8 text-center'>
                    <p className='font-bold text-xl md:text-2xl text-gray-800'>The SBazar Team</p>
                </div>
            </div>
        </section>


    )
}

export default FirstSection


{/* <main className="flex flex-col md:flex-row gap-8"> */ }
{/* Vertical Info (Left on desktop, second on mobile) */ }
{/* <section className="md:w-1/4 flex flex-col justify-center order-2 md:order-1">
                    <h2 className="text-sm font-semibold text-zinc-900 mb-2">ABOUT US</h2>
                    <p className="mb-8 text-zinc-500 max-w-md text-base">
                        Welcome to SBazar, your one-stop shop for fresh groceries in Germany. Discover a wide range of products and enjoy seamless shopping through our app.
                    </p>
                    <h2 className="text-sm font-semibold text-zinc-900 mb-2">CONTACT</h2>
                    <ul className="space-y-2 text-zinc-500 text-base">
                        <li>Berlin, Germany</li>
                        <li>support@sbazar.com</li>
                        <li>+49 1234 567890</li>
                    </ul>
                </section> */}

{/* Center Image (Center on desktop, first on mobile) */ }
{/* <section className="md:w-1/2 order-1 md:order-2">
                    <div className="relative w-full h-96 md:h-[500px]">
                        <Image
                            src="/grocery.png"
                            alt="Description of image"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                </section> */}

{/* Right Info (Right on desktop, last on mobile) */ }
{/* <section className="md:w-1/4 flex flex-col justify-center order-3">
                    <h2 className="text-sm font-semibold text-zinc-900 mb-2">ABOUT US</h2>
                    <p className="mb-8 text-zinc-500 max-w-md text-base">
                        Welcome to SBazar, your one-stop shop for fresh groceries in Germany. Discover a wide range of products and enjoy seamless shopping through our app.
                    </p>
                    <h2 className="text-sm font-semibold text-zinc-900 mb-2">ABOUT US</h2>
                    <p className="mb-8 text-zinc-500 max-w-md text-base">
                        Welcome to SBazar, your one-stop shop for fresh groceries in Germany. Discover a wide range of products and enjoy seamless shopping through our app.
                    </p>
                </section> */}
{/* </main> */ }
