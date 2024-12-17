import React from "react";

const FooterBanner = () => {
  return (
    <div className="relative w-full bg-gray-900 py-8 flex items-center justify-center overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

      <div className="relative z-10 text-center px-4">
        {/* Animated Text */}
        <h2 className="text-white text-3xl lg:text-4xl font-bold uppercase tracking-wide animate-text-slide">
          Bringing You The Best Experience
        </h2>

        <p className="text-gray-300 mt-2 text-sm lg:text-base animate-fade-in">
          Your journey, our priority.
        </p>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes textSlide {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-text-slide {
          animation: textSlide 1.5s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default FooterBanner;
