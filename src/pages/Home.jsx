import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      Home
      <Footer />
    </div>
  );
};

export default Home;
