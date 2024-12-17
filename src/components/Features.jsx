import React from "react";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaPiggyBank, FaTrain } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";

const Features = () => {
  return (
    <div className="w-[90%] lg:w-[95%] py-8 mx-auto">
      {/* Section Title */}
      <div className="flex flex-col mb-6 justify-center items-center">
        <h1 className="text-lg lg:text-2xl text-center font-bold text-gray-800">
          Why Choose Us
        </h1>
        <p className="text-yellow-500 text-center font-medium text-sm lg:text-base">
          Fast, reliable transit made for your ease.
        </p>
      </div>

      {/* Service Cards Container */}
      <div className="flex flex-col w-full lg:grid lg:grid-cols-3 lg:gap-6 gap-4 items-center justify-center mx-auto">
        {/* Service Card */}
        {[
          {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Real-time Tracking",
            description:
              "Know exactly where your ride is in real-time. Stay updated and avoid unnecessary wait times.",
          },
          {
            icon: <FaRegCalendarAlt size={28} />,
            title: "Flexible Scheduling",
            description:
              "Plan trips effortlessly with customizable schedules that fit your lifestyle.",
          },
          {
            icon: <FaPiggyBank size={28} />,
            title: "Affordable Pricing",
            description:
              "Save money on your daily commute with budget-friendly plans tailored for everyone.",
          },
          {
            icon: <FaTrain size={28} />,
            title: "Multiple Transport Modes",
            description:
              "Seamlessly transition between buses, trains, and other transport modes, all in one platform.",
          },
          {
            icon: <RiCustomerService2Fill size={28} />,
            title: "Reliable Customer Support",
            description:
              "Our dedicated support team is here 24/7 to assist with any issues or questions.",
          },
          {
            icon: <RiCustomerService2Fill size={28} />,
            title: "Seamless Parcel Delivery",
            description:
              "Send and receive parcels easily and efficiently, all from one platform.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300 w-full"
          >
            <span className="w-14 h-14 flex justify-center items-center rounded-lg bg-yellow-100 text-yellow-600 shrink-0">
              {service.icon}
            </span>
            <div className="flex flex-col">
              <h1 className="font-semibold text-sm lg:text-base text-gray-800">
                {service.title}
              </h1>
              <p className="text-xs lg:text-sm text-gray-600">
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
