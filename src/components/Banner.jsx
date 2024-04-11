import React from "react";

const Banner = () => {
  return (
    <div className=" relative w-full h-[80vh]">
      <video className=" w-full h-full object-cover" muted autoPlay loop>
        <source src="https://universaloptions.org/wp-content/uploads/2021/11/Hero-Video.mp4" />
      </video>

      <div className=" absolute top-0 bottom-0 bg-black w-full h-full"></div>
    </div>
  );
};

export default Banner;
