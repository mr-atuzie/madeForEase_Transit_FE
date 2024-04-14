import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const PackageCard = ({ title }) => {
  const lists = [1, 2, 3, 4, 5];
  return (
    <div className=" shadow-md p-3 border rounded">
      <h1 className=" text-2xl uppercase font-extrabold">{title}</h1>
      <div className=" my-4">
        <span className=" text-gray-500 text-sm font-medium ">Plan price</span>
        <h3 className=" text-xl font-extrabold -mt-2">$5,000</h3>
      </div>

      <button className=" flex items-center gap-3 mb-4 justify-center  bg-transparent rounded font-semibold text-orange-500 py-2 border-2  border-orange-500 w-full">
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

      {lists.map((list) => {
        return (
          <div key={list} className=" flex items-center gap-2 mb-1">
            <span className=" text-green-300">
              <FaCheck />
            </span>
            <p className=" text-xs">
              Lorem, ipsum dolor sit amet consectetur . Explicabo, minima!
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PackageCard;
