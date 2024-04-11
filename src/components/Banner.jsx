import React from "react";

const Banner = () => {
  return (
    <div className=" font2 relative w-full h-[70vh] lg:h-[90vh]">
      <video className=" w-full h-full object-cover" muted autoPlay loop>
        <source src="https://universaloptions.org/wp-content/uploads/2021/11/Hero-Video.mp4" />
      </video>

      <div className=" absolute top-0 bottom-0 bg-black/65 w-full h-full flex flex-col justify-center ">
        <div className=" w-[90%] mx-auto">
          <p className=" text-3xl capitalize lg:text-6xl font-bold text-gray-50">
            Your access to global finacial market
          </p>
          <p className=" text-white text-sm lg:text-base font-medium mt-1">
            Invest in hundreds of US stocks commission free
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
