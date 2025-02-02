"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselImages = [
  { src: "/images/carousel1.jpg", title: "Grow Your Business", caption: "Join Modde to expand your reach." },
  { src: "/images/carousel2.jpg", title: "Reach More Customers", caption: "Showcase your products to a wider audience." },
  { src: "/images/carousel3.jpg", title: "Boost Your Sales", caption: "Sell online and grow your brand." },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].title}
            width={800}
            height={500}
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 px-4">
            <h5 className="text-lg font-semibold">{carouselImages[currentIndex].title}</h5>
            <p className="text-sm">{carouselImages[currentIndex].caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
