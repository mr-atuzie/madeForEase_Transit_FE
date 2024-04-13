import React from "react";
// import Announcement from "./Announcement";

const Banner = () => {
  return (
    <div className=" font2 relative w-full h-[70vh] lg:h-[90vh]">
      <video className=" w-full h-full object-cover" muted autoPlay loop>
        <source src="https://universaloptions.org/wp-content/uploads/2021/11/Hero-Video.mp4" />
      </video>

      <div className=" absolute top-0 bottom-0 bg-black/25 w-full h-full flex flex-col justify-center ">
        <div className=" w-[90%] mx-auto">
          <h2 className=" text-2xl capitalize lg:text-6xl font-bold text-gray-50">
            Your access to global finacial market
          </h2>
          <p className=" text-sm text-gray-200 lg:text-base font-medium my-3 lg:max-w-lg">
            Invest in hundreds of US stocks commission free, Access 20,000+
            instruments – across asset classes – to trade, hedge and invest from
            a single account.
          </p>

          {/* <button className=" text-white bg-orange-500 text-sm font-medium py-2 px-6 ">
            Get started
          </button> */}

          <div className=" mt-5 flex gap-5 lg:gap-8">
            <div className=" ">
              <h2 className=" text-center text-xl lg:text-2xl font-bold  text-orange-500">
                $15M <span>+</span>
              </h2>
              <p className="  text-xs lg:text-sm font-medium  text-white">
                Total Deposit
              </p>
            </div>
            <div className=" ">
              <h2 className=" text-orange-500 text-center text-xl lg:text-2xl font-bold">
                13k
              </h2>
              <p className=" text-white text-xs lg:text-sm font-medium capitalize">
                Investors
              </p>
            </div>
            <div className=" ">
              <h2 className=" text-center ttext-xl lg:text-2xl font-bold text-orange-600">
                $55M <span className="">+</span>
              </h2>
              <p className=" text-white text-xs lg:text-sm font-medium ">
                Total Withdrwal
              </p>
            </div>

            <div className=" ">
              <h2 className=" text-center text-xl lg:text-2xl font-bold text-orange-500">
                92%
              </h2>
              <p className=" text-white  text-xs lg:text-sm font-medium ">
                Trading Success
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Announcement /> */}
    </div>
  );
};

export default Banner;
