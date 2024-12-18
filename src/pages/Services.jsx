import React from "react";
import Navbar from "../components/Navbar";
import ServicesComponent from "../components/Services";
import Features from "../components/Features";
import FooterBanner from "../components/FooterBanner";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-[60px]">
        <ServicesComponent />
      </div>
      <Features />
      <FooterBanner />
    </div>
  );
};

export default Services;
