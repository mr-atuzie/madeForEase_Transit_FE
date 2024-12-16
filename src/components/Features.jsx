import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className=" w-[90%] lg:w-[95%]  ">
      <h1 className=" text-lg font-semibold">Why Choose us</h1>
      <p className="text-gray-500 text-sm">
        Fast,reliable transit made for your ease.
      </p>

      <div className=" grid grid-cols-1 lg:grid-cols-3">
        <div className=" p-3 flex flex-col gap-3  shadow-sm">
          <span className=" w-14 h-14 rounded-lg flex justify-center items-center bg-yellow-100">
            <FaMapMarkerAlt size={20} />
          </span>

          <h1>Real-time Tracking</h1>
          <p>
            Know exactly where your ride is in real-time. Stay updated and avoid
            unnecessary wait times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
