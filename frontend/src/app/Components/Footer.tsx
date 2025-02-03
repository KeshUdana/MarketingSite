import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/Component 2.png" alt="Modde Marketing" width={150} height={150} className="mb-4" />
            <p className="text-gray-300 max-w-md text-center md:text-left leading-relaxed">
              Modde is dedicated to helping brands build meaningful connections with their audiences through innovative
              marketing strategies that inspire and engage.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center group cursor-pointer">
                <Mail className="mr-3 h-5 w-5 text-pink-400 group-hover:text-blue-300 transition-colors" />
                <a href="mailto:moddeapp@gmail.com" className="group-hover:text-blue-300 transition-colors">
                moddeapp@gmail.com
                </a>
              </li>
              <li className="flex items-center group cursor-pointer">
                <Phone className="mr-3 h-5 w-5 text-pink-400 group-hover:text-blue-300 transition-colors" />
                <a href="tel:+15551234567" className="group-hover:text-blue-300 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start group cursor-pointer">
                <MapPin className="mr-3 h-5 w-5 text-pink-400 group-hover:text-blue-300 transition-colors mt-1" />
                <a
                  href="https://maps.app.goo.gl/3zUYtAqdTYtnjuvJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-blue-300 transition-colors"
                >
                  Colombo,
                  <br />
                  Srilanka
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-6 text-white-400">Stay Connected</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/modde_fashion_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Instagram className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/105976842/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Linkedin className="h-8 w-8" />
              </a>
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
