import React from "react";
import Navbar from "../components/Navbar";
import ServicesComponent from "../components/Services";
import Features from "../components/Features";
import FooterBanner from "../components/FooterBanner";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-[60px]">
        <ServicesComponent />
      </div>
      <Features />
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Services;
