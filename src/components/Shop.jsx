import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import madeForEaseLogo from "../assets/newLogo.jpeg"; // Replace with actual logo path
import kulipaLogo from "../assets/kulipal.jpeg"; // Replace with actual logo path
import { BsCart4 } from "react-icons/bs";

const Shop = () => {
  const images = [
    {
      url: "https://venues.ng/wp-content/uploads/2023/07/Evelyn-Marquee-event-center-1024x1024.jpg",
      caption: "Event Ticket",
    },
    {
      url: "https://media-cdn.tripadvisor.com/media/photo-o/16/f0/4a/57/hotel-exterior.jpg",
      caption: "Hotel Bookings",
    },
    {
      url: "https://krentdevstorage.blob.core.windows.net/krentfiles/property-6756c1b43c9de9001181cfe4-1733738990280-cover.jpeg",
      caption: "Shortlet Apartment Bookings",
    },
    {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHZ9msTBJM9zJ3t7BdjUEN2kUTPiSH3qxfP8XGqVd82Um5nBhDuOFuBAovAmc2KRkroq_rsMD4ltlKxk-S51UBXLDGIjeZwrnfrC0lfqtFr1WVSy8VVwtKwzDZr_WRfY8Z2l5wqReFBStpGrS-eH9hrXCDWcC3eu3Zgyq6y70SX9MxxqsksLohOGk0/s2048/jollof%20rice%20sisi%20yemmie.jpg",
      caption: "Order Delicious Food",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${images[currentImage].url})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>

      {/* Logo */}
      <img
        src={madeForEaseLogo}
        alt="MadeForEase"
        className="absolute top-6 left-6 w-10 h-10 lg:w-20 lg:h-20 rounded-lg object-cover z-20"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center gap-6 lg:gap-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img
            src={kulipaLogo}
            alt="Kulipa"
            className="w-28 h-16 lg:w-32 lg:h-20 rounded-lg object-cover"
          />
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl lg:text-5xl font-bold uppercase text-white tracking-wider"
        >
          {images[currentImage].caption}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm lg:text-lg text-white max-w-3xl leading-relaxed"
        >
          Enjoy 25% off with{" "}
          <span className="text-blue-500 font-medium">Kulipal</span> when you
          use our link for bookings.
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="https://kulipal.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105"
        >
          Visit Kulipal <BsCart4 size={20} className="text-white" />
        </motion.a>
      </div>

      {/* Footer */}
      <div className="text-center text-xs lg:text-base text-white">
        <p>
          Powered by{" "}
          <span className="font-bold text-yellow-500">MadeForEase</span> and{" "}
          <span className="font-bold text-blue-500">Kulipa Business</span>
        </p>
      </div>
    </div>
  );
};

export default Shop;
