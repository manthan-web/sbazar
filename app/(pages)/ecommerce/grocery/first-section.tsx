import React from 'react'
import Image from 'next/image'


const FirstSection = () => {
    return (

        <section className="text-center pb-12 px-4 md:px-0 mb-8 md:mb-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4 md:mb-8">
                Welcome To <span className='text-[#BC1E3A]'>SBAZAR</span> Kitchen
            </h2>
            <p className='text-zinc-900 mb-2 max-w-full md:max-w-4xl font-medium text-base md:text-xl'>Dear Family,</p>
            <p className="text-zinc-500 mb-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
                We're thrilled to introduce the Grocery module – the kitchen of our SBazar home. Here, we're mixing tradition with technology to spice up your meals with a taste of India. With over 1,120 products, our aim is to make every dish remind you of home.
            </p>
            <p className="text-zinc-500 mb-4 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
                Our deals and the Save Food initiative are designed to provide value and minimize waste, embodying the warmth and care of a family kitchen.
            </p>
            <p className="text-zinc-500 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
                Your feedback is the secret ingredient to our growth. Let's cook up a storm together, celebrating our heritage with every bite.
            </p>
            <p className='text-zinc-900 mt-14 max-w-full md:max-w-4xl font-semibold text-base md:text-xl'>The SBazar Team</p>
            <p className="text-zinc-500 max-w-full md:max-w-4xl font-normal text-base md:text-xl">
            P.S. Exciting updates are on the horizon – let's keep the feast going!            </p>
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
