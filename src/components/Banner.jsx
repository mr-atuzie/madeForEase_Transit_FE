import React from "react";

import banner from "../assets/demo.jpg";

const Banner = () => {
  return (
    <div className=" font2  rounded-lg w-full h-[70vh] lg:h-[90vh]">
      <img className=" w-full h-full" src={banner} alt="" />
    </div>
  );
};

export default Banner;
