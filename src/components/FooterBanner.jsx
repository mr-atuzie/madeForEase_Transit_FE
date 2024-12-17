import React from "react";
import { motion } from "framer-motion";

const FooterBanner = () => {
  return (
    <div className="relative w-full bg-yellow-600 py-6 overflow-hidden">
      {/* Continuous Scrolling Text */}
      <motion.div
        className="flex items-center"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <p className="text-white uppercase font-bold text-3xl lg:text-4xl tracking-widest whitespace-nowrap">
          FAST, RELIABLE TRANSIT • MADE FOR YOUR EASE AND CONVENIENCE EVERYDAY •
        </p>
        <p className="text-white uppercase font-bold text-3xl lg:text-4xl tracking-widest whitespace-nowrap ml-8">
          FAST, RELIABLE TRANSIT • MADE FOR YOUR EASE AND CONVENIENCE EVERYDAY •
        </p>
      </motion.div>
    </div>
  );
};

export default FooterBanner;
