import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import madeForEaseLogo from "../assets/newLogo.jpeg"; // Replace with actual logo path
import kulipaLogo from "../assets/kulipal.jpeg"; // Replace with actual logo path

const Shop = () => {
  const images = [
    {
      url: "https://venues.ng/wp-content/uploads/2023/07/Evelyn-Marquee-event-center-1024x1024.jpg",
      caption: "Book Event Venues",
    },
    {
      url: "https://media-cdn.tripadvisor.com/media/photo-o/16/f0/4a/57/hotel-exterior.jpg",
      caption: "Book Hotels",
    },
    {
      url: "https://krentdevstorage.blob.core.windows.net/krentfiles/property-6756c1b43c9de9001181cfe4-1733738990280-cover.jpeg",
      caption: "Shortlet Houses",
    },
    {
      url: "https://www.ubereats.com/images/logo.png",
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
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Logos Section */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <img src={madeForEaseLogo} alt="MadeForEase" className="w-20 h-20" />
        <span className="text-white font-semibold text-xl">×</span>
        <img src={kulipaLogo} alt="Kulipa" className="w-20 h-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center gap-6">
        {/* Caption for each image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold"
        >
          {images[currentImage].caption}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl"
        >
          Enjoy <span className="font-bold text-blue-500">25% off</span> when
          you book event venues, hotels, shortlet apartments, or order delicious
          food via Kulipa.
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="https://kulipal.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          Visit Kulipal Now
        </motion.a>
      </div>

      {/* Powered By Section */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm text-white">
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
