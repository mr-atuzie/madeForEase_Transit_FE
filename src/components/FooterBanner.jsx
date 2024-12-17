import React from "react";
import { motion } from "framer-motion";

const FooterBanner = () => {
  return (
    <div className="relative w-full bg-yellow-500 py-10 flex items-center justify-center overflow-hidden">
      {/* Text Animation Container */}
      <div className="relative text-center px-4">
        {/* Animated Main Text */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-3xl lg:text-5xl font-bold uppercase tracking-wide leading-tight"
        >
          FAST, RELIABLE TRANSIT
        </motion.h2>

        {/* Sub Text Animation */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-white text-xl lg:text-3xl font-medium uppercase mt-2"
        >
          MADE FOR YOUR EASE AND CONVENIENCE EVERYDAY
        </motion.h3>
      </div>

      {/* Animated Background Bubbles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-600 rounded-full"
      ></motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-400 rounded-full"
      ></motion.div>
    </div>
  );
};

export default FooterBanner;
