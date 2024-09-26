import { Facebook, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"

function QuoteSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <span className="absolute top-0 left-0 text-[#FFCCCB] opacity-50 text-9xl font-serif -translate-x-6 -translate-y-6">"</span>
          <blockquote className="relative z-10 text-center px-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 leading-tight">
              We have a thrilling plan in place to enhance the capabilities of Sbazar, and we will be implementing these improvements gradually and iteratively over the upcoming months.
            </p>
          </blockquote>
          <span className="absolute bottom-0 right-0 text-[#FFCCCB] opacity-50 text-9xl font-serif translate-x-6 translate-y-6">"</span>
        </div>
      </div>
    </section>
  )
}

export default function FooterSection() {
  return (
    <footer className="bg-white">
      <div className="border-t border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 py-16 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[#BC1E3A] font-bold text-lg mb-6 uppercase">About Us</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">E-Commerce</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">Social</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">Virtual Events</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">Virtual Users</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">Behavioral Analytics</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">Connect</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#BC1E3A] font-bold text-lg mb-6 uppercase">Feature</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">Resources</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-[#BC1E3A] transition-colors">Documents</Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-[#BC1E3A] font-bold text-lg mb-6 uppercase">Office Location</h3>
                <p className="text-gray-600">ABC Company, 123 East, 17th Street, St. louis 10001</p>
              </div>
              <div>
                <h3 className="text-[#BC1E3A] font-bold text-lg mb-6 uppercase">News letter</h3>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:border-transparent rounded-l-md"
                  />
                  <button
                    type="submit"
                    className="bg-[#BC1E3A] text-white px-4 py-3 text-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-offset-2 transition-colors rounded-r-md"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteSection />
      <div className="border-t border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex justify-center space-x-6 mb-8">
              <Link href="#" className="text-gray-400 hover:text-[#BC1E3A] transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#BC1E3A] transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#BC1E3A] transition-colors">
                <Facebook size={24} />
              </Link>
            </div>
            <div className="text-center mb-8">
              <p className="text-gray-600">© 2024 ABC All Rights Reserved.</p>
              <p className="text-gray-600 mt-2">Lorem ipsum is simply dummy text</p>
              <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t
              </p>
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t Lorem Ipsum is simply dummy text of the printin
              </p>
            </div>
            <p className="text-gray-600 text-sm text-center">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}