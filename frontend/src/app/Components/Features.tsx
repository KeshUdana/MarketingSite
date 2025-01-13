import Image from 'next/image'

import styles from '../Pages/LandingPage.module.css'

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
]

export default function Features() {
  return (
    <section className="py-20 bg-[#ffd4d4] rounded-tr-[400px] relative">
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
      </div>
    </section>
  )
}

