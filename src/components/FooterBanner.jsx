import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// Import assets for the banners (example images)
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const FooterBanner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000, // Slightly longer to give more emphasis to each slide
        disableOnInteraction: false,
      }}
      className="w-full mt-16"
    >
      {[
        // Slide content
        {
          image: banner1,
          title: "Drive Innovation With",
          highlight: "Seamless Mobility",
          description:
            "Experience a new way to commute with cutting-edge technology that makes every ride efficient, comfortable, and smart.",
        },
        {
          image: banner2,
          title: "Your Future, on the Move",
          highlight: "Electric Solutions",
          description:
            "Step into the future with electric vehicles that redefine performance, sustainability, and luxury.",
        },
        {
          image: banner3,
          title: "Explore the World of",
          highlight: "Sustainable Travel",
          description:
            "Our electric-powered transportation is designed for a cleaner planet, reducing your carbon footprint while enhancing your journey.",
        },
        {
          image: banner4,
          title: "Smart Travel with",
          highlight: "Precision & Speed",
          description:
            "Get from A to B faster with intelligent, real-time travel solutions — powered by innovation and reliability.",
        },
      ].map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-[95%] mx-auto rounded-lg h-[40vh] lg:h-[50vh] overflow-hidden group">
            {/* Image with Gradient Overlay */}
            <img
              src={slide.image}
              className="w-full h-full object-cover rounded-lg"
              alt="Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-12 gap-4 text-white">
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

export default FooterBanner;
