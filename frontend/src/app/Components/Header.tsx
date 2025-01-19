import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-white/20 backdrop-blur-lg py-4 z-50">
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
      <Link href="#Hero" className="hover:text-[#f56d6d] transition duration-300">
        Home
      </Link>
      <Link href="#UserFeatures" className="hover:text-[#f56d6d] transition duration-300">
        For Users
      </Link>
      <Link href="#Features" className="hover:text-[#f56d6d] transition duration-300">
        For Business
      </Link>
      <Link href="#Team" className="hover:text-[#f56d6d] transition duration-300">
        The team
      </Link>
    </div>

    {/* Right Social Media Icons */}
    <div className="flex space-x-4">
      <Link href="https://www.linkedin.com/company/moddeapp/posts/?feedView=all" target="_blank">
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
      <Link href="https://www.instagram.com/modde_fashion_studio/" target="_blank">
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
