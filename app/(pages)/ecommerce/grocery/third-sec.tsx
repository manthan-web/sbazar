import Image from 'next/image';

const ReviewCard = (props: any) => (
    <div className="bg-white mt-6 p-6 rounded-[2rem] shadow-md">
        <p className="font-bold text-lg md:text-xl text-[#BC1E3A]">{props.name}</p>
        <p className="text-zinc-500 max-w-sm font-normal text-lg md:text-xl">
            {props.comment}
        </p>
    </div>
);

const AppReviewsSection = () => {
    const reviews = [
        { name: "INDIAN City-Themed Combos", comment: "offering regional culinary experiences." },
        { name: "Discounted Pairings", comment: "Complementary products bundled together for savings" },
        { name: "Monthly New Picks", comment: "Ten unique combos introduced each month for variety" },
        { name: "Cultural Exploration", comment: "Encourages discovery of India's diverse culinary heritage" },
        { name: "Local City Bundles", comment: "Monthly, city-themed bundles for savings" },
        { name: "Savings Across Categories", comment: "Quality at great prices" },
        { name: "5 New Each Month", comment: "Budget-friendly, diverse products" },
        { name: "Explore & Save", comment: "Discover flavors, maximize savings" },
    ];

    return (    
        <section className="bg-gray-100 py-16 px-4 mx-4 md:px-0">
            <div className='mx-auto text-center md:mb-20 mb-10 space-y-4'>
                <h2 className="text-4xl md:text-6xl mx-auto font-bold text-[#BC1E3A] mb-4">
                    SBAZAR <span className='text-zinc-900'>Combos & Bundles</span>
                </h2>
                <p className="text-zinc-500 mb-4 tracking-widest mx-auto md:max-w-xl font-normal text-base md:text-xl">
                    MULTIPRODUCTS DEALS
                </p>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Reviews */}
                    <div className="w-full md:w-1/3 space-y-4 order-2 md:order-1">
                        {reviews.slice(0, 4).map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </div>

                    {/* Central Image */}
                    <div className="w-full md:w-1/3 my-8 md:my-0 order-1 md:order-2">
                        <div className="relative">
                            <Image src="/iphone-mockup.svg" width={300} height={600} alt="App mockup" className="mx-auto" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <p className="text-xs mb-2">FEATURED BY APPLE</p>
                                <p className="text-sm font-semibold mb-4">ON THE APP STORE</p>
                                <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                                    Get the app
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Reviews */}
                    <div className="w-full md:w-1/3 space-y-6 order-3">
                        {reviews.slice(4).map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppReviewsSection;