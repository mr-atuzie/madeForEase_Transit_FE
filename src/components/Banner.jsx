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
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper // install Swiper modules
      modules={[Autoplay]}
      // spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className=" relative font2 w-[95%] mx-auto rounded-lg  h-[50vh] lg:h-[80vh]">
          <img
            className=" w-full  object-cover mx-auto rounded-lg h-full"
            src={banner}
            alt=""
          />

          <div className=" absolute top-0 bg-black/50 flex px-4 flex-col justify-center gap-2 bottom-0 left-0 w-full h-full rounded-lg">
            <h1 className=" text-2xl font-bold text-white">
              Simplifying the art of{" "}
              <span className=" text-yellow-600">Transportation</span>{" "}
            </h1>

            <p className=" text-gray-200  text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nostrum cum nam alias at rerum, fugit eum non!
            </p>

            <div className=" flex items-center gap-4">
              <button className=" px-4 p-2 rounded-lg bg-yellow-600 text-sm">
                Get started
              </button>

              <button className=" px-4 p-2 rounded-lg bg-yellow-600 text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative font2 w-[95%] mx-auto rounded-lg  h-[50vh] lg:h-[80vh]">
          <img
            className=" w-full  object-cover mx-auto rounded-lg h-full"
            src={banner2}
            alt=""
          />

          <div className=" absolute top-0 bg-black/50 flex px-4 flex-col justify-center gap-2 bottom-0 left-0 w-full h-full rounded-lg">
            <h1 className=" text-2xl font-bold text-white">
              Takng Travel To New Heights In{" "}
              <span className=" text-yellow-600">Port Harcourt City</span>{" "}
            </h1>

            <p className=" text-gray-00 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nostrum cum nam alias at rerum, fugit eum non!
            </p>

            <div className=" flex items-center gap-4">
              <button className=" px-4 p-2 rounded-lg bg-yellow-600 text-sm">
                Get started
              </button>

              <button className=" px-4 p-2 rounded-lg bg-yellow-600 text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative font2 w-[95%] mx-auto rounded-lg  h-[50vh] lg:h-[80vh]">
          <img
            className=" w-full  object-cover mx-auto rounded-lg h-full"
            src={banner4}
            alt=""
          />

          <div className=" absolute top-0 bg-black/50 flex px-4 flex-col justify-center gap-2 bottom-0 left-0 w-full h-full rounded-lg">
            <h1 className=" text-2xl font-bold text-white">
              Let us bring the
              <span className=" text-yellow-600">Supermarket</span> to your
              doorstep.
            </h1>

            <p className=" text-gray-200 text-sm">
              Give us your shsopping list,sit back and let us shop for you
            </p>

            <div className=" flex items-center gap-4">
              <button className=" px-4 p-2 rounded-lg bg-yellow-600 text-sm">
                Get started
              </button>

              <button className=" px-4 p-2 rounded-lg bg-yellow-600 text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative font2 w-[95%] mx-auto rounded-lg  h-[50vh] lg:h-[80vh]">
          <img
            className=" w-full  object-cover mx-auto rounded-lg h-full"
            src={banner3}
            alt=""
          />

          <div className=" absolute top-0 bg-black/50 flex px-4 flex-col justify-center gap-2 bottom-0 left-0 w-full h-full rounded-lg">
            <h1 className=" text-2xl font-bold text-white">
              Rent a car per day for as low as
              <span className=" text-yellow-600">₦50,000</span>{" "}
            </h1>

            <p className=" text-gray-200 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nostrum cum nam alias at rerum, fugit eum non!
            </p>

            <div className=" flex items-center gap-4">
              <button className=" px-4 p-2 rounded-lg bg-yellow-600 text-sm">
                Get started
              </button>

              <button className=" px-4 p-2 rounded-lg bg-yellow-600 text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
