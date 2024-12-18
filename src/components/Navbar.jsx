import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import {
  FaHistory,
  FaHome,
  FaInfoCircle,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white w-full fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="w-[90%] lg:w-[95%] flex items-center justify-between h-[60px] mx-auto">
        {/* Logo */}
        <div className="flex items-center lg:gap-10">
          <h1 className="tracking-wide text-xs lg:text-base font-bold uppercase">
            Made For Ease Transit
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 items-center">
          {[
            { name: "Features", icon: <FaHome /> },
            { name: "Services", icon: <FaInfoCircle /> },
            { name: "Contact Us", icon: <FaInfoCircle /> },
            { name: "Invest History", icon: <FaHistory /> },
            { name: "Transactions", icon: <FaWallet /> },
            { name: "Referral", icon: <FaUser /> },
            { name: "My Account", icon: <FaUser /> },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/${item.name.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium text-gray-700 hover:text-yellow-500 transition-all ${
                    isActive ? "text-yellow-500 font-bold" : ""
                  }`
                }
                aria-label={item.name}
              >
                {item.icon} {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/login">
            <button className="border-2 font-medium border-gray-700 rounded-md px-4 py-2 hover:bg-gray-100 transition-all">
              Log in
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="font-medium bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800 transition-all">
              Register
            </button>
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenu(!menu)}
          className="lg:hidden z-50 text-gray-800"
          aria-label="Toggle menu"
        >
          {menu ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] right-0 w-full bg-black/50 transform ${
          menu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="w-full bg-yellow-50 p-6 shadow-lg">
          <ul className="flex flex-col gap-4 lg:gap-6">
            {[
              { name: "Home", icon: <FaHome />, path: "/" },
              { name: "Services", icon: <FaInfoCircle />, path: "/services" },
              {
                name: "Contact Us",
                icon: <FaInfoCircle />,
                path: "/contact-us",
              },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 font-medium text-gray-700 hover:text-yellow-500 transition-all ${
                      isActive ? "text-yellow-500 font-bold" : ""
                    }`
                  }
                  aria-label={item.name}
                >
                  {item.icon} {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/login">
                <button
                  onClick={() => setMenu(false)}
                  className="w-full bg-yellow-500 text-white flex items-center justify-center gap-2 rounded-md py-2 hover:bg-gray-300 transition-all"
                >
                  <span>
                    <FaShop size={20} />
                  </span>
                  <span>Visit shop</span>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
