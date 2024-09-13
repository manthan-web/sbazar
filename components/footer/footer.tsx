import { Facebook, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="bg-white border-t px-6 border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#BC1E3A] font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">E-Commerce</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">Social</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">Virtual Events</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">Virtual Users</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">Behavioral Analytics</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">Connect</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#BC1E3A] font-semibold mb-4">Feature</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">Resources</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">Documents</Link></li>
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[#BC1E3A] font-semibold mb-4">OFFICE LOCATION</h3>
              <p className="text-zinc-600">ABC Company, 123 East, 17th Street, St. louis 10001</p>
            </div>
            <div>
              <h3 className="text-[#BC1E3A] font-semibold mb-4">News letter</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-2 text-sm border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#BC1E3A] text-white px-4 py-2 text-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#BC1E3A] focus:ring-offset-2 transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-12 border-t border-zinc-200">
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-zinc-600 hover:text-[#BC1E3A] transition-colors">
              <Facebook size={20} />
            </Link>
          </div>
          <div className="text-center mb-8">
            <p className="text-zinc-600 text-sm">© 2024 ABC All Rights Reserved.</p>
            <p className="text-zinc-600 text-sm mt-2">Lorem ipsum is simply dummy text</p>
            <p className="text-zinc-600 text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <p className="text-zinc-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t
            </p>
            <p className="text-zinc-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t Lorem Ipsum is simply dummy text of the printin
            </p>
          </div>
          <p className="text-zinc-600 text-sm text-center">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}