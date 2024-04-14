import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, answer }) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className=" mb-3">
      <button
        className=" p-2.5 bg-orange-50 w-full flex justify-between text-sm lg:text-base items-center"
        onClick={() => setAccordion(!accordion)}
      >
        <h1 className=" font-medium">{title}</h1>

        {accordion ? (
          <span className=" text-orange-500">
            <FaMinus />
          </span>
        ) : (
          <span className=" text-orange-500">
            <FaPlus />
          </span>
        )}
      </button>
      <div
        className={`grid p-2 overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordion ? " grid-rows-[1fr] block" : "grid-rows-[0fr] hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
