import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
