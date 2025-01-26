"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./LandingPage.module.css";
import { setupAnimations } from "./FeatureAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Enhance Customer Reach",
    description: "Connect your products with a wider audience through AI-driven recommendations.",
    icon: "/images/website.png",
    bgColor: "bg-[#ffded4]",
  },
  {
    title: "Streamline Product Discovery",
    description: "Help customers find similar products effortlessly by uploading an image.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#ffeed4]",
  },
  {
    title: "Boost Local Sales",
    description: "Promote Sri Lankan retailers and increase visibility within the local market.",
    icon: "/images/mobilephone.png",
    bgColor: "bg-[#d4f0ff]",
  },
  {
    title: "Improve Shopping Experience",
    description: "Deliver a personalized and intuitive shopping journey for your customers.",
    icon: "/images/rocket.png",
    bgColor: "bg-[#ffd4d4]",
  },
];

export default function Features() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<Array<HTMLDivElement | null>>([]);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const featureElements = featuresRef.current;
    const sectionElement = sectionRef.current;
    const bgElement = bgRef.current;
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;

    if (
      sectionElement &&
      bgElement &&
      titleElement &&
      subtitleElement &&
      featureElements.every((el) => el !== null)
    ) {
      // Initialize animations
      setupAnimations(
        sectionElement,
        bgElement,
        titleElement,
        subtitleElement,
        featureElements as HTMLDivElement[]
      );

      // Floating and rotation animation for each feature card
      featureElements.forEach((feature, index) => {
        if (feature) {
          gsap.to(feature, {
            y: -10,
            rotate: "5deg",
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.1,
          });
        }
      });
    }

    // Cleanup animations on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  const handleRequest = () => {
    router.push("/Retailer");
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 pb-10 mt-[200px] bg-[#ffd4d4] rounded-tr-[400px] relative min-h-screen flex flex-col"
    >
      <div ref={bgRef} className="absolute inset-0 bg-[#ffd4d4] rounded-br-[400px] -z-10" />
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#333]"
        >
          What We Do
        </h2>
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl text-center mb-8 text-[#666]"
        >
          For Your Business
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  featuresRef.current[index] = el;
                }
              }}
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              role="article"
            >
              <div
                className={`icon-container ${feature.bgColor} rounded-full w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center mx-auto`}
              >
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-[#333] text-center">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-[#666] leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            className={`${styles.ctaButton} shadow-lg`}
            onClick={handleRequest}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
