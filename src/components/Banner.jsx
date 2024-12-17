import React from "react";

import banner from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {[
        {
          image: banner,
          title: "Simplifying the art of",
          highlight: "Transportation",
          description:
            "Effortless rides, seamless routes, and stress-free travel for your daily commutes.",
        },
        {
          image: banner2,
          title: "Taking Travel To New Heights In",
          highlight: "Port Harcourt City",
          description:
            "Explore the beauty of Port Harcourt with our reliable and modern travel solutions.",
        },
        {
          image: banner4,
          title: "Let us bring the",
          highlight: "Supermarket",
          description:
            "Save time and energy — let us shop, pack, and deliver your groceries to your doorstep.",
        },
        {
          image: banner3,
          title: "Rent a car per day for as low as",
          highlight: "₦50,000",
          description:
            "Affordable car rentals for business, travel, and leisure — luxury made accessible.",
        },
      ].map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-[95%] mx-auto rounded-lg h-[60vh] lg:h-[80vh] overflow-hidden group">
            {/* Image with Scale Animation */}
            <img
              src={slide.image}
              className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              alt="Banner"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-12 gap-4 text-white">
              <h1 className="text-2xl lg:text-4xl font-extrabold leading-[10px]">
                {slide.title}{" "}
                <span className="text-yellow-500">{slide.highlight}</span>
              </h1>
              <p className="text-sm lg:text-base text-gray-200 max-w-lg">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-yellow-500 text-sm lg:text-base font-medium rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300 ease-in-out">
                  Get Started
                </button>
                <button className="px-6 py-2 bg-white text-yellow-500 text-sm lg:text-base font-medium rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
