import Image from 'next/image';

import styles from '../Pages/LandingPage.module.css';

const features = [
  {
    title: "Snap, Style, and Slay",
    description: "Take a photo of what inspires you. Our AI finds similar products so you can style your look and slay effortlessly.",
    icon: "/images/camera.png",
    bgColor: "bg-[#ffded4]"
  },
  {
    title: "Find Your Perfect Match",
    description: "Upload a photo and let our AI match it to the best products for your style.",
    icon: "/images/match.png",
    bgColor: "bg-[#ffeed4]"
  },
  {
    title: "Shop What You Love",
    description: "Discover products inspired by your snaps and bring your vision to life.",
    icon: "/images/shoppingbag.png",
    bgColor: "bg-[#d4f0ff]"
  },
  {
    title: "Personalized Shopping",
    description: "Experience a curated journey tailored to your style preferences with just one snap.",
    icon: "/images/personalized.png",
    bgColor: "bg-[#ffd4d4]"
  }
];

export default function UserFeatures() {
  return (
    <section className="py-20 bg-[#ffd4d4] rounded-tl-[400px] relative">
     <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Snap, Style, and Slay</h2>
        <p className="text-2xl text-center mb-12 text-[#666]">Effortless Style with Just One Snap</p>
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
              <p className="text-[#666] text-sm leading-relaxed">{feature.description}</p></div>
            
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button className={`${styles.ctaButton} shadow-lg`}>Join the Waitlist !</button>
</div>
      </div>
    </section>
  );
}
