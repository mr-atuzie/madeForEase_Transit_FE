import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUtensils, FaHome } from "react-icons/fa";
import madeForEaseLogo from "../assets/newLogo.jpeg"; // Replace with actual logo path
import kulipaLogo from "../assets/kulipal.jpeg"; // Replace with actual logo path

const Shop = () => {
  const images = [
    {
      url: "https://venues.ng/wp-content/uploads/2023/07/Evelyn-Marquee-event-center-1024x1024.jpg",
      caption: "Book Event Venues",
      icon: <FaUtensils size={24} />,
    },
    {
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubereats.com%2Fza%2Fnear-me%2Fnigerian&psig=AOvVaw3HYBN2eKBjSIFy2nsffW26&ust=1735984248864000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOivnbWj2YoDFQAAAAAdAAAAABAI",
      caption: "Order Food",
      icon: <FaUtensils size={24} />,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f0/4a/57/hotel-exterior.jpg?w=1200&h=-1&s=1",
      caption: "Book Hotels",
      icon: <FaBuilding size={24} />,
    },
    {
      url: "https://krentdevstorage.blob.core.windows.net/krentfiles/property-6756c1b43c9de9001181cfe4-1733738990280-cover.jpeg",
      caption: "Shortlet Houses",
      icon: <FaHome size={24} />,
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

      {/* Logos */}
      <div className="absolute top-4 left-4 flex items-center gap-4 z-20">
        <img src={madeForEaseLogo} alt="MadeForEase" className="w-16 h-16" />
        <img src={kulipaLogo} alt="Kulipa" className="w-16 h-16" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center gap-6">
        {/* Caption for each image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-xl font-semibold"
        >
          {images[currentImage].icon}
          {images[currentImage].caption}
        </motion.div>

        {/* Subtle Sponsor Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm text-blue-300"
        >
          Proudly sponsored by{" "}
          <span className="text-blue-500">Kulipa Business</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl"
        >
          Enjoy <span className="font-bold text-blue-500">25% off</span> when
          you use our link to book event venues, hotels, shortlet apartments, or
          order a delicious meal on Kulipa.
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
    </div>
  );
};

export default Shop;
