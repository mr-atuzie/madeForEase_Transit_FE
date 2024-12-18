import React from "react";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import FooterBanner from "../components/FooterBanner";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[60px]">
        <ContactUs />
      </div>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Contact;
