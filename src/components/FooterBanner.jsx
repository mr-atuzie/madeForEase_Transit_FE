import React from "react";
import { motion } from "framer-motion";

const FooterBanner = () => {
  const words = [
    "FAST",
    "RELIABLE",
    "TRANSIT",
    "MADE",
    "FOR",
    "YOUR",
    "EASE",
    "AND",
    "CONVENIENCE",
    "EVERYDAY",
  ];

  const wordVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? "100%" : "-100%", // Alternate direction
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3, // Delay for each word
        ease: "easeInOut",
      },
    }),
    exit: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? "-100%" : "100%", // Opposite direction on exit
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-[40vh] bg-yellow-500 flex justify-center items-center overflow-hidden">
      <motion.div
        className="flex flex-wrap justify-center items-center gap-2 text-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        key={Math.random()} // Ensures the animation loops
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-widest px-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default FooterBanner;
