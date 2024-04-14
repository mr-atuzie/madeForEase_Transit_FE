import React from "react";
import PackageCard from "./PackageCard";

const Pricing = () => {
  return (
    <div className=" font2 py-8">
      <div className=" w-[90%] mx-auto">
        <h1 className="  text-2xl text-center font-extrabold mb-3">
          Our Packages
        </h1>
        <div className=" grid gap-6 grid-cols-1 md:grid-cols-4 justify-between">
          <PackageCard title="Diamond plan" />
          <PackageCard title="Gold plan" />
          <PackageCard title="Silver plan" />
          <PackageCard title="Bronze plan" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
