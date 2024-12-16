import React from "react";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaPiggyBank, FaTrain } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";

const Features = () => {
  return (
    <div className=" w-[90%] lg:w-[95%] py-10  ">
      <div className=" flex flex-col mb-5 justify-center items-center">
        <h1 className=" text-lg text-center font-bold">Why Choose us</h1>
        <p className="text-yellow-500 text-center font-medium  text-sm">
          Fast,reliable transit made for your ease.
        </p>
      </div>

      <div className="flex flex-col w-[95%] lg:grid lg:grid-cols-3 lg:gap-6 gap-4 items-center justify-center mx-auto">
        {/* Service Card 1 */}
        <div className="p-4 border rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
          <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-yellow-100 text-yellow-600 shrink-0">
            <FaMapMarkerAlt size={24} />
          </span>
          <div>
            <h1 className="font-semibold text-gray-800">Real-time Tracking</h1>
            <p className="text-sm text-gray-600">
              Know exactly where your ride is in real-time. Stay updated and
              avoid unnecessary wait times.
            </p>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="p-4 border rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
          <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-yellow-100 text-yellow-600 shrink-0">
            <FaRegCalendarAlt size={24} />
          </span>
          <div>
            <h1 className="font-semibold text-gray-800">Flexible Scheduling</h1>
            <p className="text-sm text-gray-600">
              Plan trips effortlessly with customizable schedules that fit your
              lifestyle.
            </p>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="p-4 border rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
          <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-yellow-100 text-yellow-600 shrink-0">
            <FaPiggyBank size={24} />
          </span>
          <div>
            <h1 className="font-semibold text-gray-800">Affordable Pricing</h1>
            <p className="text-sm text-gray-600">
              Save money on your daily commute with budget-friendly plans
              tailored for everyone.
            </p>
          </div>
        </div>

        {/* Service Card 4 */}
        <div className="p-4 border rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
          <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-yellow-100 text-yellow-600 shrink-0">
            <FaTrain size={24} />
          </span>
          <div>
            <h1 className="font-semibold text-gray-800">
              Multiple Transport Modes
            </h1>
            <p className="text-sm text-gray-600">
              Seamlessly transition between buses, trains, and other transport
              modes, all in one platform.
            </p>
          </div>
        </div>

        {/* Service Card 5 */}
        <div className="p-4 border rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
          <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-yellow-100 text-yellow-600 shrink-0">
            <RiCustomerService2Fill size={24} />
          </span>
          <div>
            <h1 className="font-semibold text-gray-800">
              Reliable Customer Support
            </h1>
            <p className="text-sm text-gray-600">
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
