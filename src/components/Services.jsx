import React from "react";
import service from "../assets/service.jpg";

const Services = () => {
  return (
    <div className="w-[90%] lg:w-[95%] py-8 mx-auto">
      {/* Header Section */}
      <div className="flex flex-col mb-8 justify-center items-center">
        <h1 className="text-2xl text-center font-bold text-gray-800">
          Our Services
        </h1>
        <p className="text-yellow-500 font-medium text-center text-sm">
          Simplifying the Art of Transportation
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={service}
            alt="Travel With Ease"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-gray-800">
              Travel With Ease
            </h3>
            <p className="text-gray-600 text-sm">
              Fast, reliable transit made for your convenience. Plan your
              journeys effortlessly.
            </p>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Rent Rides"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-yellow-600">Rent Rides</h3>
            <p className="text-gray-600 text-sm">
              Rent a car for as low as 50,000 Naira per day. Flexible and
              affordable options available.
            </p>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Send Parcels"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-gray-800">Send Parcels</h3>
            <p className="text-gray-600 text-sm">
              Simplify sending parcels with fast, secure, and reliable delivery
              services.
            </p>
          </div>
        </div>

        {/* Service Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Receive Parcels"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-gray-800">Receive Parcels</h3>
            <p className="text-gray-600 text-sm">
              Worry-free parcel receiving with timely delivery right to your
              doorstep.
            </p>
          </div>
        </div>

        {/* Service Card 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Supermarket Delivery"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-gray-800">
              Supermarket Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Get your groceries delivered straight to your door quickly and
              efficiently.
            </p>
          </div>
        </div>

        {/* Service Card 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Ease Jets"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-gray-800">Ease Jets</h3>
            <p className="text-gray-600 text-sm">
              Private air travel redefined. Enjoy luxury and convenience with
              Ease Jets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
