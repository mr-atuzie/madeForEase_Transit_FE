import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Brands />
      <div className=" font2">
        <div className=" w-[90%] mx-auto">
          <h1 className=" text-center font-extrabold">About Us</h1>
          <p className=" text-gray-500 text-sm text-center mb-6">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
