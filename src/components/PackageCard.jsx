import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const PackageCard = ({ title }) => {
  return (
    <div className=" shadow-md p-3 border rounded">
      <h1 className=" text-2xl font-extrabold">{title}</h1>
      <div className=" my-4">
        <span className=" text-gray-500 text-sm font-medium">Plan price</span>
        <h3 className=" text-lg font-extrabold -mt-2">$5,000</h3>
      </div>

      <button className=" flex items-center gap-4 mb-4 justify-center  bg-transparent rounded font-semibold text-orange-500 py-2 border-2  border-orange-500 w-full">
        <span> Get started</span>

        <span>
          <IoIosArrowForward />
        </span>
      </button>

      <p className="  text-sm mb-8">
        <strong>Lorem ipsum dolor sit</strong> amet consectetur adipisicing
        elit. Culpa earum corrupti consequuntur deserunt optio, reiciendis
        <strong> repellat cumque </strong> voluptatum hic repellendus.
      </p>

      <div className=" flex items-center gap-2">
        <span className=" text-green-300">
          <FaCheck />
        </span>
        <p className=" text-xs">
          Lorem, ipsum dolor sit amet consectetur . Explicabo, minima!
        </p>
      </div>
      <div className=" flex items-center gap-2">
        <span className=" text-green-300">
          <FaCheck />
        </span>
        <p className=" text-sm">
          sit amet consectetur adipisicing. Explicabo, minima!
        </p>
      </div>
      <div className=" flex items-center gap-2">
        <span className=" text-green-300">
          <FaCheck />
        </span>
        <p className=" text-sm">
          Lorem, ipsum adipisicing elit. Explicabo, minima!
        </p>
      </div>
      <div className=" flex items-center gap-2">
        <span className=" text-green-300">
          <FaCheck />
        </span>
        <p className=" text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. E
        </p>
      </div>
      <div className=" flex items-center gap-2">
        <span className=" text-green-300">
          <FaCheck />
        </span>
        <p className=" text-sm">
          Lorem, ipsum consectetur adipisicing elit. Explicabo, minima!
        </p>
      </div>
    </div>
  );
};

export default PackageCard;
