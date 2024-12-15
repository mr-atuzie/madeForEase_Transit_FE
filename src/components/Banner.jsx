import React from "react";

import banner from "../assets/demo.jpg";

const Banner = () => {
  return (
    <div className=" font2 w-[90%] mx-auto rounded-lg  h-[70vh] lg:h-[90vh]">
      <img
        className=" w-full object-cover mx-auto rounded-lg h-full"
        src={banner}
        alt=""
      />
    </div>
  );
};

export default Banner;
