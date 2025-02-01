import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <Image src="/images/Component 2.png" alt="Modde Marketing" width={150} height={150} className="mb-6" />
            <p className="text-gray-300 max-w-md mt-4 leading-relaxed">
              Modde is dedicated to helping brands build meaningful connections with their audiences through innovative
              marketing strategies that inspire and engage.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center group cursor-pointer">
                <Mail className="mr-3 h-5 w-5 text-pink-400 group-hover:text-blue-300 transition-colors" />
                <span className="group-hover:text-blue-300 transition-colors">info@moddemarketing.com</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <Phone className="mr-3 h-5 w-5 text-pink-400 group-hover:text-blue-300 transition-colors" />
                <span className="group-hover:text-blue-300 transition-colors">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start group cursor-pointer">
                <MapPin className="mr-3 h-5 w-5 text-pink-400 group-hover:text-blue-300 transition-colors mt-1" />
                <span className="group-hover:text-blue-300 transition-colors">
                  123 Marketing St,
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white-400">Stay Connected</h3>
            <form className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-gray-800 text-white px-4 py-3 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                />
                <button className="absolute right-1 top-1 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Modde Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

