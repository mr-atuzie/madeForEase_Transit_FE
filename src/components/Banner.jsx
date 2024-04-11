import React from "react";

const Banner = () => {
  return (
    <div className=" w-full lg:h-[80vh]">
      <video className=" w-full h-full object-cover" muted autoPlay loop>
        <source src="https://universaloptions.org/wp-content/uploads/2021/11/Hero-Video.mp4" />
      </video>
    </div>
  );
};

export default Banner;
