import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Shop = () => {
  const images = [
    "https://thumbs.dreamstime.com/b/african-american-family-supermarket-buying-food-doing-grocery-shopping-black-couple-together-using-phone-app-walking-cart-201554203.jpg",
    "https://plus.unsplash.com/premium_photo-1661380434047-65f0e315ed04?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
    "https://retailsupermarkets.com/wp-content/uploads/2021/12/DSC_8396-scaled.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center gap-6">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm uppercase tracking-widest text-yellow-400"
        >
          {/* MadeForEase Shop Coming Soon */}
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl uppercase md:text-5xl font-extrabold leading-tight"
        >
          Proudly sponsored by{" "}
          <span className="text-yellow-500">Kulipa Business</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl"
        >
          Enjoy <span className="font-bold text-yellow-500">25% off</span> when
          you use our link to book event venues, hotels, shortlet apartments, or
          order a delicious meal on Kulipa.
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="https://kulipa.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="inline-block bg-blue-500 hover:bg-blue-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          Visit Kulipal Now
        </motion.a>
      </div>
    </div>
  );
};

export default Shop;
