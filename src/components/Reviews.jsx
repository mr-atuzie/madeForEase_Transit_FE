import React from "react";
import { IoStar } from "react-icons/io5";

// import Swiper core and required modules
import {
  // Navigation,
  Pagination,
  // Scrollbar,
  // A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Reviews = () => {
  const testimonials = [
    {
      img: "https://i0.wp.com/ridethewave.co/wp-content/uploads/2023/11/RTW_9486_websize.jpg?resize=739%2C924&ssl=1",
      name: "Osas Iptimi",
      job: "Doctor",
      text: "I think they have one of the fastest service, I have used. ",
    },
    {
      img: "https://thelightcommittee.com/wp-content/uploads/elementor/thumbs/studio-business-headshot-of-a-black-man-in-Los-Angeles-qep2bstk7vlgl6yzkdozfxz606pu8t2vgp6pzqd4pc.jpg",
      name: "Christopher Omokachi",
      job: "Trader",
      text: "Great service and amazing experience. Highly recommend!",
    },
    {
      img: "https://i0.wp.com/ridethewave.co/wp-content/uploads/2023/11/RTW0041-Edit_websize.jpg?resize=739%2C924&ssl=1",
      name: "Israel Amadi",
      job: "OAP",
      text: "Fantastic results! Very pleased with the outcome.",
    },
    {
      img: "https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg",
      name: "Ahmed Musa",
      job: "Footballer",
      text: "Excellent service, will definitely be using this again.",
    },
    // Add more testimonials as necessary
  ];

  return (
    <div className="w-full py-8">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col mb-5 justify-center items-center">
          <h1 className="text-3xl text-center font-bold">Testimonials</h1>
          <p className="text-yellow-500 text-center font-medium text-sm">
            What our customers say
          </p>
        </div>

        {/* Desktop Slider */}
        <div className="hidden lg:block">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-lg border-2 border-yellow-500 rounded-lg p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={testimonial.img}
                        className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500"
                        alt={testimonial.name}
                        loading="lazy"
                      />
                      <div>
                        <h3 className="capitalize text-lg font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="capitalize text-xs text-gray-500">
                          {testimonial.job}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <IoStar key={i} size={20} />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-lg  relative overflow-hidden rounded-lg p-2.5 lg:p-5 transition-transform hover:scale-105">
                  <div className="z-50 flex justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={testimonial.img}
                        className="w-12 h-12 rounded-full z-50 object-cover "
                        alt={testimonial.name}
                        loading="lazy"
                      />
                      <div>
                        <h3 className="capitalize text-sm lg:text-lg z-50 font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="capitalize z-50 text-xs text-gray-500">
                          {testimonial.job}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <IoStar key={i} size={15} />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm z-50 text-gray-700 mb-4">
                    {testimonial.text}
                  </p>

                  {/* Background Bubbles */}
                  <div className="absolute -bottom-10 -right-8 w-28 h-28 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-30 z-20"></div>
                  <div className="absolute -top-16 -left-7 w-28 h-28 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-30 z-20"></div>

                  {/* Image Overlay */}
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <img
                      src={testimonial.img}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover opacity-60"
                      alt={testimonial.name}
                    />
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
