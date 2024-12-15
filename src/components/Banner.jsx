import React from "react";

import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className=" relative font2 w-[95%] mx-auto rounded-lg  h-[50vh] lg:h-[70vh]">
      <img
        className=" w-full  object-cover mx-auto rounded-lg h-full"
        src={banner}
        alt=""
      />

      <div className=" absolute top-0 bg-black/60 bottom-0 left-0 w-full h-full rounded-lg"></div>
    </div>
  );
};

export default Banner;
