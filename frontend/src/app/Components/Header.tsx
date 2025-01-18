import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative bg-transparent shadow-md py-4">
      {/* Centered Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image
            src="/images/Component 1.png"
            alt="Modde Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8">
        {/* Left Navigation Links */}
        <div className="flex space-x-8 text-sm font-semibold text-gray-800">
          <Link href="/" className="hover:text-[#f56d6d] transition duration-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#f56d6d] transition duration-300">
            About Us
          </Link>
          <Link href="/login" className="hover:text-[#f56d6d] transition duration-300">
            Login
          </Link>
          <Link href="#contact" className="hover:text-[#f56d6d] transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Right Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank">
            <div className="relative w-10 h-10">
              <Image
                src="/images/Ellipse 8.png"
                alt="Facebook Background"
                fill
                className="object-contain"
              />
              <Image
                src="/images/facebook.png"
                alt="Facebook Icon"
                width={20}
                height={20}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <div className="relative w-10 h-10">
              <Image
                src="/images/Ellipse 9.png"
                alt="LinkedIn Background"
                fill
                className="object-contain"
              />
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn Icon"
                width={20}
                height={20}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <div className="relative w-10 h-10">
              <Image
                src="/images/Ellipse 10.png"
                alt="Instagram Background"
                fill
                className="object-contain"
              />
              <Image
                src="/images/instagram.png"
                alt="Instagram Icon"
                width={20}
                height={20}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
