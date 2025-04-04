import React from "react";
import Image from "next/image";
import Card from "./card";
import MapSection from "./map-section";
import Values from "./values";
import FAQSection from "../ecommerce/grocery/faq-section";
import { aboutUsFaqContent } from "@/faq-data";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full flex items-start">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 p-6">
          <div className="text-left space-y-6 animate-fade-in-left">
            <h2 className="text-4xl md:text-6xl font-bold text-black">
              About Us
            </h2>
            <p className="text-zinc-800 font-medium text-lg md:text-xl">
              At Acme Inc., our mission is to revolutionize the way businesses
              operate. We believe in the power of innovation, collaboration, and
              a relentless pursuit of excellence.
            </p>
            <p className="text-zinc-700 font-normal text-lg md:text-xl">
              With over a decade of industry experience, weve built a team of
              passionate individuals who are dedicated to helping our clients
              achieve their goals.
            </p>
          </div>
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute top-0 right-0 w-4/5 h-3/5 md:w-3/4 md:h-2/3 animate-random-move">
              <Image
                src="/ask-aditi.png"
                alt="Image 1"
                fill={true}
                className="rounded-2xl object-cover bg-green-100/50 backdrop-blur-xl p-4 shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-4/5 h-3/5 md:w-3/4 md:h-2/3 animate-random-move">
              <Image
                src="/ask-aditi.png"
                alt="Image 2"
                fill={true}
                className="rounded-2xl object-cover bg-yellow-100/50 backdrop-blur-xl p-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

  

      {/* About Us Section */}
      <div className="relative w-full py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="container relative px-4 mx-auto">
          {/* Main About Section */}
          <div className="flex flex-col items-center max-w-4xl mx-auto mb-20 text-center">
            <h2 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">
              The Heartbeat of Snext <span className="text-4xl">🤗</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-600">
              Welcome to Snext, where every click brings you closer to India's soulful
              warmth and vibrant traditions. Our marketplace isn't just about
              transactions; it's about rekindling connections with your heritage,
              bringing a piece of home into your everyday life, wherever you might be.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-16 mb-20 lg:grid-cols-2">
            {/* Who We Are */}
            <div className="relative pl-16">
              <div className="absolute left-0 p-1 text-3xl bg-gray-100 rounded-lg">🌏</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Beyond Commerce, Beyond Borders
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                We're more than an online marketplace; we're a celebration of the Indian
                ethos. Our foundation is built on delivering not just goods, but joy,
                tradition, and the convenience of modern technology intertwined with the
                beauty of our culture.
              </p>
            </div>

            {/* Our Journey */}
            <div className="relative pl-16">
              <div className="absolute left-0 p-1 text-3xl bg-gray-100 rounded-lg">🌱</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Rooted in Values, Growing in Impact
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Our path from inception to becoming a comprehensive ecosystem has been
                guided by our core mission: to spread joy and embrace sustainability with
                every product and initiative.
              </p>
            </div>

            {/* Why Choose Snext */}
            <div className="relative pl-16">
              <div className="absolute left-0 p-1 text-3xl bg-gray-100 rounded-lg">🎯</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Purpose in Every Purchase
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                At Snext, every purchase is part of a bigger story. Whether it's
                championing sustainable shopping through our Save Food campaign or
                empowering communities with our Green Ticket initiative, your choices
                contribute to meaningful change.
              </p>
            </div>

            {/* A Glimpse Ahead */}
            <div className="relative pl-16">
              <div className="absolute left-0 p-1 text-3xl bg-gray-100 rounded-lg">🌼</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Embarking on New Horizons
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Our voyage with you is far from over; it's only just begun. With visions
                of touching more lives, expanding our community reach, and innovating for
                the better, the future of Snext holds limitless possibilities. The
                best, indeed, is yet to come.
              </p>
            </div>
          </div>

          {/* Join Our Journey Section */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-2 mb-6 text-4xl bg-gray-100 rounded-lg">🚀</div>
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Join Our Journey: Shaping the Future Together
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Your voice, ideas, and feedback are the compass that guides our journey.
              We invite you to be an active part of Snext, shaping our future with
              your invaluable insights and participation.
            </p>
            <p className="text-xl font-medium text-gray-700">
              Welcome to Snext: Where tradition meets tomorrow, and every purchase is a
              bridge to a more joyful, sustainable world.
            </p>
          </div>
        </div>
      </div>


      {/* <MapSection /> */}
      <Values />
      <FAQSection title="About Us FAQ's" faqItems={aboutUsFaqContent} />
    </div>
  );
};

export default AboutUs;

