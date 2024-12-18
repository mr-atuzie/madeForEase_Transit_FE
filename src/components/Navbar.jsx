import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Import assets for the banners (example images)
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const FooterBanner = () => {
  const wordVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      color: "#f59e0b", // yellow-500
      transition: {
        duration: 0.6,
        delay: i * 0.2, // stagger the animations
        ease: "easeOut",
      },
    }),
  };

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000, // Slightly longer to give more emphasis to each slide
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {[
        {
          image: banner1,
          highlight: "Effortless Travel",
          description:
            "Get where you need to be faster with modern, reliable transport that fits your schedule and lifestyle.",
        },
        {
          image: banner2,
          highlight: "On-Demand Rides",
          description:
            "No more waiting — access convenient, on-demand rides when and where you need them, right at your fingertips.",
        },
        {
          image: banner3,
          highlight: "Designed for Comfort",
          description:
            "Experience a smoother, more comfortable ride every time. Modern vehicles built for your convenience.",
        },
        {
          image: banner4,
          highlight: "Affordable & Reliable",
          description:
            "Enjoy a high-quality, affordable travel experience that doesn’t compromise on reliability or safety.",
        },
      ].map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full mx-auto h-[30vh] lg:h-[50vh] overflow-hidden group">
            {/* Image with Gradient Overlay */}
            <img
              src={slide.image}
              className="w-full h-full object-cover rounded-lg"
              alt="Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

            {/* Highlight Text with Staggered Animation */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-12 gap-4 text-white">
              <motion.p
                className="text-xl lg:text-3xl font-semibold text-center tracking-widest"
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                {slide.highlight.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    custom={i}
                    className="inline-block"
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.p>
              <p className="text-sm lg:text-base text-gray-200 max-w-lg text-center">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FooterBanner;
