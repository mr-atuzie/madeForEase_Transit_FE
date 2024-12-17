import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Features from "../components/Features";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <Services />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
