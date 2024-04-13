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
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/Raytheon-Logo-500x313-min.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/Honeywell-Logo-700x394-min.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/China-Merchants-Bank-Logo-min.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/UPS-logo-500x281-min.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/China-Construction-Bank-Corporation-Logo-500x315-min.png",
    },
  ];
  return (
    <div className=" font2 py-8">
      <div className=" w-[90%] lg:w-[60%] mx-auto">
        <h1 className=" text-center font-extrabold">Our Partners</h1>
        <p className=" text-gray-500 text-sm text-center mb-6">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <Marquee direction="right" speed={70} gradient={false} pauseOnHover>
          <div className=" grid gap-4 items-center grid-cols-5 ">
            {logos.slice(0, 5).map((logo, index) => {
              return (
                <img
                  className=" w-14 lg:w-24"
                  key={index}
                  src={logo.img}
                  alt=""
                />
              );
            })}
          </div>
        </Marquee>
        <Marquee direction="left" speed={70} gradient={false} pauseOnHover>
          <div className=" grid gap-4 grid-cols-5">
            {logos.slice(5, 10).map((logo, index) => {
              return (
                <img
                  className=" w-14 lg:w-24"
                  key={index}
                  src={logo.img}
                  alt=""
                />
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
