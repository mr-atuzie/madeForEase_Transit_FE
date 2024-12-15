import React from "react";

import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className=" font2 w-[90%] lg:w-[95%] mx-auto rounded-lg  h-[50vh] lg:h-[70vh]">
      <img
        className=" w-full opacity-50 object-cover mx-auto rounded-lg h-full"
        src={banner}
        alt=""
      />
    </div>
  );
};

export default Banner;
