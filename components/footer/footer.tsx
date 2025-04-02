import { Facebook, Linkedin, Send, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

function QuoteSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <span className="absolute top-0 left-0 text-[#FFCCCB] opacity-50 text-7xl md:text-8xl font-serif -translate-x-4 -translate-y-4">
            "
          </span>
          <blockquote className="relative z-10 text-center px-4 md:px-8">
            <p className="text-base md:text-lg lg:text-2xl font-medium text-gray-800 leading-relaxed">
              We have a thrilling plan in place to enhance the capabilities of
              Snext, and we will be implementing these improvements gradually
              and iteratively over the upcoming months.
            </p>
          </blockquote>
          <span className="absolute bottom-0 right-0 text-[#FFCCCB] opacity-50 text-7xl md:text-8xl font-serif translate-x-4 translate-y-4">
            "
          </span>
        </div>
      </div>
    </section>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-white">
      <div className="border-t border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 py-16 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[#2C2C2C] font-bold text-lg mb-6 uppercase">
                SNext
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/ecommerce"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    Social
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    Business
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#2C2C2C] font-bold text-lg mb-6 uppercase">
                About Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about-us/introduction"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/vision2virtual"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    Vision to Virtual
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/impressum"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#2C2C2C] font-bold text-lg mb-6 uppercase">
                policies
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/policies/terms-and-conditions"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies/privacy-policy"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies/payment-policy"
                    className="text-gray-600 hover:text-[#2C2C2C] transition-colors"
                  >
                    Payment Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              {/* <div>
                <h3 className="text-[#2C2C2C] font-bold text-lg mb-6 uppercase">
                  Office Location
                </h3>
                <p className="text-gray-600">Snext UG Masurenstraße Köln </p>
              </div> */}
              {/* <div>
                <h3 className="text-[#2C2C2C] font-bold text-lg mb-6 uppercase">
                  Subscription
                </h3>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent rounded-l-md"
                  />
                  <button
                    type="submit"
                    className="bg-[#2C2C2C] text-white px-4 py-3 text-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2C2C2C] focus:ring-offset-2 transition-colors rounded-r-md"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <QuoteSection />
      <div className="border-t border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex justify-center space-x-6 mb-8">
              <Link
                href="https://www.instagram.com/snext.app/#"
                className="text-gray-400 hover:text-[#2C2C2C] transition-colors"
              >
                <Instagram size={24} />
              </Link>
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-[#2C2C2C] transition-colors"
              >
                <Linkedin size={24} />
              </Link> */}
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-[#2C2C2C] transition-colors"
              >
                <Youtube size={24} />
              </Link> */}
            </div>
            <div className="text-center mb-8">
              <button className="text-gray-600 hover:underline">
                © 2025 SNext All Rights Reserved.
              </button>
              {/* <p className="text-gray-600 mt-2">Lorem ipsum is simply dummy text</p> */}
              {/* <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
            </div>
            {/* <div className="grid md:grid-cols-2 gap-8 mb-8">
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it t
              </p>
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it t Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it t Lorem
                Ipsum is simply dummy text of the printin
              </p>
            </div> */}
            <p className="text-gray-600 text-sm text-center">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
