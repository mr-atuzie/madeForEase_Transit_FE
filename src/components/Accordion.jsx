import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, answer }) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className=" py-2">
      <button
        className=" w-full flex justify-between text-sm lg:text-base items-center"
        onClick={() => setAccordion(!accordion)}
      >
        <h1>{title}</h1>

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
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-xs lg:text-sm ${
          accordion
            ? " grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
