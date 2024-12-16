import React from "react";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaPiggyBank, FaTrain } from "react-icons/fa6";

const Features = () => {
  return (
    <div className=" w-[90%] lg:w-[95%] py-12  ">
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-lg text-center font-bold">Why Choose us</h1>
        <p className="text-gray-500 text-center text-sm">
          Fast,reliable transit made for your ease.
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className=" p-3 border flex  gap-3  shadow-sm">
          <span className=" w-14 h-14 rounded-lg flex justify-center items-center bg-yellow-100 text-yellow-600">
            <FaMapMarkerAlt size={20} />
          </span>

          <div>
            <h1 className=" font-semibold">Real-time Tracking</h1>
            <p className=" text-sm text-gray-600">
              Know exactly where your ride is in real-time. Stay updated and
              avoid unnecessary wait times.
            </p>
          </div>
        </div>

        <div className=" p-3 flex border  gap-3  shadow-sm">
          <span className=" w-14 h-14 rounded-lg flex justify-center items-center bg-yellow-100 text-yellow-600">
            <FaRegCalendarAlt size={20} />
          </span>

          <div>
            <h1 className=" font-semibold">Flexible Scheduling</h1>
            <p className=" text-sm text-gray-600">
              Plan trips effortlessly with customizable schedules that fit your
              lifestyle.
            </p>
          </div>
        </div>

        <div className=" p-3 flex border  gap-3  shadow-sm">
          <span className=" w-14 h-14 rounded-lg flex justify-center items-center bg-yellow-100 text-yellow-600">
            <FaPiggyBank size={20} />
          </span>

          <div>
            <h1 className=" font-semibold">Affordable Pricing</h1>
            <p className=" text-sm text-gray-600">
              Save money on your daily commute with budget-friendly plans
              tailored for everyone
            </p>
          </div>
        </div>

        <div className=" p-3 flex border  gap-3  shadow-sm">
          <span className=" w-14 h-14 rounded-lg flex justify-center items-center bg-yellow-100 text-yellow-600">
            <FaTrain size={20} />
          </span>

          <div>
            <h1 className=" font-semibold">Multiple Transport modes</h1>
            <p className=" text-sm text-gray-600">
              Seamlessly transition between buses, trains, and other transport
              modes, all in one platform
            </p>
          </div>
        </div>

        <div className=" p-3 flex border  gap-3  shadow-sm">
          <span className=" w-14 h-14 rounded-lg flex justify-center items-center bg-yellow-100 text-yellow-600">
            <FaTrain size={20} />
          </span>

          <div>
            <h1 className=" font-semibold">Reliable Customer Support</h1>
            <p className=" text-sm text-gray-600">
              Our dedicated support team is here 24/7 to assist with any issues
              or questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
