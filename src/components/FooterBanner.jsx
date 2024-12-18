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

  // Animations
  const wordVariants = {
    initial: { opacity: 0, y: "50%" },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2, // Delay per word
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-[40vh] bg-yellow-500 flex justify-center items-center overflow-hidden">
      <div className="flex flex-wrap justify-center gap-4 text-center">
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariants}
            initial="initial"
            animate="animate"
            className="text-4xl lg:text-6xl font-extrabold text-white tracking-widest px-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
      {/* Animated Highlight */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-white/20"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>
    </div>
  );
};

export default FooterBanner;
