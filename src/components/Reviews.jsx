import React from "react";
import { IoStar } from "react-icons/io5";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
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
  const testimonals = [
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dougburkephoto.com%2Fblog-post%2F5-posing-tips-for-mens-headshots&psig=AOvVaw38JSmV1S3cGP-UyCp_uAVu&ust=1734396531180000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDgrN6Iq4oDFQAAAAAdAAAAABAI",
      name: "osas iptimi",
      job: "Doctor",
    },
    {
      img: "https://media.istockphoto.com/id/1352025984/photo/headshot-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=6LxOFkwfu3XYgfySJfI1uTpP1JUX4ZIgl_1CdpQBk3s=",
      name: "Christopher omokachi",
      job: "Trader",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/3690ca61-6a9d-4c93-a2a5-83a5f2aa1648/2022-08-16-Trinet-0540-Martinez-Juan.jpg",
      name: "Isreal amadi",
      job: "OAP",
    },
    {
      img: "https://i0.wp.com/ridethewave.co/wp-content/uploads/2023/11/RTW_9486_websize.jpg?resize=739%2C924&ssl=1",
      name: "Ahmed Musa",
      job: "Footballer",
    },
    {
      img: "https://t3.ftcdn.net/jpg/05/83/41/98/360_F_583419866_97XPxjHDJkQ2RKMmGWdgrbqJhEZeQb55.jpg",
      name: "Obinna chukwu",
      job: "Accountant",
    },
    {
      img: "https://photos.peterhurley.com/wp-content/uploads/2023/02/alex_0033-2000x1334.jpg",
      name: "Friday Awolowo",
      job: "Economist",
    },
    {
      img: "https://media.istockphoto.com/id/1394347360/photo/confident-young-black-businesswoman-standing-at-a-window-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=tOFptpFTIaBZ8LjQ1NiPrjKXku9AtERuWHOElfBMBvY=",
      name: "Daniel Okpia",
      job: "pastor",
    },
  ];
  return (
    <div className="w-full  py-16">
      <div className=" w-[90%]  mx-auto ">
        <div className=" flex flex-col gap-4 justify-center mb-10 items-center">
          <div className="  text-center px-6 py-1.5 bg-yellow-50 rounded-md w-fit">
            Testimonial
          </div>
          <h1 className=" text-4xl font-semibold text-center">
            What our users say
          </h1>
        </div>

        {/* desktop slider */}
        <div className="hidden lg:block">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {testimonals.map((testimonal, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" shadow-lg border-2 border-blue-50 rounded-lg p-5">
                    <div className=" flex justify-between items-center">
                      <div className=" flex items-center   my-4 gap-2">
                        <img
                          src={testimonal.img}
                          className=" w-10 h-10 rounded-full object-cover"
                          alt=""
                        />
                        <div>
                          <h3 className=" capitalize">{testimonal.name}</h3>
                          <p className=" text-sm text-gray-400 -mt-1">
                            {testimonal.job}
                          </p>
                        </div>
                      </div>

                      <div className=" flex items-center gap-1 text-yellow-400">
                        <IoStar size={20} />
                        <IoStar size={20} />
                        <IoStar size={20} />
                        <IoStar size={20} />
                        <IoStar size={20} />
                      </div>
                    </div>

                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore consequatur neque debitis vel porro, cupiditate
                      aliquam, consectetur sed quisquam numquam asperiores
                      accusantium, tempora nesciunt molestias.
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="  lg:hidden">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {testimonals.map((testimonal, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" shadow-lg border-2 relative overflow-hidden rounded-lg p-2.5 lg:p-5">
                    <div className=" flex justify-between items-center">
                      <div className=" flex items-center   my-4 gap-2">
                        <img
                          src={testimonal.img}
                          className=" w-10 h-10 rounded-full object-cover"
                          alt=""
                        />
                        <div>
                          <h3 className=" capitalize text-sm">
                            {testimonal.name}
                          </h3>
                          <p className=" capitalize text-xs text-gray-400 -mt-1">
                            {testimonal.job}
                          </p>
                        </div>
                      </div>

                      <div className=" flex items-center gap-1 text-yellow-400">
                        <IoStar size={15} />
                        <IoStar size={15} />
                        <IoStar size={15} />
                        <IoStar size={15} />
                        <IoStar size={15} />
                      </div>
                    </div>

                    <p className=" text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore consequatur neque debitis vel porro, cupiditate
                      aliquam, consectetur sed quisquam numquam asperiores
                      accusantium, tempora nesciunt molestias.
                    </p>

                    <div className=" absolute -bottom-10 rounded-full right-0 w-24 h-24 bg-yellow-500 opacity-50 z-20"></div>
                    <div className=" absolute -top-10 rounded-full left-0 w-24 h-24 bg-yellow-500 opacity-50 z-20"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
