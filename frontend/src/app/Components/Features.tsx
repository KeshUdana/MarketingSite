"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import styles from '../Pages/LandingPage.module.css';

const features = [
  {
    title: "Enhance Customer Reach",
    description: "Connect your products with a wider audience through AI-driven recommendations.",
    icon: "/images/website.png",
    bgColor: "bg-[#ffded4]"
  },
  {
    title: "Streamline Product Discovery",
    description: "Help customers find similar products effortlessly by uploading an image.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#ffeed4]"
  },
  {
    title: "Boost Local Sales",
    description: "Promote Sri Lankan retailers and increase visibility within the local market.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#d4f0ff]"
  },
  {
    title: "Improve Shopping Experience",
    description: "Deliver a personalized and intuitive shopping journey for your customers.",
    icon: "/images/rocket.png",
    bgColor: "bg-[#ffd4d4]"
  }
];

export default function Features() {
  const router = useRouter(); // Initialize the router

  const handleRequest = () => {
    router.push('/Retailer'); // Navigate to the SignInPage
  };

  return (
    <section className="py-20 bg-[#ffd4d4] rounded-tr-[400px] relative min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">What We Do</h2>
        <p className="text-2xl text-center mb-12 text-[#666]">For Your Business</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`${feature.bgColor} rounded-full w-16 h-16 mb-6 flex items-center justify-center`}
              >
                <Image src={feature.icon} alt={feature.title} width={36} height={36} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#333]">{feature.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <button 
            className={`${styles.ctaButton} shadow-lg`} 
            onClick={handleRequest} // Attach the handler
          >
            Request
          </button>
        </div>
      </div>
    </section>
  );
}
