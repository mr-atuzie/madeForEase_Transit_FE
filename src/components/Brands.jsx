import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  const logos = [
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/Mastercard-logo-500x281-min.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/Oracle-logo-500x281-min.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/Hermes-Logo-500x284-min.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/McDonalds-logo-500x281-min.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/Agricultural-Bank-of-China-logo-500x281-min.png",
    },
  ];
  return (
    <div>
      <div className=" w-[90%] mx-auto">
        <h1 className=" text-center font-extrabold">Our Parteners</h1>
        <p className=" text-gray-500 text-sm text-center mb-6">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <Marquee speed={70} gradient={false} pauseOnHover>
          <div className=" grid gap-4 grid-cols-4">
            {logos.map((logo, index) => {
              return (
                <img className=" w-20" key={index} src={logo.img} alt="" />
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
