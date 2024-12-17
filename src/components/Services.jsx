import React from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpeg";

// Service Data
const servicesData = [
  {
    id: 1,
    title: "Travel With Ease",
    description:
      "Fast, reliable transit made for your convenience. Plan your journeys effortlessly.",
    image: service1,
  },
  {
    id: 2,
    title: "Rent Rides",
    description:
      "Rent a car for as low as 50,000 Naira per day. Flexible and affordable options available.",
    image: service2,
  },
  {
    id: 3,
    title: "Send Parcels",
    description:
      "Simplify sending parcels with fast, secure, and reliable delivery services.",
    image: service3,
  },
  {
    id: 4,
    title: "Receive Parcels",
    description:
      "Worry-free parcel receiving with timely delivery right to your doorstep.",
    image: service4,
  },
  {
    id: 5,
    title: "Supermarket Delivery",
    description:
      "Get your groceries delivered straight to your door quickly and efficiently.",
    image: service5,
  },
];

const Services = () => {
  return (
    <div className="w-[90%] lg:w-[95%] py-8 mx-auto relative">
      {/* Header Section */}
      <div className="flex flex-col mb-8 justify-center items-center">
        <h1 className="text-3xl text-center font-bold text-yellow-500">
          Our Services
        </h1>
        <p className="text-gray-600 font-medium text-center text-sm mt-2">
          Simplifying the Art of Transportation
        </p>
      </div>

      {/* Bottom Bubbles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full z-0"></div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative border-2 border-yellow-500"
          >
            {/* Image with Overlay */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-yellow-500/30"></div>
            </div>

            {/* Card Content */}
            <div className="p-6 text-center">
              <h3 className=" lg:text-lg font-bold text-yellow-500">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
