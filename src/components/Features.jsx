import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPiggyBank, FaTrain } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="w-[90%] lg:w-[95%] relative py-8 mx-auto">
      {/* Section Title */}
      <div className="flex flex-col mb-6 justify-center items-center">
        <h1 className="text-lg lg:text-3xl text-yellow-500 z-40 text-center font-bold ">
          Why Choose Us
        </h1>
        <p className="z-40 text text-center font-medium text-sm lg:text-base">
          Fast, reliable transit made for your ease.
        </p>
      </div>
      {/* Bottom Bubbles */}
      <div className="absolute -top-10 -left-32  w-80 h-80 bg-yellow-400/20 rounded-full z-0"></div>
      <div className="absolute -bottom-10 -right-32 w-40 h-40 bg-yellow-400/20 rounded-full z-0"></div>

      {/* Service Cards Container */}
      <div className="flex flex-col w-full lg:grid lg:grid-cols-3 lg:gap-6 gap-4 items-center justify-center mx-auto">
        {/* Service Card */}
        {[
          // {
          //   icon: <FaMapMarkerAlt size={28} />,
          //   title: "Real-time Tracking",
          //   description:
          //     "Know exactly where your ride is in real-time. Stay updated and avoid unnecessary wait times.",
          // },
          {
            icon: <FaRegCalendarAlt size={25} />,
            title: "Flexible Scheduling",
            description:
              "Plan trips effortlessly with customizable schedules that fit your lifestyle.",
          },
          {
            icon: <FaPiggyBank size={25} />,
            title: "Affordable Pricing",
            description:
              "Save money on your daily commute with budget-friendly plans tailored for everyone.",
          },
          {
            icon: <FaTrain size={25} />,
            title: "Multiple Transport Modes",
            description:
              "Seamlessly transition between buses, trains, and other transport modes, all in one platform.",
          },
          {
            icon: <RiCustomerService2Fill size={25} />,
            title: "Reliable Customer Support",
            description:
              "Our dedicated support team is here 24/7 to assist with any issues or questions.",
          },
          {
            icon: <FaTruck size={25} />,
            title: "Seamless Parcel Delivery",
            description:
              "Send and receive parcels easily and efficiently, all from one platform.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="p-4 border z-40 bg-white relative rounded-lg shadow-md overflow-hidden border-yellow-100 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300 w-full"
          >
            {/* Image Overlay */}
            <div className="absolute -bottom-7 -right-4 z-20 bg-yellow-400/20 w-24 h-24 object-cover rounded-full"></div>

            <span className="w-16 h-16 flex justify-center items-center rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 text-yellow-800 shrink-0 shadow-lg">
              <span className="w-14 h-14 flex justify-center items-center rounded-full  border-yellow-100 bg-yellow-100 text-yellow-600 shrink-0">
                {service.icon}
              </span>
            </span>
            <div className="flex flex-col">
              <h1 className="font-semibold z-40 text-sm lg:text-base text-gray-800">
                {service.title}
              </h1>
              <p className="text-xs lg:text-sm z-40 text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
