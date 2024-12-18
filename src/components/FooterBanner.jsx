import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

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
          image:
            "https://aspiringbackpacker.com/wp-content/uploads/2018/05/Meaning-of-travelling.jpg",
          highlight: "Effortless Travel",
          description:
            "Get where you need to be faster with modern, reliable transport that fits your schedule and lifestyle.",
        },
        {
          image:
            "https://mlszn6rjkywy.i.optimole.com/w:1920/h:1032/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/05/armoured-car-rentals-in-Abuja-Lagos-Kano-Port-Harcourt-and-all-major-cities-in-Nigeria.jpg",
          highlight: "On-Demand Rides",
          description:
            "No more waiting — access convenient, on-demand rides when and where you need them, right at your fingertips.",
        },
        {
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vegasautogallery.com%2Fused-vehicle-2023-cadillac-escalade-esv-v-series-c-2721%2F&psig=AOvVaw0Hd8AVa4hAINy_-c57Acuy&ust=1734615351834000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPju_vK3sYoDFQAAAAAdAAAAABAV",
          highlight: "Designed for Comfort",
          description:
            "Experience a smoother, more comfortable ride every time. Modern vehicles built for your convenience.",
        },
        {
          image:
            "https://www.realsimple.com/thmb/aJDUpqoFWZXJdFvU5XPkjjmAV7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/impulse-buying-2000-d569eacebb0c48fa8766965d0352151c.jpg",
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
